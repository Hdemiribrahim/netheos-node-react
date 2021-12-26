const mysql = require('mysql');
const util = require('util');
require('dotenv').config();

let con;
con = {
    mysql_pool : mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        })
};
const query = util.promisify(con.mysql_pool.query).bind(con.mysql_pool);

module.exports = query;