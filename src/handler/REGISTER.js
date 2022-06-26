const Bcrypt = require('bcrypt')

const account = require("../models")

const register = async (request, h) => {
    try {
        const { username, password } = request.payload

        const hashedpass = Bcrypt.hashSync(password, 8)

        if (!username || !password) {
            const response = h.response({
                status: 'fail',
                message: 'pastikan data sudah benar!'
            })
            response.code(401)
            return response
        }

        await account.create({
            username,
            password: hashedpass
        })

        const response = h.response({
            status: 'success',
            message: 'Registerasi Berhasil!'
        })
        response.code(201)
        return response

    } catch (err) {
        const response = h.response({
            status: 'Error',
            message: err
        })
        response.code(500)
        return response
    }
}

module.exports = register