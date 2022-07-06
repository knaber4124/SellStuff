const { createPool } = require('mysql');
require('dotenv').config();

const db = createPool({
    host: 'localhost',
    user: 'root',
    password: process.env.REACT_APP_MYSQL_PASSWORD
})



module.exports = db;