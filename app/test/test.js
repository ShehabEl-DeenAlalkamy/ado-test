var expect = require("chai").expect;
var request = require("request");

const PORT = 3000;
const USERNAME = "Shehab El-Deen Alalkamy";

describe("Status, content and database connection", function () {
  it("status", function (done) {
    request(`http://localhost:${PORT}/hello-vois`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("content", function (done) {
    request(`http://localhost:${PORT}/hello-vois`, function (error, response, body) {
      expect(body).to.contains(`<h1>Hello _VOIS from ${USERNAME}!</h1>`);
      done();
    });
  });

  it("database connection", function (done) {
    request(`http://localhost:${PORT}/hello-vois/db`, function (error, response, body) {
      expect(body).to.contains(`<h1>Database Connected!!</h1>`);
      done();
    });
  });
});
