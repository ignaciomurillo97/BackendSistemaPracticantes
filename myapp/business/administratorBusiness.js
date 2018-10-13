let AdminDB = require('../db/adminDB.js');

module.exports.selectAllAdmins = async function () {
  let promise = AdminDB.selectAdmins();
  let result = await promise;
  return result;
};


module.exports.selectAllSemesters = async function () {
  let promise = AdminDB.selectSemesters();
  let result = await promise;
  return result;
};
