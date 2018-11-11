import { Person } from './person'

class Coordinator extends Person {

  get career (): number {
    return this.career;
  }
  set career (value: number) {
    this._career = value;
  }

  get site (): number {
    return this.site;
  }
  set site (value: number) {
    this._site = value;
  }


  private _career:  number;
  private _site:    number;

  constructor(){
    super();
  }
}

export { Coordinator }
