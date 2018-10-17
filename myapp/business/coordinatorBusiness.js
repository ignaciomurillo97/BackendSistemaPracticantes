const CoordinatorDB = require('../db/coordinatorDB.js');
const PersonBusiness = require('../business/personBusiness.js');
const UserBusiness = require('../business/userBusiness.js');

module.exports.selectAllCoordinators = async function () {
  let promise = CoordinatorDB.selectCoordinators();
  let result = await promise;
  console.log(result);
  return result;
}

module.exports.createCoordinator = async function (person, user) {
  user.id = person.id;
  person.type = 4; // Tipo coordinator
  
  PersonBusiness.createPerson(person)
    .then(() => {
      UserBusiness.createUser(user);
    })
    .catch((err) => {
      console.error(err);
    })
}
