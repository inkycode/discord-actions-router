"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Router = /** @class */ (function () {
    function Router(name) {
        this.name = name;
        this.routes = new Map();
    }
    Router.prototype.registerRoute = function (routeName, routeFunction) {
        if (routeFunction !== undefined) {
            if (!this.routes.has(routeName)) {
                console.log("registering route " + routeName);
                this.routes.set(routeName, routeFunction);
            }
        }
    };
    return Router;
}());
exports.Router = Router;
