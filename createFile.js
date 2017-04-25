const fs = require('fs-extra');

const createFile = (name, body) => {
  name = name || 'index.ts';
  body = body || '';

  fs.writeFile(name, body, (err) => {
    if (err) throw err;
    console.log(`The file "${name}" was created`);
  });
};

const createDir = (name, callback) => {
  name = name || 'Main';

  fs.ensureDir(name, (err) => {

    if (err) throw err;

    console.log(`The dir "${name}" was created`);

    if (callback) {
      callback(name);
    }
  });

};

module.exports = { createFile, createDir};
