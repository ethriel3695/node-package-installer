const _ = require('underscore');

const sortPackages = (packages) => {
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

 module.exports = {sortPackages};
