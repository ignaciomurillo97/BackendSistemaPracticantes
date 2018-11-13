import { School } from '../model/school'
import { knex } from './dbconnection'

class SchoolDB {
  constructor() {

  }

  async select() : Promise<Array<School>> {
    let result = await knex
    .column(
      'IdEscuela',
      'IdUniversidad',
      'NombreEscuela',
    )
    .select()
    .from('Escuela')
    .map( function(row) {
        let school: School = new School();
        school.fromDBNames(row);
        return school;
      } )
    return result;
  }

  async insert (school: School, transaction: any) {
    try {
      await transaction('Escuela')
        .insert(
          school.toDBNames()
        )
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export { SchoolDB }
