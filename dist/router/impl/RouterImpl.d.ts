import { Router } from '../Router';
import { Client, Message } from 'discord.js';
export declare class RouterImpl implements Router {
    private actions;
    private client;
    private prefix;
    protected routeMessage(client: Client): (message: Message) => void;
    constructor(client: Client, prefix: string);
    registerAction(action: string, actionHandler: Function | undefined): void;
    start(): void;
    get Actions(): Map<string, Function>;
    get Prefix(): string;
}
