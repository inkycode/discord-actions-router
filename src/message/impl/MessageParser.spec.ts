import * as MessageParser from './MessageParser'
import { ParsedMessage } from '../ParsedMessage'

import { Message } from 'discord.js'

import * as Mocha from 'mocha'

import * as Chai from 'chai'

import * as Sinon from 'sinon'

Mocha.describe('MessageParser', () => {
    const mockMessage: Message = <Message> <any> Sinon.mock(Message)

    Mocha.describe('.parse(message: Message, prefix: string)', () => {
        Mocha.it('parses the message correctly', () => {
            mockMessage.content = 'bot!testAction arg1 arg2'

            const parsedMessage: ParsedMessage = MessageParser.parse(mockMessage, 'bot!')

            Chai.assert(parsedMessage.Action !== null && parsedMessage.Action === 'testAction')

            Chai.assert(parsedMessage.ActionArguments !== null)
            if (parsedMessage.ActionArguments !== null) {
                Chai.assert(parsedMessage.ActionArguments.length === 2)
                Chai.assert(parsedMessage.ActionArguments[0] === 'arg1')
                Chai.assert(parsedMessage.ActionArguments[1] === 'arg2')
            }

            Chai.assert(parsedMessage.Content !== null && parsedMessage.Content === 'arg1 arg2')
        })

        Mocha.it('parses the message correctly with space after prefix', () => {
            mockMessage.content = 'bot! testAction arg1 arg2'

            const parsedMessage: ParsedMessage = MessageParser.parse(mockMessage, 'bot!')

            Chai.assert(parsedMessage.Action !== null && parsedMessage.Action === 'testAction')

            Chai.assert(parsedMessage.ActionArguments !== null)
            if (parsedMessage.ActionArguments !== null) {
                Chai.assert(parsedMessage.ActionArguments.length === 2)
                Chai.assert(parsedMessage.ActionArguments[0] === 'arg1')
                Chai.assert(parsedMessage.ActionArguments[1] === 'arg2')
            }

            Chai.assert(parsedMessage.Content !== null && parsedMessage.Content === 'arg1 arg2')
        })

        Mocha.it('parses the message correctly with no arguments', () => {
            mockMessage.content = 'bot! testAction'

            const parsedMessage: ParsedMessage = MessageParser.parse(mockMessage, 'bot!')

            Chai.assert(parsedMessage.Action !== null && parsedMessage.Action === 'testAction')

            Chai.assert(parsedMessage.ActionArguments === null)

            Chai.assert(parsedMessage.Content === null)
        })

        Mocha.it('parses the message correctly with one argument', () => {
            mockMessage.content = 'bot! testAction arg1'

            const parsedMessage: ParsedMessage = MessageParser.parse(mockMessage, 'bot!')

            Chai.assert(parsedMessage.Action !== null && parsedMessage.Action === 'testAction')

            Chai.assert(parsedMessage.ActionArguments !== null)
            if (parsedMessage.ActionArguments !== null) {
                Chai.assert(parsedMessage.ActionArguments.length === 1)
                Chai.assert(parsedMessage.ActionArguments[0] === 'arg1')
            }

            Chai.assert(parsedMessage.Content !== null && parsedMessage.Content === 'arg1')
        })

        Mocha.it('parses the message correctly with action name which has special characters', () => {
            mockMessage.content = 'bot! test-action arg1'

            const parsedMessage: ParsedMessage = MessageParser.parse(mockMessage, 'bot!')

            Chai.assert(parsedMessage.Action !== null && parsedMessage.Action === 'test-action')

            Chai.assert(parsedMessage.ActionArguments !== null)
            if (parsedMessage.ActionArguments !== null) {
                Chai.assert(parsedMessage.ActionArguments.length === 1)
                Chai.assert(parsedMessage.ActionArguments[0] === 'arg1')
            }

            Chai.assert(parsedMessage.Content !== null && parsedMessage.Content === 'arg1')
        })
    })
})