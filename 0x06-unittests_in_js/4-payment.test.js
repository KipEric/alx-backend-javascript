const sinon = require('sinon');
const chai = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

const expect = chai.expect;

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleSpy;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    consoleSpy = sinon.spy(console, 'log');

    calculateNumberStub.withArgs('SUM', 100, 20).returns(10);
  });

  afterEach(() => {
    calculateNumberStub.restore();
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber with type SUM and log the result', () => {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
  });
});
