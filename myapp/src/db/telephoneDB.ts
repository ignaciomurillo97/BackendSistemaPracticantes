import { TelephoneNumber } from '../model/telephoneNumber'
import { knex } from './dbconnection'

class TelephoneNumberDB {
  constructor () {

  }

  async insert (telephoneNumbers: TelephoneNumber[], transaction: any) {
    let telephoneListDBNames : Array<Object>;
    telephoneListDBNames = telephoneNumbers.map( (obj:TelephoneNumber) => {
      return obj.toDBNames();
    })
    try {
      await transaction('NumeroTelefono')
        .insert(
          telephoneListDBNames
        )
    } catch (err) {
      throw err;
    }
  }
}

export { TelephoneNumberDB }
