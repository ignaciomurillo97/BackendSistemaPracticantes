import { Coordinator } from '../model/coordinator'
import { PersonDB } from '../db/personDB'
import { knex } from './dbconnection'

class CoordinatorDB extends PersonDB{
  private _personType: number = 4;

  constructor() {
    super();
  }

  async select() : Promise<Array<Coordinator>> {
    let result = await knex
    .column(
      'Persona.Cedula',
      'Nombre',
      'SegundoNombre',
      'Apellido',
      'SegundoApellido',
      'Genero',
      'TipoPersona',
      'idCarrera',
      'idSede'
    ).where({
      TipoPersona: this._personType
    })
    .select()
    .from('Persona')
    .innerJoin('CoordinadorPractica', 'Persona.Cedula', 'CoordinadorPractica.Cedula')
    
    result.map( function(row: any) {
      let c = new Coordinator();
      c.fromDBNames(row)
      return c;
    } );

    return result;

  }

  async update(coordinator: Coordinator, transaction: any) {
    await super.update(coordinator, transaction);
  }

  async insert (coordinator: Coordinator, transaction: any) {
    await super.insert(coordinator, transaction);
    try {
      await transaction('CoordinadorPractica')
        .insert(
          coordinator.toDBCoordinatorNames()
        )
    } catch (err) {
      throw err;
    }
  }
}

export { CoordinatorDB }
