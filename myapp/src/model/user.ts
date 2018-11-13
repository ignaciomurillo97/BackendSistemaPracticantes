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

  fromDBNames(dbResult: any) {
    this.id = dbResult.Cedula;
    this.username = dbResult.NombreUsuario;
    this.passwordHash = dbResult.Contrasena;
  }

  toDBNames () : Object {
    return {
      Cedula: this.id,
      NombreUsuario: this.username,
      Contrasena: this.passwordHash,
    }
  }
}

export { User }
