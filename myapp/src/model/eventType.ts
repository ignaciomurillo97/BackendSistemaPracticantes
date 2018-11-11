class EventType {
  get idEvaluation (): number {
    return this.idEvaluation;
  }
  set idEvaluation (value: number) {
    this._idEvaluation = value;
  }

  get type (): string {
    return this.type;
  }
  set type (value: string) {
    this._type = value;
  }


  public _idEvaluation: number;
  public _type: string;

  constructor () {

  }
}
export {EventType}
