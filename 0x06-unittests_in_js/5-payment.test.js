const sinon = require('sinon');
const chai = require('chai');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

const expect = chai.expect;

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleSpy;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculateNumberStub.restore();
    consoleSpy.restore();
  });

  it('should log the correct message and be called once for 100 and 20', () => {
    calculateNumberStub.withArgs('SUM', 100, 20).returns(120);
    sendPaymentRequestToApi(100, 20);

    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('should log the correct message and be called once for 10 and 10', () => {
    calculateNumberStub.withArgs('SUM', 10, 10).returns(20);
    sendPaymentRequestToApi(10, 10);

    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
