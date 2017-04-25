module.exports = (path, prefix) => {
  return `export * from './${path + prefix}.ts';`;
};
