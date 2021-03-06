# Discord actions router [![build status](https://travis-ci.com/inkycode/discord-actions-router.svg?branch=master)](https://travis-ci.com/inkycode/discord-actions-router)
A node.js module for parsing discord messages and evoking action handlers

## Basic usage
1. Use the RouterFactory to create a Router ```const myRouter = RouterFactory.create(client, 'prefix!')```
2. Register actions to the router ```myRouter.registerAction('action', HandlerFunction)```
3. Start the router ```myRouter.start()```

## ToDo
1. Add non-prefixed message handling (global actions)
2. Fix the Action decorator for proper usage
3. Implement logging
4. Create sample project
5. Publish the module to NPM
    * Think about publish/build process

## Developer instructions
The following instructions assume you already have git and node.js (built using v12.0.0) installed

### Getting started
1. Clone the project by running ```git clone git@github.com:inkycode/discord-actions-router.git```
2. Install dependencies by running ```npm install```

### How to test
Run ```npm test```

### How to build
Run ```npm run build```