var SchoolDB = require('../db/schoolDB.js');

class SchoolBusiness {
  constructor() { }

  async selectAllSchools () {
    let promise = SchoolDB.selectSchools();
    let result = await promise;
    console.log(result);
    return result;
  }
}

module.exports = SchoolBusiness;
