class PublicDocument {

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

  get modificationDate (): Date {
    return this.modificationDate;
  }
  set modificationDate (value: Date) {
    this._modificationDate = value;
  }

  get owner (): number {
    return this.owner;
  }
  set owner (value: number) {
    this._owner = value;
  }


  private _id: number;
  private _name: string;
  private _modificationDate: Date;
  private _owner: number;

  constructor() {

  }
}

export { PublicDocument }
