const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.REACT_APP_MYSQL_PASSWORD,
    database: 'sell_stuff'
})



module.exports = db;