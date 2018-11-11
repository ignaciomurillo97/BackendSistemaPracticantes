class LoginToken {

    private _personType: number;
    private _errorMessage: string;
    private _username: number;
    private _password: string;
    private _id: number;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get username(): number {
        return this._username;
    }

    set username(value: number) {
        this._username = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get personType (): number {
        return this._personType;
    }

    set personType (value: number) {
        this._personType = value;
    }

    get errorMessage (): string {
        return this._errorMessage;
    }

    set errorMessage (value: string) {
        this._errorMessage = value;
    }

    constructor () {
    }


}

export {LoginToken}
