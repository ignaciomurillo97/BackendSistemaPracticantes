let AdminDB = require('../db/adminDB.js');
const PersonBusiness = require('../business/personBusiness.js');
const UserBusiness = require('../business/userBusiness.js');

class AdminBusiness {
  constructor() { }

  async selectAllAdmins () {
    let promise = AdminDB.selectAdmins();
    let result = await promise;
    return result;
  };

  async selectAllSemesters () {
    let promise = AdminDB.selectSemesters();
    let result = await promise;
    return result;
  };

  async createAdministrator (user, person) {
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
}

module.exports = AdminBusiness;
