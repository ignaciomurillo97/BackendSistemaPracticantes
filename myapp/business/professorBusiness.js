const PersonBusiness = require('../business/personBusiness.js');
const UserBusiness = require('../business/userBusiness.js');

module.exports.createProfessor = async function (person) {
  person.type = 5;
  
  PersonBusiness.createPerson(person);
}
