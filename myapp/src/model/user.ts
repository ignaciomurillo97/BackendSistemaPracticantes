class User {
    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get passwordHash(): string {
        return this._passwordHash;
    }

    set passwordHash(value: string) {
        this._passwordHash = value;
    }


  private _id: number;
  private _username: string;
  private _passwordHash: string;

  constructor () {

  }
}

export { User }
