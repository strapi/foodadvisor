const fs = require('fs');
const path = require('path');

const rimraf = require('rimraf');
const unzip = require('unzip-stream');

const zipPath = path.resolve('data.zip');
const dataPath = path.resolve('data');
const uploadDataPath = path.join(dataPath, 'uploads');
const tmpDataPath = path.join(dataPath, '.tmp');

const uploadPath = path.join('public', 'uploads');

const tmpPath = path.resolve('.tmp');

(async () => {
  try {
    rimraf.sync(tmpPath);
  } catch (err) {
    console.log(`Fail to remove ${tmpPath}`);
  }

  try {
    rimraf.sync(uploadPath);
  } catch (err) {
    console.log(`Fail to remove ${uploadPath}`);
  }

  await new Promise((resolve) => {
    fs.createReadStream(zipPath)
      .pipe(unzip.Extract({ path: 'data' }))
      .on('close', resolve);
  });

  try {
    fs.renameSync(uploadDataPath, uploadPath);
  } catch (err) {
    console.log(`Fail move ${uploadDataPath} to  ${uploadPath}`);
  }

  try {
    fs.renameSync(tmpDataPath, tmpPath);
  } catch (err) {
    console.log(`Fail move ${tmpDataPath} to  ${tmpPath}`);
  }

  try {
    rimraf.sync(dataPath);
  } catch (err) {
    console.log(`Fail to remove ${dataPath}`);
  }
})();
