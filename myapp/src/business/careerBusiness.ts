import { knex } from '../db/dbconnection'
import { Career } from '../model/career'
import { CareerDB } from '../db/careerDB'

class CareerBusiness {
  constructor () {

  }

  selectCareers () : Promise<Array<Career>> {
    let promise: Promise<Array<Career>>;
    let careerDB: CareerDB = new CareerDB();
    promise = careerDB.select();
    return promise;
  }

  createCareer (career: Career) {
    let careerDB: CareerDB = new CareerDB();
    return new Promise( function ( resolve, reject ) {
      knex.transaction( async (trx: any) =>{
        try {
          await careerDB.insert(career, trx);
          resolve();
        } catch (err) {
          console.error(err);
          reject(err);
        }
      } )
    } )
  }
}

export { CareerBusiness }
