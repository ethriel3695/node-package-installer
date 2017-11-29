const chai = require('chai');
const expect = chai.expect;
const cycleCheck = require('./cycleValidation.js');

describe('isCycle', () => {
  context('given a cyclical package list', () => {
    it('is true', () => {
      const cyclical = {'babel-cli': 'babel-core', 'babel-core': 'babel-env', 'babel-env': 'babel-cli'};

      console.log('OUTPUT:', 'This is a cycle');

      expect(cycleCheck.isCycle(cyclical)).to.equal(true);
    });
  });

  context('given an acyclical graph', () => {
    it ('is false', () => {
      const acyclical = {'babel-parser': 'babel-core', 'babel-core': 'babel-env', 'babel-env': 'babel-cli', 'babel-cli': ''};

      expect(cycleCheck.isCycle(acyclical)).to.equal(false);
    });
  });
})
