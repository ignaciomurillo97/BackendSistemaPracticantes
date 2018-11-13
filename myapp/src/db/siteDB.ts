import { Site } from '../model/site'
import { knex } from './dbconnection'

class SiteDB {
  constructor() {

  }

  async select() : Promise<Array<Site>> {
    let result = await knex
    .column(
      'idSede',
      'idUniversidad',
      'NombreSede',
      'Direccion'
    )
    .select()
    .from('Sede')
    .map( function(row) {
        let site: Site = new Site();
        site.fromDBNames(row);
        return site;
      } )
    return result;
  }

  async insert (site: Site, transaction: any) {
    try {
      await transaction('Sede')
        .insert(
          site.toDBNames()
        )
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export { SiteDB }
