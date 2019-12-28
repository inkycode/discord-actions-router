"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("./router");
var route_1 = require("./decorators/route");
var router = new router_1.Router('Test router');
var MyRoutes = /** @class */ (function () {
    function MyRoutes() {
    }
    MyRoutes.prototype.myRoute = function () {
        console.log('wow!');
    };
    __decorate([
        route_1.Route(router)
    ], MyRoutes.prototype, "myRoute", null);
    return MyRoutes;
}());
var myRoutes = new MyRoutes();
