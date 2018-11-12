import { Career } from '../model/career'
import { knex } from './dbconnection'

class CareerDB {
  constructor () {

  }

  async select() : Promise<Array<Career>> {
    let result = await knex
    .column(
      'idCarrera',
      'idEscuela',
      'NombreCarrera'
    )
    .select()
    .from('Carrera')
    .map( function(row) {
      let career: Career = new Career();
      career.fromDBNames(row);
      return career;
    } )
    return result;
  }

  async insert(career: Career, transaction: any) {
    try {
      await transaction('Carrera')
        .insert(
          career.toDBNames()
        )
    } catch (err) {
      throw err;
    }
  }
}

export { CareerDB }
