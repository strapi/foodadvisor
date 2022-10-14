const path = require('path');
const util = require('util');
const fse = require('fs-extra');
const unzip = require('unzip-stream');
const crypto = require('crypto');
const uuid = require('uuid-v4');

const zipPath = path.resolve('data.zip');
const dataPath = path.resolve('data');
const uploadDataPath = path.join(dataPath, 'uploads');

const uploadPath = path.join(path.resolve('public'), 'uploads');

const tmpPath = path.resolve('.tmp');

const dotEnv = path.resolve('.env');

const Database = require('better-sqlite3');

async function dumpSqlite() {
  const db = new Database('.tmp/data.db');
  const sql = fse.readFileSync('./data/dump.sql').toString();

  util.promisify(db.exec).bind(db)(sql);
  util.promisify(db.close).bind(db);
}

async function updateUid() {
  const filePath = `./package.json`;

  try {
    if (fse.existsSync(filePath)) {
      const rawFile = fse.readFileSync(filePath);
      const packageJSON = JSON.parse(rawFile);

      if (packageJSON.strapi.uuid.includes('FOODADVISOR')) return null;

      packageJSON.strapi.uuid =
        `FOODADVISOR-${
          process.env.GITPOD_WORKSPACE_URL ? 'GITPOD-' : 'LOCAL-'
        }` + uuid();

      const data = JSON.stringify(packageJSON, null, 2);
      fse.writeFileSync(filePath, data);
    }
  } catch (e) {
    console.error(e);
  }
}

async function seed() {
  try {
    await updateUid();
  } catch (error) {
    console.log(error);
  }

  try {
    await fse.emptyDir(tmpPath);
  } catch (err) {
    console.log(`Failed to remove ${tmpPath}`);
  }

  try {
    await fse.emptyDir(uploadPath);
  } catch (err) {
    console.log(`Failed to remove ${uploadPath}`);
  }

  try {
    await new Promise((resolve) => {
      fse
        .createReadStream(zipPath)
        .pipe(unzip.Extract({ path: '.' }))
        .on('close', resolve);
    });
  } catch (error) {
    console.log(error);
  }

  try {
    await dumpSqlite();
  } catch (err) {
    console.log(`Failed sqlite dump ${err.message}`);
  }

  try {
    await fse.copy(uploadDataPath, uploadPath, { overwrite: true });
  } catch (err) {
    console.log(`Failed to move ${uploadDataPath} to ${uploadPath}`);
  }

  try {
    await fse.remove(dataPath);
  } catch (err) {
    console.log(`Failed to remove ${dataPath}`);
  }

  await fse.ensureFile(dotEnv);
  const dotEnvData = fse.readFileSync(dotEnv).toString();
  if (!dotEnvData.includes('ADMIN_JWT_SECRET')) {
    try {
      await fse.appendFile(
        dotEnv,
        `ADMIN_JWT_SECRET=${crypto.randomBytes(64).toString('base64')}\n`
      );
    } catch (err) {
      console.log(`Failed to create ${dotEnv}`);
    }
  }
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
