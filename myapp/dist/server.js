"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const server = app_1.default.listen(app_1.default.get("port"), () => {
    console.log('Server running in port 3000');
});
exports.default = server;
//# sourceMappingURL=server.js.map