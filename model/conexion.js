const Sequelize = require('sequelize')

const sequelize = new Sequelize('devface', 'root', '', {
    dialect: 'mariadb',
    dialectOptions: {connectTimeout: 1000} // mariadb connector option
  })

  module.exports = sequelize