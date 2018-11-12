import { knex } from '../db/dbconnection'
import { Administrator } from '../model/administrator'
import { AdministratorDB } from '../db/administratorDB'
import { User } from '../model/user'
import { UserDB } from '../db/userDB'
import { Email } from '../model/email'
import { EmailDB } from '../db/emailDB'
import { TelephoneNumber } from '../model/telephoneNumber'
import { TelephoneNumberDB } from '../db/telephoneDB'

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

  async createAdministrator( admin: Administrator, user: User, emailList:Email[], telephoneList:TelephoneNumber[] ) {
    let adminDB: AdministratorDB = new AdministratorDB();
    let userDB: UserDB = new UserDB();
    let emailDB: EmailDB = new EmailDB();
    let telephoneDB: TelephoneNumberDB = new TelephoneNumberDB();

    return new Promise(function (resolve, reject) {
      knex.transaction( async (trx: any) => {
        try {
          // Crear Persona
          await adminDB.insert(admin, trx);
          // Crear Usuario
          await userDB.insert(user, trx);
          // 
          await emailDB.insert(emailList, trx);
          // Correos
          await telephoneDB.insert(telephoneList, trx);

          resolve();
        } catch (err) {
          reject(err);
        }
      })
    })
  }
}

export { AdministratorBusiness }
