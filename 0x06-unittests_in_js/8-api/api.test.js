const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');
chai.use(chaiHttp);

const { expect } = chai;

describe('Index page', () => {
  it('Correct status code?', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('Correct result?', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});
