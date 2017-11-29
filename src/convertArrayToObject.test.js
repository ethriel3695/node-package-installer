const chai = require('chai');
const expect = chai.expect;
const arrayValidation = require('./convertArrayToObject.js');


describe('convertArrayToObject', () => {
  it('turns an array into an object', () => {

    const correctInputFormat = ['react-dom: react', 'react: ', 'eslint-config-standard: eslint', 'eslint: '];

    const convertedObject = arrayValidation.convertArrayToObject(correctInputFormat);

    expect(convertedObject).to.deep.equal({
      'react-dom': 'react', react: '', 'eslint-config-standard': 'eslint', eslint: ''
    });
  });
  it('Displays an error message stating the input is not an array of strings', () => {

    const incorrectInput = 'This is Not An Array Of Strings';
    const convertedObject = arrayValidation.convertArrayToObject(incorrectInput);
    const errorMessage = 'The input is not an array of strings';

    expect(convertedObject).to.equal(errorMessage);
  });
  it('Displays an error message stating that not all array records were in the correct format', () => {

    const incorrectInputFormat = ['react-dom: react', 'react: ', 'eslint-config-standard:eslint', 'eslint'];
    const convertedObject = arrayValidation.convertArrayToObject(incorrectInputFormat);
    const errorMessage = 'Not all array records were in the correct format conversion not successful';
    expect(convertedObject).to.equal(errorMessage);
  });
  it('Displays an error message stating that not all array records were in the correct format', () => {
    
    const incorrectInputFormat = [': react', 'react: ', 'eslint-config-standard: eslint', 'eslint: '];
    const convertedObject = arrayValidation.convertArrayToObject(incorrectInputFormat);
    const errorMessage = 'Not all array records were in the correct format conversion not successful';
    expect(convertedObject).to.equal(errorMessage);
  });
});