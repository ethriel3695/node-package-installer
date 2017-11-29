const arrayValidation = require('./convertArrayToObject.js');
const packageManipulation = require('./sortPackages.js');
const cycleValidation = require('./cycleValidation.js');

const installPackages = (packages = []) => {
  const libraryFiles = arrayValidation.convertArrayToObject(packages);

  if(cycleValidation.isCycle(libraryFiles)) {
    throw('This is a cylce');
  } else {
    return packageManipulation.sortPackages(libraryFiles).join(', ');
  }
};

module.exports = {installPackages};
