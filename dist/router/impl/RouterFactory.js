"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RouterImpl_1 = require("./RouterImpl");
function createRouter(client, prefix) {
    return new RouterImpl_1.RouterImpl(client, prefix);
}
exports.createRouter = createRouter;
