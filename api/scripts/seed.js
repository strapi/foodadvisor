const path = require('path');
const util = require('util');
const fse = require('fs-extra');
const unzip = require('unzip-stream');
const crypto = require('crypto');

const zipPath = path.resolve('data.zip');
const dataPath = path.resolve('data');
const uploadDataPath = path.join(dataPath, 'uploads');

const uploadPath = path.join('public', 'uploads');
const tmpPath = path.resolve('.tmp');

const dotEnv = path.resolve('.env');

const sqlite = require('sqlite3').verbose();

async function dumpSqlite() {
  const db = new sqlite.Database('.tmp/data.db');
  const sql = fse.readFileSync('./data/dump.sql').toString();

  await util.promisify(db.exec).bind(db)(sql);
  await util.promisify(db.close).bind(db);
}

async function seed() {
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

  await new Promise(resolve => {
    fse
      .createReadStream(zipPath)
      .pipe(unzip.Extract({ path: '.' }))
      .on('close', resolve);
  });

  try {
    await dumpSqlite();
  } catch (err) {
    console.log(`Failed sqlite dump ${err.message}`);
  }

  try {
    await fse.rename(uploadDataPath, uploadPath);
  } catch (err) {
    console.log(`Failed to move ${uploadDataPath} to  ${uploadPath}`);
  }

  try {
    await fse.remove(dataPath);
  } catch (err) {
    console.log(`Failed to remove ${dataPath}`);
  }

  try {
    await fse.ensureFile(dotEnv);
    await fse.writeFile(
      dotEnv,
      `ADMIN_JWT_SECRET=${crypto.randomBytes(64).toString('base64')}`
    );
  } catch (err) {
    console.log(`Failed to create ${dotEnv}`);
  }
}

seed().catch(error => {
  console.error(error);
  process.exit(1);
});
