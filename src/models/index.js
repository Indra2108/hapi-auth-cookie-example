const { DataTypes } = require('sequelize')
const sequelize = require('../dbconfig')

const account = sequelize.define('account', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
})

module.exports = account