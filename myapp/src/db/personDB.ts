import { Person } from '../model/person'
import { DBConnection } from './dbconnection'

class PersonDB {

  constructor() {

  }

  select () : Promise<Array<Person>> {
    let query: string;
    query = `
      SELECT Cedula,
       Nombre,
       SegundoNombre,
       Apellido,
       SegundoApellido,
       Genero,
      TipoPersona FROM Persona
      `;

    return new Promise (function (resolve, reject) {
      DBConnection.query(query, function(err, result, fields){
        if (err) reject();
        else {
          let PersonArray: Array<any> = new Array();
          for (var i = 0; i < result.length; i++) {
            let obj = result[i];
            let p: Person = dbResultToPerson(obj);
            PersonArray.push(p);
          }
          resolve(PersonArray);
        }
      })
    });
  }

}

function dbResultToPerson (dbResult: any) : Person {
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
