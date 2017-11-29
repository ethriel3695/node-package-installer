const _ = require('underscore');
const DelimiterValue = ': ';

const convertArrayToObject = (libraryFiles = []) => {
  if (Array.isArray(libraryFiles)) {
    return _.reduce(libraryFiles, (dependencyList, library) => {
      const [key, value] = library.split(DelimiterValue);
      if (value === undefined || key === '') {
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
}

module.exports = {convertArrayToObject};