const sinon = require('sinon');
const chai = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

const expect = chai.expect;

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
  });

  afterEach(() => {
    calculateNumberStub.restore();
  });

  it('should call Utils.calculateNumber with type SUM and log the result', () => {
    calculateNumberStub.withArgs('SUM', 100, 20).returns(120);
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;

    consoleSpy.restore();
  });
});
