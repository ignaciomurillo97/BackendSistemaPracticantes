var PersonDB = require('../db/personDB.js');

module.exports.createPerson = function (person) {
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
