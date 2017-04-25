const fs = require('fs');

module.exports = function (name, ext, body) {
  name = name || 'index';
  ext = ext || 'ts';
  body = body || '';

  const fileName = `${name}.${ext}`;

  fs.writeFile(fileName, body, (err) => {
    if (err) throw err;
    console.log(`The file "${fileName}" was created`);
  });
};
