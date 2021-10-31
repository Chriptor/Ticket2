var {Model, DataTypes } = require('sequelize');
const sequelize = require('./conexion');

class User extends Model {}
User.init({
    id: {type: DataTypes.INTEGER, primaryKey:true},
    nombre: DataTypes.STRING,
    apellido_p: DataTypes.STRING,
    apellido_m: DataTypes.STRING,
    correo: DataTypes.STRING,
    pais: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    foto_perfil: DataTypes.BLOB,
    fecha_nac: DataTypes.DATE,
    estudios: DataTypes.STRING,
    certificaciones: DataTypes.STRING,
    idiomas: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    	
}, {sequelize,
    modelName: 'users',
    timestamps: false
    });

module.exports = User


