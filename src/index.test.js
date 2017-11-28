const chai = require('chai');
const expect = chai.expect;
const index = require('./index.js');


describe('Test to verify the array can convert into an object', () => {
  it('turns an array into an object', () => {

    const correctInputFormat = `[
        'react-dom: react',
        'react: ',
        'eslint-config-standard: eslint'],
        'eslint: '`;

    const convertedObject = index.convertArrayToObject(correctInputFormat);

    expect(convertedObject).to.deep.eq({
      'react-dom': 'react',
      react: '',
      'eslint-config-standard': 'eslint',
      eslint: ''
    })
  })
});
