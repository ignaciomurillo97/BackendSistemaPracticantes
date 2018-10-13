var SitesDB = require('../db/sitesDB.js');

module.exports.selectAllSites = async function () {
  let promise = SitesDB.selectSites();
  let result = await promise;
  console.log(result);
  return result;
}
