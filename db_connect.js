var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "stelko",
    database: "baltov"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    var sql = "CREATE TABLE users (firstName VARCHAR(255), lastName VARCHAR(255))";

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});