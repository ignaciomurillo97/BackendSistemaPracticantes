class SystemEvent {

  get idEvent (): number {
    return this.idEvent;
  }
  set idEvent (value: number) {
    this._idEvent = value;
  }

  get EventDate (): Date {
    return this.EventDate;
  }
  set EventDate (value: Date) {
    this._EventDate = value;
  }

  get StartTime (): Date {
    return this.StartTime;
  }
  set StartTime (value: Date) {
    this._StartTime = value;
  }

  get EndTime (): Date {
    return this.EndTime;
  }
  set EndTime (value: Date) {
    this._EndTime = value;
  }

  get EventType (): number {
    return this.EventType;
  }
  set EventType (value: number) {
    this._EventType = value;
  }

  get Picture (): string {
    return this.Picture;
  }
  set Picture (value: string) {
    this._Picture = value;
  }

  get Name (): string {
    return this.Name;
  }
  set Name (value: string) {
    this._Name = value;
  }


  private _idEvent: number;
  private _EventDate: Date;
  private _StartTime: Date;
  private _EndTime: Date;
  private _EventType: number;
  private _Picture: string;
  private _Name: string;

  constructor () {

  }
}

export {SystemEvent}
