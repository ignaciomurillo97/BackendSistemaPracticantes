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

  update(admin: Administrator) :boolean {
    try {
      knex
        .where({
          Cedula: admin.id,
          TipoPersona: this._tipe
        })
        .update( 
          admin.toDBNames()
        );
    } catch (err) {
      console.error(err);
      return false;
    }
    return true;
  }

  async insert (admin: Administrator) :Promise<number> {
    let res: number;
    try {
      res = await knex('Persona')
        .insert(
          admin.toDBNames()
        );
    } catch (err) {
      console.error(err);
      return -1;
    }
    return res;

  }
}

export { AdministratorDB }
