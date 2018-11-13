import { knex } from '../db/dbconnection'
import { School } from '../model/school'
import { SchoolDB } from '../db/schoolDB'

class SchoolBusiness {
  constructor () {

  }

  selectSchools () : Promise<Array<School>> {
    let promise: Promise<Array<School>>;
    let schoolDB: SchoolDB = new SchoolDB();
    promise = schoolDB.select();
    return promise;
  }

  createSchool (school: School) {
    let schoolDB: SchoolDB = new SchoolDB();
    return new Promise( function ( resolve, reject ) {
      knex.transaction( async (trx: any) =>{
        try {
          await schoolDB.insert(school, trx);
          resolve();
        } catch (err) {
          console.error(err);
          reject(err);
        }
      } )
    } )
  }
}

export { SchoolBusiness }
