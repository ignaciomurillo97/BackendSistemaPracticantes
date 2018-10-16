var CareersDB = require('../db/careersDB.js');

class CareerBusiness {
  constructor() { };

  async selectAllCareers () {
    let promise = CareersDB.selectCareers();
    let result = await promise;
    console.log(result);
    return result;
  }
}

module.exports = CareerBusiness;
