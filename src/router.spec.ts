import { Router } from './router'

import * as Chai from 'chai'

import * as Mocha from 'mocha'

Mocha.describe('Router', () => {
    Mocha.describe('.hello()', () => {
        const router = new Router()

        Mocha.it('should return "Hello, World!"', () => {
            Chai.expect(router.hello()).to.equal('Hello, World!')
        })
    })
})