const create = require('./createFile');
const files = require('./files');
const body = require('./createBody');

create.createDir('Main', (path) => {
  files.forEach((file) => {
    const name = (file.name || path) + (file.name !== 'index' && file.postfix || '');
    const ext = file.ext || 'ts';

    create.createFile(`${path}/${name}.${ext}`, body(file, path));
  });
});

