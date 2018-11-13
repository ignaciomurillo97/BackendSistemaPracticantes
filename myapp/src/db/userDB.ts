import { User } from '../model/user'
import { knex } from './dbconnection'

class UserDB {
  constructor() {

  }

  async select() : Promise<Array<User>> {
    let result = await knex
    .column(
      'Cedula',
      'NombreUsuario',
      'Contrasena'
    )
    .select()
    .from('Usuario')
    .map( function(row) {
        let user: User = new User();
        user.fromDBNames(row);
        return user;
      } );
    return result;
  }

  async insert (user: User, transaction: any) {
    try {
      await transaction('Usuario')
        .insert(
          user.toDBNames()
        )
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export { UserDB }
