"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Action(router, name) {
    return function (target, propertyKey, descriptor) {
        router.registerAction(name !== undefined ? name : propertyKey, target[propertyKey]);
    };
}
exports.Action = Action;
