const _ = require('underscore');

const isCycle = (packages = []) => {
  const libraryFiles = _.chain(packages).pairs().flatten().uniq().value();

  return !_.all(libraryFiles, library => {
    let result = true;
    const validated = [];

    if (!packages[library] || _.contains(validated, library)) {
      return true;
    }

    while (packages[library]) {
      const dependency = packages[library];
      validated.push(library);

      if (_.contains(validated, dependency)) {
        result = false;
        break;
      }
      library = dependency;
    }

    return result;
  });
};

module.exports = {isCycle};
