const component = require('./types/component');
const style = require('./types/style');
const html = require('./types/html');
const main = require('./types/main');

module.exports = (file, path) => {
  const postfix = file.postfix || '';

  if (file.name === 'index') {
    return main(path, postfix);
  }

  if (file.ext === 'ts' && file.type === 'component') {
    return component(path, postfix);
  }

  if (/less|sass|css/.test(file.ext)) {
    return style(path);
  }

  if (file.ext === 'html') {
    return html(path);
  }

  return '';
};