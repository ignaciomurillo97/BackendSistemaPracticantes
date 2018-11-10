import mysql = require('mysql');
import {Pool} from 'mysql';

let db_config = {
    host: "localhost",
    user: "root",
    database: "SistemaPracticantes",
    password: "root",
    multipleStatements: true
};

let pool: Pool = mysql.createPool(db_config);

pool.getConnection(function(err, connection) {
    if (err){
        throw err;
    }
    console.log("Conectado a la DB");
});


export { pool as DBConnection };