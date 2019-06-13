require('chai').should();

const {botTranslator} = require('./index.js');

describe('tests', () => {
  it('should return correct translation', () => {
    botTranslator('01000111 01101111 01101111 01101111 01101111 01100100 00100000 01101010 01101111 01100010').should.eql('Goood job');
  });
})