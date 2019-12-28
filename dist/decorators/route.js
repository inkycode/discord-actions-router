"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Route(router) {
    return function (target, propertyKey, descriptor) {
        router.registerRoute(propertyKey, target[propertyKey]);
    };
}
exports.Route = Route;
