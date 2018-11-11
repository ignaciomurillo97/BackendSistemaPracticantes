class LoginToken {
    private _personType: number;
    private _errorMessage: string;

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
