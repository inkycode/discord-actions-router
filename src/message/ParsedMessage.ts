import { Message } from 'discord.js'

export interface ParsedMessage {
    Message: Message
    Prefix: string
    Content: string | null
    Action: string | null
    ActionArguments: Array<string> | null
}