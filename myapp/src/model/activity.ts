class Activity {

  get id (): number {
    return this.id;
  }
  set id (value: number) {
    this._id = value;
  }

  get startTime (): Date {
    return this.startTime;
  }
  set startTime (value: Date) {
    this._startTime = value;
  }

  get endTime (): Date {
    return this.endTime;
  }
  set endTime (value: Date) {
    this._endTime = value;
  }

  get date (): Date {
    return this.date;
  }
  set date (value: Date) {
    this._date = value;
  }

  get description (): string {
    return this.description;
  }
  set description (value: string) {
    this._description = value;
  }

  get company (): number {
    return this.company;
  }
  set company (value: number) {
    this._company = value;
  }

  get event (): number {
    return this.event;
  }
  set event (value: number) {
    this._event = value;
  }


  private _id: number;
  private _startTime: Date;
  private _endTime: Date;
  private _date: Date;
  private _description: string;
  private _company: number;
  private _event: number;

  constructor() {

  }
}

export { Activity }
