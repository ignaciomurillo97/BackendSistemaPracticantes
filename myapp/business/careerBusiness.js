var CareersDB = require('../db/careersDB.js');

module.exports.selectAllCareers = async function () {
  let promise = CareersDB.selectCareers();
  let result = await promise;
  console.log(result);
  return result;
}
