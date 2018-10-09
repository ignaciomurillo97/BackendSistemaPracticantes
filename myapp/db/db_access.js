const mysql = require('mysql');

let db_config = {
   host: "localhost",
   user: "root",
   database: "SistemaPracticantes",
   password: "root",
   multipleStatements: true
};

let pool = mysql.createPool(db_config);

pool.getConnection(function(err, connection) {
   if (err){
      throw err;
   }
   console.log("Conectado a la DB");
});

module.exports = pool;
