module.exports = (path, name) => {
  return `export * from './${path}.ts';`;
};
