class Event {
  get date() {
    return this._date;
  }

  set date(value) {
    this._date = value;
  }

  get startTime() {
    return this._startTime;
  }

  set startTime(value) {
    this._startTime = value;
  }

  get endTime() {
    return this._endTime;
  }

  set endTime(value) {
    this._endTime = value;
  }

  get photoPath() {
    return this._photoPath;
  }

  set photoPath(value) {
    this._photoPath = value;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  constructor(date, startTime, endTime, type, name) {
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
    this.photoPath = "";
    this.type = type;
    this.name = name;
  }

}

module.exports = Event;
