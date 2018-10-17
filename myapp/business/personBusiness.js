var PersonDB = require('../db/personDB.js');

class PersonBusiness {
  constructor() { }

  createPerson (person) {
    return new Promise (async function (resolve, reject) {
      await PersonDB.createPerson(person);
      if (person.emailList.length > 0){
        await PersonDB.addEmails(person.id, person.emailList);
      }
      if (person.phoneList.length > 0) {
        await PersonDB.addPhoneNumbers(person.id, person.phoneList);
      }
      resolve();
    });
  }

  async selectPersonByType (type) {
    let promise = PersonDB.selectPersonByType(type);
    let result = await promise;
    return result;
  }
}

module.exports = PersonBusiness;
