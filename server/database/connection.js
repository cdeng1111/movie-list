const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'movies_all'
});

connection.connect((err) => {
  if(!err) {
    console.log('connected to movies database');
  }
})
module.exports = connection;
