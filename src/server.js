'use strict'

const Hapi = require('@hapi/hapi')

const account = require('./models')
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
            password: '123456789012345678901234567890123456', // should be 32 character
            isSecure: false // For working via HTTP in localhost
        },

        redirectTo: '/',

        validateFunc: async (request, session) => {
            const user = await account.findByPk(session.id)

            if (!user) {
                return { valid: false }
            }

            return { valid: true, credentials: user }
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