import { Email } from '../model/email'
import { knex } from './dbconnection'

class EmailDB {
  constructor () {

  }

  async insert (email: Email[], transaction: any) {
    let emailListDBNames : Array<Object>;
    emailListDBNames = email.map( (obj:Email) => {
      return obj.toDBNames();
    })
    console.log(emailListDBNames);
    try {
      await transaction('DireccionCorreoElectronico')
        .insert(
          emailListDBNames
        )
    } catch (err) {
      throw err;
    }
  }
}

export { EmailDB }
