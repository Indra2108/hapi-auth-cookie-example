const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('testdatabase', 'root', 'Indra2108!', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
})

module.exports = sequelize
