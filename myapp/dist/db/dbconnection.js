"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
let db_config = {
    host: "localhost",
    user: "root",
    database: "SistemaPracticantes",
    password: "root",
    multipleStatements: true
};
let pool = mysql.createPool(db_config);
exports.DBConnection = pool;
pool.getConnection(function (err, connection) {
    if (err) {
        throw err;
    }
    console.log("Conectado a la DB");
});
//# sourceMappingURL=dbconnection.js.map