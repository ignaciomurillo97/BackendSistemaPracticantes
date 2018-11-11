class Site {
  get idSite (): number {
    return this.idSite;
  }

  set idSite (value: number) {
    this._idSite = value;
  }

  get name (): string {
    return this.name;
  }

  set name (value: string) {
    this._name = value;
  }

  get universityId (): number {
    return this.universityId;
  }

  set universityId (value:  number) {
    this._universityId = value;
  }


  private _idSite:      number;
  private _name:        string;
  private _universityId:  number;

}

export { Site }
