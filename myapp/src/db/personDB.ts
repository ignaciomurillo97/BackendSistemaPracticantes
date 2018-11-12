import { Person } from '../model/person'
import { knex } from './dbconnection'

class PersonDB {

  constructor() {

  }

  protected async selectType(personType: number) : Promise<Array<Person>> {
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
      TipoPersona: personType
    })
    .select()
    .from('Persona');
    
    result.map( function(row: any) {
      let p = new Person();
      p.fromDBNames(row);
      return p;
    } );

    return result;
  }

  protected async update (person: Person, transaction: any) {
    try {
      await knex
        .where({
          Cedula: person.id,
          TipoPersona: person.personType
        })
        .update( 
          person.toDBNames()
        )
        .transacting(transaction);
    } catch (err) {
      throw err;
    }

  }

  protected async insert (person: Person, transaction: any) {
    try {
      await knex('Persona')
        .insert(
          person.toDBNames()
        )
        .transacting(transaction);
    } catch (err) {
      throw err;
    }
  }
}

export { PersonDB }
