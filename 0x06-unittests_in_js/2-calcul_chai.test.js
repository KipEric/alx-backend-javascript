const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

const expect = chai.expect;

describe('calculateNumber', () => {
  it('should calculate the sum of rounded numbers', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should calculate the difference of rounded numbers', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should calculate the division of rounded numbers', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('should handle division by zero', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

  it('should throw an error for invalid operation type', () => {
    expect(() => {
      calculateNumber('INVALID', 1.4, 4.5);
    }).to.throw('Invalid operation type');
  });
});
