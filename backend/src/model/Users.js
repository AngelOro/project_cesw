const Sequelize = require('sequelize');
var sequelize = require('./database');

var nameTable = 'tbl_usuarios';

var Usuarios = sequelize.define(nameTable, {

    id_usuarios:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario:Sequelize.STRING,
    clave:Sequelize.STRING
    
}, {
    timestamps: false,
});

module.exports = Usuarios;