import { Administrator } from '../model/administrator'
import { knex } from './dbconnection'

class AdministratorDB {
  private _tipe: number = 3;

  constructor() {

  }

  async select() : Promise<Array<Administrator>> {
    let result = await knex
    .column(
      'Cedula',
      'Nombre',
      'SegundoNombre',
      'Apellido',
      'SegundoApellido',
      'Genero',
      'TipoPersona'
    ).where({
      TipoPersona: this._tipe
    })
    .select()
    .from('Persona')

    result.map( function(row: any) {
      let admin: Administrator = new Administrator();
      admin.fromDBResult(row);
      return admin;
    } );

    return result;
  }

  update(admin: Administrator, transaction: any) {
    try {
      knex
        .where({
          Cedula: admin.id,
          TipoPersona: this._tipe
        })
        .update( 
          admin.toDBNames()
        )
        .transacting(transaction);
    } catch (err) {
      throw err;
    }
  }

  async insert (admin: Administrator, transaction: any) {
    try {
      await knex('Persona')
        .insert(
          admin.toDBNames()
        )
    } catch (err) {
      throw err;
    }
  }
}

export { AdministratorDB }
