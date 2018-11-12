"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class TelephoneNumberDB {
    constructor() {
    }
    insert(telephoneNumbers, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            let telephoneListDBNames;
            telephoneListDBNames = telephoneNumbers.map((obj) => {
                return obj.toDBNames();
            });
            try {
                yield transaction('NumeroTelefono')
                    .insert(telephoneListDBNames);
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.TelephoneNumberDB = TelephoneNumberDB;
//# sourceMappingURL=telephoneDB.js.map