'use strict'

const Hapi = require('@hapi/hapi')

const plugins = require('./plugins')
const routes = require('./routes')

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    })

    await server.register(plugins)

    server.auth.strategy('session', 'cookie', {
        cookie: {
            name: 'sid-example',
            password: 'rahasia',
            isSecure: false // For working via HTTP in localhost
        },

        redirectTo: '/login',

        validateFunc: async (request, session) => {
            // const account 
        }
    })
    server.auth.default('session')

    server.route(routes)

    await server.start()
    console.debug('server running on %s', server.info.uri)
}

process.on('unhandledRejection', err => {

    console.debug(err)
    process.exit(1)
})

init()