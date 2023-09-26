const request = require('request');
const { expect } = require('chai');

describe('Available payments page', () => {
  it('should return the correct status code and data', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done();
    });
  });
});

describe('Login page', () => {
  it('should return the correct status code and message', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: { userName: 'Betty' },
    };
    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
