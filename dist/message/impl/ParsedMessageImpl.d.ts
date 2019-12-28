import { ParsedMessage } from '../ParsedMessage';
import { Message } from 'discord.js';
export declare class ParsedMessageImpl implements ParsedMessage {
    private message;
    private prefix;
    private action;
    private content;
    private actionArguments;
    constructor(message: Message, prefix: string, content: string | null, action: string | null, actionArguments: Array<string> | null);
    get Message(): Message;
    get Prefix(): string;
    get Action(): string | null;
    get ActionArguments(): Array<string> | null;
    get Content(): string | null;
}
