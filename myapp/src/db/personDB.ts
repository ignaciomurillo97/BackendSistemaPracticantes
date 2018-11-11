import { Person } from '../model/person'
import { knex } from './dbconnection'

class PersonDB {

  constructor() {

  }

  async select() : Promise<Array<Person>> {
    let result = await knex
    .column(
      'Cedula',
      'Nombre',
      'SegundoNombre',
      'Apellido',
      'SegundoApellido',
      'Genero',
      'TipoPersona'
    )
    .select()
    .from('Persona')
    .map( function(row) {
      return dbNamesToPerson(row);
    } );
    return result;
  }
}



function dbNamesToPerson (dbResult: any) : Person {
  let p            = new Person();
  p.id             = dbResult.Cedula;
  p.firstName      = dbResult.Nombre;
  p.secondName     = dbResult.SegundoNombre;
  p.lastName       = dbResult.Apellido;
  p.secondLastName = dbResult.SegundoApellido;
  p.gender         = dbResult.genero;
  p.personType     = dbResult.TipoPersona;
  return p;
}

export { PersonDB }
