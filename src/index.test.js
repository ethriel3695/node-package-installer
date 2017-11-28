const chai = require('chai');
const expect = chai.expect;
const index = require('./index.js');


describe('convertArrayToObject', () => {
  it('turns an array into an object', () => {

    const correctInputFormat = ['react-dom: react', 'react: ', 'eslint-config-standard: eslint', 'eslint: '];

    const convertedObject = index.convertArrayToObject(correctInputFormat);

    expect(convertedObject).to.deep.equal({
      'react-dom': 'react', react: '', 'eslint-config-standard': 'eslint', eslint: ''
    });
  });
  it('Displays an error message stating the input is not an array of strings', () => {

    // const incorrectInputFormat = ['react-domreact', 'react: ', 'eslint-config-standard:eslint', 'eslint: '];
    const incorrectInput = 'This is Not An Array Of Strings';
    const convertedObject = index.convertArrayToObject(incorrectInput);
    const errorMessage = 'The input is not an array of strings';

    expect(convertedObject).to.equal(errorMessage);
  });
  it('Displays an error message stating that not all array records were in the correct format', () => {

    const incorrectInputFormat = ['react-dom: react', 'react: ', 'eslint-config-standard:eslint', 'eslint'];
    const convertedObject = index.convertArrayToObject(incorrectInputFormat);
    const errorMessage = 'Not all array records were in the correct format conversion not successful';
    expect(convertedObject).to.equal(errorMessage);
  });
});

describe('sortPackages', () => {
  it('orders packages with dependencies first', () => {

    const packages = ['react-dom: react', 'react: ', 'eslint-config-standard: eslint', 'eslint: '];

    expect(index.sortPackages(packages)).to.deep.equal({
       react: '', 'react-dom': 'react', eslint: '', 'eslint-config-standard': 'eslint'
    });
  });
});
