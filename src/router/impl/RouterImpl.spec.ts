import { RouterImpl } from './RouterImpl'

import { Client } from 'discord.js'

import * as Mocha from 'mocha'

import * as Chai from 'chai'

import * as Sinon from 'sinon'

Mocha.describe('RouterImpl', () => {
    Mocha.describe('.start', () => {
        const mockClient: Client = <Client> <any> Sinon.createStubInstance(Client)

        Mocha.it('should add an event listener for the message event', () => {
            const routerImpl: RouterImpl = new RouterImpl(mockClient, 'bot!')

            routerImpl.start()

            Sinon.assert.calledWith((<sinon.SinonStub>mockClient.on), 'message', Sinon.match.func)
            Sinon.assert.calledOnce((<sinon.SinonStub>mockClient.on))
        })
    })

    Mocha.describe('.registerAction', () => {
        const mockClient: Client = <Client> <any> Sinon.createStubInstance(Client)

        Mocha.it('should register the action by adding to the actions map', () => {
            const routerImpl: RouterImpl = new RouterImpl(mockClient, 'bot!')

            const myActionFunction = () => {}

            const actionsHasSpy = Sinon.spy(routerImpl.Actions, 'has')
            const actionsSetSpy = Sinon.spy(routerImpl.Actions, 'set')

            routerImpl.registerAction('myAction', myActionFunction)

            Sinon.assert.calledWith(actionsHasSpy, 'myAction')
            Sinon.assert.calledOnce(actionsHasSpy)
            Sinon.assert.calledWith(actionsSetSpy, 'myAction', myActionFunction)
            Sinon.assert.calledOnce(actionsSetSpy)
        })

        Mocha.it('should not register the action if it exists in the actions map', () => {
            const routerImpl: RouterImpl = new RouterImpl(mockClient, 'bot!')

            const myActionFunction = () => {}

            const actionsHasSpy = Sinon.spy(routerImpl.Actions, 'has')
            const actionsSetSpy = Sinon.spy(routerImpl.Actions, 'set')

            routerImpl.registerAction('myAction', myActionFunction)
            routerImpl.registerAction('myAction', myActionFunction)

            Sinon.assert.calledWith(actionsHasSpy, 'myAction')
            Sinon.assert.calledTwice(actionsHasSpy)
            Sinon.assert.calledWith(actionsSetSpy, 'myAction', myActionFunction)
            Sinon.assert.calledOnce(actionsSetSpy) // If it called this twice then it should fail
        })
    })

    Mocha.describe('.Actions', () => {
        const mockClient: Client = <Client> <any> Sinon.createStubInstance(Client)
        const routerImpl: RouterImpl = new RouterImpl(mockClient, 'bot!')

        Mocha.it('should return the actions map', () => {
            Chai.assert(routerImpl.Actions.size === 0)
        })
    })

    Mocha.describe('.Prefix', () => {
        const mockClient: Client = <Client> <any> Sinon.createStubInstance(Client)
        const routerImpl: RouterImpl = new RouterImpl(mockClient, 'bot!')

        Mocha.it('should return the prefix', () => {
            Chai.assert(routerImpl.Prefix === 'bot!')
        })
    })
})