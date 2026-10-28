const mysql = require('mysql2');

module.exports = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'RP738964$',
  database: 'petcare'
});
