const CoordinatorDB = require('../db/coordinatorDB.js');
const PersonBusiness = require('../business/personBusiness.js');
const UserBusiness = require('../business/userBusiness.js');

class CoordinatorBusiness {
  constructor() { }

  async selectAllCoordinators () {
    let promise = CoordinatorDB.selectCoordinators();
    let result = await promise;
    console.log(result);
    return result;
  }

  async createCoordinator (person, user) {
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

  async createEvent () {
    let eventData = {
      "date" : new Date(),
      "startTime" : new Date(),
      "endTime" : new Date(),
      "photoPath" : "",
      "type" : 1,
      "name" : "Evento Vinculación con EmpresaSA"
    };
    await CoordinatorDB.createEvent(eventData);
  }
}

module.exports = CoordinatorBusiness;
