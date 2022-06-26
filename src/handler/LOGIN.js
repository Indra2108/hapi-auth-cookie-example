const account = require("../models")

const login = async (request, h) => {
    const { username, password } = request.payload

    if (!username || !password) {
        const response = h.response({
            status: 'fail',
            message: 'pastikan data sudah benar!'
        })
        response.code(401)
        return response
    }

    const user = await account.findOne({ where: { username } })

    if (!user) {
        const response = h.response({
            status: 'fail',
            message: 'User Account tidak ditemukan!'
        })
        response.code(404)
        return response
    }

    request.cookieAuth.set({ id: user.id })

    return h.redirect('/')
}

module.exports = login