import { Router } from '../Router'

import { ParsedMessage } from '../../message/ParsedMessage'
import * as MessageParser from '../../message/impl/MessageParser'

import { Client, Message } from 'discord.js'

export class RouterImpl implements Router {
    private actions: Map<string, Function>
    private client: Client
    private prefix: string

    protected routeMessage (client: Client) {
        return (message: Message) => {
            // Do not route messages sent by the bot client
            if (message.author == client.user) return

            // If message starts with the prefix then we can parse it before sending it to the action handler
            if (message.content.startsWith(this.prefix)) {
                const parsedMessage: ParsedMessage = MessageParser.parse(message, this.prefix)

                // Check if the action has a handler registered
                if (parsedMessage.Action !== null && this.actions.has(parsedMessage.Action)) {
                    // Get the action handler
                    const actionHandler: Function | undefined = this.actions.get(parsedMessage.Action)

                    // And call it if possible
                    if (actionHandler) {
                        actionHandler(client, parsedMessage)
                    }
                }
            }
        }
    }

    constructor (client: Client, prefix: string) {
        this.actions = new Map<string, Function>()
        this.client = client
        this.prefix = prefix
    }

    registerAction (action: string, actionHandler: Function) {
        if (!this.actions.has(action)) {
            this.actions.set(action, actionHandler)
        }
    }

    start () {
        this.client.on('message', this.routeMessage(this.client))
    }

    get Actions (): Map<string, Function> {
        return this.actions
    }

    get Prefix (): string {
        return this.prefix
    }
}