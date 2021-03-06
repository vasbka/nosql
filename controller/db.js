const util = require('util')
const mysql = require('mysql')

var config = require('../config.js');

const pool = mysql.createPool({
    host: config.dbConfig.host,    
    user: config.dbConfig.user,
    password: config.dbConfig.password,
    database: config.dbConfig.database
})

// Ping database to check for common exception errors.
pool.getConnection((err, connection) => {
   if(connection) connection.release();
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }

    // if (connection) connection.release()

    return
})

// Promisify for Node.js async/await.
pool.query = util.promisify(pool.query)

module.exports = pool
