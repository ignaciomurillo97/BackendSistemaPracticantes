import { knex } from '../db/dbconnection'
import { AdministratorDB } from '../db/administratorDB'
import { Administrator } from '../model/administrator'

class AdministratorBusiness {
  constructor () {

  }

  selectAdministrator () : Promise<Array<Administrator>> {
    let promise: Promise<Array<Administrator>>;
    let personDB: AdministratorDB = new AdministratorDB();
    promise = personDB.select();
    let result = promise;
    return result;
  }

  async createAdministrator( admin: Administrator ) {
    let adminDB: AdministratorDB = new AdministratorDB();
    return new Promise(function (resolve, reject) {
      knex.transaction( async (trx: any) => {
        try {
          // Crear Persona
          await adminDB.insert(admin, trx);
          // Crear Usuario

          // Telefonos

          // Correos
          resolve();
        } catch (err) {
          reject(err);
        }
      })
    })
  }
}

export { AdministratorBusiness }
