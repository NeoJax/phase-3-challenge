const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

const expect = chai.expect;

const {
  grabProducts,
  grabOrders,
  grabShoppers
} = require('./database.js');

describe("#grabProducts", function() {
  expect(grabProducts('bread').then().to.eventually.equal(3))
})

describe("#grabOrders", function() {

})

describe("#grabShoppers", function() {

})
