const _ = require('underscore');
const DelimiterValue = ': ';

const receivePackages = (packages) => {
  console.log(packages);
  let packagesOutput = ['eslint', 'eslint-config-standard', 'react', 'react-dom'];
  console.log(packagesOutput);
  return packagesOutput;
};

module.exports = {receivePackages};