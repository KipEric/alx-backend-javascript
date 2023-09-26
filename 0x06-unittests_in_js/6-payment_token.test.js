const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with the correct data when called with true', async () => {
    const res = await getPaymentTokenFromAPI(true);
    expect(res).to.deep.equal({ data: 'Successful response from the API' });
  });
});
