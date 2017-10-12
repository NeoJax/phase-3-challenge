// Requirements
const pgp = require('pg-promise');

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres@localhost:5432/grocerystore';
const db = pgp(connectionString);

// Connect to DATABASE

// Switch Command Check


const signup = (email, password) => {
  db.none('INSERT INTO users(email, password) VALUES($1, $2)', [email, password])
    .catch((err) => {
      console.log(err)
    })
}

module.exports = signup
