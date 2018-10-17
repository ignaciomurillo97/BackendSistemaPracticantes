const PersonBusiness = require('../business/personBusiness.js');
const UserBusiness = require('../business/userBusiness.js');

class ProfessorBusiness {
  constructor() { }

  async createProfessor (person) {
    person.type = 5;
    PersonBusiness.createPerson(person);
  }
}

module.exports = ProfessorBusiness;
