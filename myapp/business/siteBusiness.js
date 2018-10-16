var SitesDB = require('../db/sitesDB.js');

class SiteBusiness {
  constructor() { }

  async selectAllSites () {
    let promise = SitesDB.selectSites();
    let result = await promise;
    console.log(result);
    return result;
  }
}

module.exports = SiteBusiness;
