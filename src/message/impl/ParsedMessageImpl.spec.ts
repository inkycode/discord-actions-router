import { ParsedMessageImpl } from './ParsedMessageImpl'

import { Message } from 'discord.js'

import * as Mocha from 'mocha'

import * as Chai from 'chai'

import * as Sinon from 'sinon'

Mocha.describe('ParsedMessageImpl', () => {
    const mockMessage: Message = <Message> <any> Sinon.mock(Message)
    const parsedMessageImpl: ParsedMessageImpl = new ParsedMessageImpl(mockMessage, 'bot!', 'content', 'action', ['arg1'])

    Mocha.describe('.Message', () => {
        Mocha.it('should return the message', () => {
            Chai.assert(parsedMessageImpl.Message === mockMessage)
        })
    })

    Mocha.describe('.Prefix', () => {
        Mocha.it('should return the prefix', () => {
            Chai.assert(parsedMessageImpl.Prefix === 'bot!')
        })
    })

    Mocha.describe('.Content', () => {
        Mocha.it('should return the content', () => {
            Chai.assert(parsedMessageImpl.Content !== null && parsedMessageImpl.Content === 'content')
        })
    })

    Mocha.describe('.Action', () => {
        Mocha.it('should return the action', () => {
            Chai.assert(parsedMessageImpl.Action !== null && parsedMessageImpl.Action === 'action')
        })
    })

    Mocha.describe('.ActionArguments', () => {
        Mocha.it('should return the action arguments', () => {
            Chai.assert(parsedMessageImpl.ActionArguments !== null && parsedMessageImpl.ActionArguments.length === 1)
            Chai.assert(parsedMessageImpl.ActionArguments !== null && parsedMessageImpl.ActionArguments[0] === 'arg1')
        })
    })
})