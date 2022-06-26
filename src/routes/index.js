const login = require("../handler/LOGIN")
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
        method: 'POST',
        path: '/register',
        handler: register,
        options: {
            auth: false
        }
    },
    {
        method: 'POST',
        path: '/login',
        handler: login,
        options: {
            auth: {
                mode: 'try'
            }
        }
    },
    {
        method: 'GET',
        path: '/logout',
        handler: async (request, h) => {
            await request.cookieAuth.clear()
            return h.redirect('/')
        },
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
]

module.exports = routes