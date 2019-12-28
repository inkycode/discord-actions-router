import { ParsedMessage } from '../ParsedMessage'

import { Message } from 'discord.js'

export class ParsedMessageImpl implements ParsedMessage {
    private message: Message
    private prefix: string
    private action: string | null
    private content: string | null
    private actionArguments: Array<string> | null

    constructor (message: Message, prefix: string, content: string | null, action: string | null, actionArguments: Array<string> | null) {
        this.message = message
        this.prefix = prefix
        this.content = content
        this.action = action
        this.actionArguments = actionArguments
    }

    get Message (): Message {
        return this.message
    }

    get Prefix (): string {
        return this.prefix
    }

    get Action (): string | null {
        return this.action
    }

    get ActionArguments (): Array<string> | null {
        return this.actionArguments
    }

    get Content (): string | null {
        return this.content
    }
}