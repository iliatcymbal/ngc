const argv = require('yargs').argv;
const create = require('./createFile');
const files = require('./files');
const body = require('./createBody');

const name = argv['name'] || 'component-name';
const prefix = argv['prefix'];

create.createDir(name, (path) => {
  files.forEach((file) => {
    const name = (file.name || path) + (file.name !== 'index' && file.postfix || '');
    const ext = file.ext || 'ts';

    file.prefix = prefix;

    create.createFile(`${path}/${name}.${ext}`, body(file, path));
  });
});

