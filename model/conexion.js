require('dotenv').config();

const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.DB_PASS, {
    dialect: 'mariadb',
    dialectOptions: {connectTimeout: 1000} // mariadb connector option
  })

  module.exports = sequelize

  console.log(process.env.DATABASE+ process.env.DB_USER+ process.env.DB_PASS);