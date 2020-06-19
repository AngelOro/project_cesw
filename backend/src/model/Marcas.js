const Sequelize = require('sequelize');
var sequelize = require('./database');

var nameTable = 'tbl_marcas_vehiculos';

var Marcas = sequelize.define(nameTable, {

    id_marca:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: false
    },
    descripcion:Sequelize.STRING
    
}, {
    timestamps: false,
});

module.exports = Marcas;