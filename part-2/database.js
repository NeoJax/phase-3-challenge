const pgp = require('pg-promise')();

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/grocerystore';
const db = pgp(connectionString);

function grabProducts(section) {
  return db.any('SELECT * FROM products WHERE section=$1', [section])
    .catch((err) => {
      console.log(err);
    });
}

function grabOrders(id) {
  return db.any('SELECT * FROM orders WHERE sid=$1', [id])
    .catch((err) => {
      console.log(err);
    });
}

function grabShoppers() {
  return db.any('SELECT * FROM shoppers WHERE orders > 0')
    .catch((err) => {
      console.log(err);
    });
}

module.exports = { grabProducts, grabOrders, grabShoppers };
