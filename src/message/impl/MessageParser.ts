import { ParsedMessage } from '../ParsedMessage'
import { ParsedMessageImpl } from './ParsedMessageImpl'

import { Message } from 'discord.js'

function parseMessageContent (prefix: string, messageContent: string): RegExpExecArray | null {
    const regExp: RegExp = new RegExp(['^(', prefix, ') ?([^\\s]*) ?(.*)?$'].join(''), 'gi')

    const groups: RegExpExecArray | null = regExp.exec(messageContent)

    return groups
}

function parseContentForActionArguments (content: string | null) {
    return content !== null ? content.split(' ') : null
}

export function parse (message: Message, prefix: string) : ParsedMessage {
    let action: string | null = null
    let actionArguments: Array<string> | null = null
    let content: string | null = null
    let groups: RegExpExecArray | null = parseMessageContent(prefix, message.content)

    if (groups && groups !== null) {
        // groups[0] = whole match
        // groups[1] = prefix
        // groups[2] = actionName
        action = groups[2]
        // groups[3] = arguments as singular string
        content = groups[3] || null
        actionArguments = parseContentForActionArguments(content)
    }
    
    return new ParsedMessageImpl(message, prefix, content, action, actionArguments)
}