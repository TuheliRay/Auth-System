const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if (err) throw err;
  console.log('✅ Connected to MySQL DB');
});

module.exports = connection;
// This module exports the MySQL connection object for use in other parts of the application.
// Ensure to handle connection errors and close the connection properly in your application.