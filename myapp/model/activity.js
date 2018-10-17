class Activity {
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

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get empresa() {
    return this._empresa;
  }

  set empresa(value) {
    this._empresa = value;
  }

  constructor(startTime, endTime) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.description = "";
    this.empresa = null;
  }

}

module.exports = Activity;

/*
{
  "event":{ 
    "date": "2018-10-17T00:37:08.196Z",
    "startTime": "2018-10-17T00:37:08.196Z",
    "endTime": "2018-10-17T00:37:08.196Z",
    "type": 2,
    "name": "Charla con EmpresaSA",
    "activities": [
      {
        "startTime": "2018-10-17T00:37:08.196Z",
        "endTime": "2018-10-17T00:37:08.196Z",
      },
      {
        "startTime": "2018-10-17T00:37:08.196Z",
        "endTime": "2018-10-17T00:37:08.196Z",
      }
    ]
  }
}
*/
