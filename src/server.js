'use strict'

const Hapi = require('@hapi/hapi')

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    })

    await server.start()
    console.debug('server running on %s', server.info.uri)
}

process.on('unhandledRejection', err => {

    console.debug(err)
    process.exit(1)
})

init()