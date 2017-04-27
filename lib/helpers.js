const vengerToCamelCase = (string) => (
  string.split('-').map((match) => (
    match.charAt(0).toUpperCase() + match.slice(1)
  )).join('')
);

module.exports = { vengerToCamelCase };