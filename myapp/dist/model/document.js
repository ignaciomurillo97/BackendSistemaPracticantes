"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PublicDocument {
    get id() {
        return this.id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this.name;
    }
    set name(value) {
        this._name = value;
    }
    get modificationDate() {
        return this.modificationDate;
    }
    set modificationDate(value) {
        this._modificationDate = value;
    }
    get owner() {
        return this.owner;
    }
    set owner(value) {
        this._owner = value;
    }
    constructor() {
    }
}
exports.PublicDocument = PublicDocument;
//# sourceMappingURL=document.js.map