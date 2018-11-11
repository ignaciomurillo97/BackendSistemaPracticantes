"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./person");
class Coordinator extends person_1.Person {
    get career() {
        return this.career;
    }
    set career(value) {
        this._career = value;
    }
    get site() {
        return this.site;
    }
    set site(value) {
        this._site = value;
    }
    constructor() {
        super();
    }
}
exports.Coordinator = Coordinator;
//# sourceMappingURL=coordinator.js.map