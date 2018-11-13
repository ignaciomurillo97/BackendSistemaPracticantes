import { knex } from '../db/dbconnection'
import { Coordinator } from '../model/coordinator'
import { CoordinatorDB } from '../db/coordinatorDB'
import { User } from '../model/user'
import { UserDB } from '../db/userDB'
import { Email } from '../model/email'
import { EmailDB } from '../db/emailDB'
import { TelephoneNumber } from '../model/telephoneNumber'
import { TelephoneNumberDB } from '../db/telephoneDB'

class CoordinatorBusiness {
  constructor () {

  }

  selectCoordinators () : Promise<Array<Coordinator>> {
    let promise: Promise<Array<Coordinator>>;
    let personDB: CoordinatorDB = new CoordinatorDB();
    promise = personDB.select();
    let result = promise;
    return result;
  }

  async createCoordinator (coordinator: Coordinator, user: User, emailList:Email[], telephoneList:TelephoneNumber[] ) {
    let coordinatorDB: CoordinatorDB = new CoordinatorDB();
    let userDB: UserDB = new UserDB();
    let emailDB: EmailDB = new EmailDB();
    let telephoneDB: TelephoneNumberDB = new TelephoneNumberDB();

    return new Promise(function (resolve, reject) {
      knex.transaction( async (trx: any) => {
        try {
          // Crear Persona
          await coordinatorDB.insert(coordinator, trx);
          // Crear Usuario
          await userDB.insert(user, trx);
          // 
          await emailDB.insert(emailList, trx);
          // Correos
          await telephoneDB.insert(telephoneList, trx);

          resolve();
        } catch (err) {
          trx.rollback();
          reject(err);
        }
      })
    })
  }
}

export { CoordinatorBusiness }
