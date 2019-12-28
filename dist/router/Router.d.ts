export interface Router {
    registerAction(action: string, actionHandler: Function | undefined): void;
    start(): void;
    Actions: Map<string, Function>;
    Prefix: string;
}
