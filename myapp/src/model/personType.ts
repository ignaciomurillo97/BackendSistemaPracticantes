class PersonType {
    get typeID (): number {
        return this._typeID;
    }

    set typeID (value: number) {
        this._typeID = value;
    }

    get type (): string {
        return this._type;
    }

    set type (value: string) {
        this._type = value;
    }

    get associatedCompany (): number {
        return this._associatedCompany;
    }

    set associatedCompany (value: number) {
        this._associatedCompany = value;
    }
    private _typeID: number;
    private _type: string;
    private _associatedCompany: number;

    constructor(){

    }
}

export { PersonType };