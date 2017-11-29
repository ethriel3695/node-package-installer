const chai = require('chai');
const expect = chai.expect;
const packageManipulation = require('./sortPackages.js');

describe('sortPackages', () => {
  it('orders packages with dependencies first', () => {

    const packages = ['react-dom: react', 'react: ', 'eslint-config-standard: eslint', 'eslint: '];

    expect(packageManipulation.sortPackages(packages)).to.deep.equal([
      'react', 'react-dom', 'eslint', 'eslint-config-standard']);
  });
});