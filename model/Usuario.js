var {Model, DataTypes } = require('sequelize');
const sequelize = require('./conexion');

class User extends Model {}
User.init({
    id: {type: DataTypes.INTEGER, primaryKey:true},
    nombre: DataTypes.STRING,
    appellido: DataTypes.STRING,
    corrreo: DataTypes.STRING
}, {sequelize,
    modelName: 'users',
    timestamps: false
    });

module.exports = User


