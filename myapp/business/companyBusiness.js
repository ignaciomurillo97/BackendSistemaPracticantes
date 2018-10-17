let CompanyDB = require('../db/companyDB.js');
const PersonBusiness = require('../business/personBusiness.js');
const UserBusiness = require('../business/userBusiness.js');

class CompanyBusiness {
  constructor() { }

  createCompany (person, user, companyInfo) {
    user.id = person.id;
    companyInfo.id = person.id;
    companyInfo.companyStatus = 1;
    person.type = 2; // Tipo empresa

    PersonBusiness.createPerson(person)
      .then(() => {
        UserBusiness.createUser(user);
      })
      .catch((err) => {
        console.error(err);
        throw error;
      })
  }
}

module.exports = CompanyBusiness;
