const db_connection = require('./db_access.js');

module.exports.selectSites = function(){
  var query = `SELECT ` +
    `* ` +
    `FROM ` +
    `Sede`;


  return new Promise (function (resolve, reject) {
    db_connection.query(query, function (err, result, fields) {
      if (err) reject(err);
      resolve(result);
    });
  })
}
