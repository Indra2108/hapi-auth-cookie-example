const register = require("../handler/REGISTER")

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
            return 'Nyasar mass!!!'
        },
        options: {
            auth: false
        }
    },
    {
        method: 'POST',
        path: '/register',
        handler: register,
        options: {
            auth: false
        }
    }
]

module.exports = routes