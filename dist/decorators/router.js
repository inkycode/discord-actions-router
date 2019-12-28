"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Route() {
    return function (target, propertyKey, descriptor) {
        console.log('DiscordAction called');
    };
}
exports.Route = Route;
function Router(configuration) {
    return function (target) {
        console.log(JSON.stringify(configuration));
    };
    // return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    //     console.log('DiscordAction called')
    // }
}
exports.Router = Router;
