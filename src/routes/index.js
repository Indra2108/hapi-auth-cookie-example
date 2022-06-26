const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Welcome to my restricted page!'
        }
    },
    {
        method: 'GET',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Nyasar mass!!!1'
        },
        options: {
            auth: false
        }
    }
]

module.exports = routes