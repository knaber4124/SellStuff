const mysql = require('mysql');
require('dotenv').config({path:'../.env'});

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_PASSWORD,
    database: 'sell_stuff'
})



module.exports = db;