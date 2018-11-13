import { knex } from '../db/dbconnection'
import { Semester } from '../model/semester'
import { SemesterDB } from '../db/semesterDB'

class SemesterBusiness {
  constructor() {

  }

  selectSemester () : Promise<Array<Semester>> {
    let promise: Promise<Array<Semester>>;
    let semesterDB: SemesterDB = new SemesterDB();
    promise = semesterDB.select();
    return promise;
  }

  createSemester (semester: Semester) {
    let semesterDB: SemesterDB = new SemesterDB();
    return new Promise( function ( resolve, reject ) {
      knex.transaction( async (trx: any) => {
        try {
          await semesterDB.insert(semester, trx);
          resolve();
        } catch (err) {
          reject(err);
        }
      })
    } )
  }
}

export { SemesterBusiness }
