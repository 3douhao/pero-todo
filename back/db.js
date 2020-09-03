const Pool = require('pg').Pool

const pool = new Pool({
  username: 'me',
  password: 'tiger',
  host: 'localhost',
  port: 5432,
  database: 'perntodo'
})

module.exports = pool
