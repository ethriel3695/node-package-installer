const chai = require('chai');
const expect = chai.expect;
const index = require('./index.js');

describe('receivePackages', () => {
  it('receives an Array of strings and outputs packages with dependencies first', () => {

    const packagesInput = ['react-dom: react', 'react: ', 'eslint-config-standard: eslint', 'eslint: '];
    const packagesOutput = ['eslint', 'eslint-config-standard', 'react', 'react-dom'];

    expect(index.receivePackages(packages)).to.deep.equal([
      'eslint', 'eslint-config-standard', 'react', 'react-dom']);
  });
});
