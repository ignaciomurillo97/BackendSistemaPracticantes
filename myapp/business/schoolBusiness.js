var SchoolDB = require('../db/schoolDB.js');

module.exports.selectAllSchools = async function () {
  let promise = SchoolDB.selectSchools();
  let result = await promise;
  console.log(result);
  return result;
}
