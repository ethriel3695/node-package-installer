const chai = require('chai');
const expect = chai.expect;
const index = require('./index.js');

describe('installPackages', () => {
  context('if there is no cycle', () => {
    it('returns a comma delimited string of libraries in the order of installation', () => {
      const input = ['babel-cli: ', 'babel-preset-react-hmre: babel-preset-react', 'babel-preset-react: babel-env'
      , 'babel-core: babel-cli', 'babel-preset-react-hmre-stage-0: babel-preset-react-hmre', 'babel-env: '];

      console.log('OUTPUT:', index.installPackages(input));

      expect(index.installPackages(input)).to.deep.equal(
        'babel-cli, babel-env, babel-preset-react, babel-core, babel-preset-react-hmre, babel-preset-react-hmre-stage-0'
      );
    });
  });
})
