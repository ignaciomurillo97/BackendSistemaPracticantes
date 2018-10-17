let StudentDB = require('../db/studentDB.js');
const PersonBusiness = require('../business/personBusiness.js');
const UserBusiness = require('../business/userBusiness.js');

class StudentBusiness {
  constructor() { }

  createStudent (person, studentInfo, user) {
    user.id = person.id;
    studentInfo.id = person.id;
    studentInfo.studentStatus = 1;
    person.type = 1; // Tipo estudiante

    PersonBusiness.createPerson(person)
      .then(() => {
        StudentDB.createStudent(studentInfo);
        UserBusiness.createUser(user);
      })
      .catch((err) => {
        console.error(err);
      })
  };

}

module.exports = StudentBusiness;
