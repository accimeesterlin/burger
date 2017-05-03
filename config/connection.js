var mysql      = require('mysql');
var connection;
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
    connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'Septembre1',
        database : 'burgers_db'
    });
}


connection.connect();
//
// connection.query('SELECT * FROM burgers', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
// });
//
// connection.end();

module.exports = connection;