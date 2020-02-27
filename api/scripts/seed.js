const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const rimraf = require('rimraf');
const unzip = require('unzip-stream');

const zipPath = path.resolve('data.zip');
const dataPath = path.resolve('data');
const uploadDataPath = path.join(dataPath, 'uploads');

const uploadPath = path.join('public', 'uploads');
const tmpPath = path.resolve('.tmp');

function dumpSqlite() {
  return new Promise((resolve, reject) => {
    exec(
      'cat data/dump.sql | sqlite3 .tmp/data.db',
      (error, stdout, stderr) => {
        if (error) {
          return reject(error);
        }

        if (stderr) {
          return reject(stderr);
        }

        resolve(stdout);
      }
    );
  });
}

async function seed() {
  try {
    rimraf.sync(tmpPath);
    fs.mkdirSync(tmpPath);
  } catch (err) {
    console.log(`Fail to remove ${tmpPath}`);
  }

  try {
    rimraf.sync(uploadPath);
  } catch (err) {
    console.log(`Fail to remove ${uploadPath}`);
  }

  await new Promise(resolve => {
    fs.createReadStream(zipPath)
      .pipe(unzip.Extract({ path: '.' }))
      .on('close', resolve);
  });

  try {
    await dumpSqlite();
  } catch (err) {
    console.log(`Failed sqlite dump ${err.message}`);
  }

  try {
    fs.renameSync(uploadDataPath, uploadPath);
  } catch (err) {
    console.log(`Fail move ${uploadDataPath} to  ${uploadPath}`);
  }

  try {
    rimraf.sync(dataPath);
  } catch (err) {
    console.log(`Fail to remove ${dataPath}`);
  }
}

seed().catch(error => {
  console.error(error);
  process.exit(1);
});
