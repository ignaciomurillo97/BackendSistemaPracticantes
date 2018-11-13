import { knex } from '../db/dbconnection'
import { Site } from '../model/site'
import { SiteDB } from '../db/siteDB'

class SiteBusiness {
  constructor() {

  }

  selectSite () : Promise<Array<Site>> {
    let promise: Promise<Array<Site>>;
    let siteDB: SiteDB = new SiteDB();
    promise = siteDB.select();
    return promise;
  }

  createSite (site: Site) {
    let siteDB: SiteDB = new SiteDB();
    return new Promise( function ( resolve, reject ) {
      knex.transaction( async (trx: any) => {
        try {
          await siteDB.insert(site, trx);
          resolve();
        } catch (err) {
          reject(err);
        }
      })
    } )
  }
}

export { SiteBusiness }
