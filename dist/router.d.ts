export declare class Router {
    private name;
    private routes;
    constructor(name: string);
    registerRoute(routeName: string, routeFunction: Function | undefined): void;
}
