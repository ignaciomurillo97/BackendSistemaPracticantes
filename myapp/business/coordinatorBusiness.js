var CoordinatorDB = require('../db/coordinatorDB.js');

module.exports.selectAllCoordinators = async function () {
  let promise = CoordinatorDB.selectCoordinators();
  let result = await promise;
  console.log(result);
  return result;
}
