// backend
// create pool allowing use of queries to access db
const { Pool } = require('pg');
const PG_URI =
  'postgres://rsoalomp:prXdAkZfDwrL1mlZf4qbmbyQKx6Nv0-g@queenie.db.elephantsql.com/rsoalomp';

// initate new pool
const pool = new Pool({
  connectionString: PG_URI,
});

//export pool
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
