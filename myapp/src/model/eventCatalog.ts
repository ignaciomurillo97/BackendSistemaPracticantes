class EventCatalog {

  get id (): number {
    return this.id;
  }
  set id (value: number) {
    this._id = value;
  }

  get name (): string {
    return this.name;
  }
  set name (value: string) {
    this._name = value;
  }

  get description (): string {
    return this.description;
  }
  set description (value: string) {
    this._description = value;
  }

  private _id: number;
  private _name: string;
  private _description: string;

  constructor() {

  }
}

export {EventCatalog}
