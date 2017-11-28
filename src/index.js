let _ = require('underscore');
let DelimiterValue = ': ';

module.exports = {
  convertArrayToObject(libraryFiles = []) {
    if (Array.isArray(libraryFiles)) {
      return _.reduce(libraryFiles, (dependencyList, library) => {
        const [key, value] = library.split(DelimiterValue);
        if (value === undefined) {
          const missingValuesErrorMessage = 'Not all array records were in the correct format conversion not successful';
          return missingValuesErrorMessage;
        } else {
          dependencyList[key] = value;
          return dependencyList;
        }
      }, {});
    } else {
      const errorMessage = 'The input is not an array of strings';
      return errorMessage;
    }
  },

  sortPackages(packages = {}) {
    const noDependencies = _.pick(packages, _.isEmpty);
    const withDependencies = _.omit(packages, _.isEmpty);
    const orderedList = [..._.keys(noDependencies)];

    while (_.any(withDependencies)) {
      for (const library in withDependencies) {
        if (_.contains(orderedList, withDependencies[library])) {
          orderedList.push(library);
          delete withDependencies[library];
        }
      }
    }
    return orderedList;
  }
}
