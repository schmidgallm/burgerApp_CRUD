// Dependencies
const mysql = require('mysql');

// Empty variable to hold either heroku connection or local host
// let connection;

// Init MYSQL connection
if (process.env.JAWSDB_URL) {
    const connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mbs1109*',
    database: 'burgers_db'
    });
}

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

// Export connection so ORM can use it
module.exports = connection