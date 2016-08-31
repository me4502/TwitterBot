const expect = require('chai').expect;
const describe = require('mocha').describe;
const it = require('mocha').it;

describe('Sanity check', () => {
  it('Knows true is true', () => {
    expect(true).to.equal(true);
  });
});
