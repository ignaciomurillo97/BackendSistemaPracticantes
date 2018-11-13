import { Semester } from '../model/semester'
import { knex } from './dbconnection'

class SemesterDB {
  constructor() {

  }

  async select() : Promise<Array<Semester>> {
    let result: any;
    try {
      result = await knex
        .column(
          'IdSemestre',
          'Ano',
          'NumeroSemestre'
        )
        .select()
        .from('Semestre')
        .map( function(row) {
          let semester: Semester = new Semester();
          semester.fromDBNames(row);
          return semester;
        } )
    } catch (err) {
      console.error(err);
      throw err;
    }
    return result
  }

  async insert (semester: Semester, transaction: any) {
    try {
      await transaction('Semestre')
        .insert(
          semester.toDBNames()
        )
    } catch (err) {
      console.log(err);
      throw err;
    }

  }

}

export { SemesterDB }
