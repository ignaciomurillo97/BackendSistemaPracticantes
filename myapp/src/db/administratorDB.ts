import { Administrator } from '../model/administrator'
import { PersonDB } from '../db/personDB'
import { knex } from './dbconnection'

class AdministratorDB extends PersonDB{
  private _personType: number = 3;

  constructor() {
    super();
  }

  async select() : Promise<Array<Administrator>> {
    return super.selectType(this._personType);
  }

  async update(admin: Administrator, transaction: any) {
    await super.update(admin, transaction);
  }

  async insert (admin: Administrator, transaction: any) {
    await super.insert(admin, transaction);
  }
}

export { AdministratorDB }
