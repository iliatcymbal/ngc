#! /usr/bin/env node

const argv = require('yargs').argv;
const create = require('./createFile');
const files = require('./files');
const body = require('./createBody');

const name = argv['name'] || 'component';
const prefix = argv['prf'];
const postfix = argv['postfix'];

create.createDir(name, (path) => {
  files.forEach((file) => {
    const name = `${prefix || ''}${file.name || path}${postfix || ''}`;
    const ext = file.ext || 'ts';

    Object.assign(file, { postfix, prefix, name });

    create.createFile(`${path}/${name}.${ext}`, body(file, path));
  });
});

module.exports = create.createDir();


