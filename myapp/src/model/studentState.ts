class StudentState {

  get id (): number {
    return this.id;
  }
  set id (value: number) {
    this._id = value;
  }

  get state (): string {
    return this.state;
  }
  set state (value: string) {
    this._state = value;
  }

  private _id: number;
  private _state: string;

  constructor () {

  }
}

export { StudentState }
