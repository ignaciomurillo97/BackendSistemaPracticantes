class Career {

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

  get schoolId (): number {
    return this.schoolId;
  }

  set schoolId (value: number) {
    this._schoolId = value;
  }

  private _id: number;
  private _name: string;
  private _schoolId: number;

  constructor() {

  }
}

export { Career }
