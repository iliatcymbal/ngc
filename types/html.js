module.exports = (path) => {
  const tag = path.toLowerCase();

  return `<${tag}></${tag}>`;
};
