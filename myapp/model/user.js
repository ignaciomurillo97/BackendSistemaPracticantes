class User {
    get userName() {
        return this._userName;
    }

    set userName(value) {
        this._userName = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }
    get identification() {
        return this._identification;
    }

    set identification(value) {
        this._identification = value;
    }
    constructor(){
        this._identification = 0;
        this._userName = '';
        this._password = '';
    }
    
}

module.exports = User;