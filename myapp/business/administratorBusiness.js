let AdminDB = require('../db/adminDB.js');
const PersonBusiness = require('../business/personBusiness.js');
const UserBusiness = require('../business/userBusiness.js');

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

module.exports.createAdministrator = async function (user, person) {
  user.id = person.id;
  person.type = 3; // Tipo administrator
  
  console.log(person);
  PersonBusiness.createPerson(person)
    .then(() => {
      UserBusiness.createUser(user);
    })
    .catch((err) => {
      console.error(err);
    })
}
