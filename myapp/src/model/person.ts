class Person
{
    get id (): number {
        return this._id;
    }

    set id (value: number) {
        this._id = value;
    }

    get firstName (): string {
        return this._firstName;
    }

    set firstName (value: string) {
        this._firstName = value;
    }

    get secondName (): string {
        return this._secondName;
    }

    set secondName (value: string) {
        this._secondName = value;
    }

    get lastName (): string {
        return this._lastName;
    }

    set lastName (value: string) {
        this._lastName = value;
    }

    get secondLastName (): string {
        return this._secondLastName;
    }

    set secondLastName (value: string) {
        this._secondLastName = value;
    }

    get genre (): string {
        return this._genre;
    }

    set genre (value: string) {
        this._genre = value;
    }

    get personType (): number {
        return this._personType;
    }

    set personType (value: number) {
        this._personType = value;
    }
    
    private _id: number;
    private _firstName: string;
    private _secondName: string;
    private _lastName: string;
    private _secondLastName: string;
    private _genre: string;
    private _personType: number;

    constructor(){

    }



}

export { Person };