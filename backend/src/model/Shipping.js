const Sequelize = require('sequelize');
var sequelize = require('./database');

var nameTable = 'tbl_envios';

var Envios = sequelize.define(nameTable, {

    id_envios:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario:Sequelize.STRING,
    clave:Sequelize.STRING,
    fecha_inicio:Sequelize.DATE,
    fecha_fin:Sequelize.DATE,
    valor_envio:Sequelize.STRING,
    id_vehiculo:Sequelize.INTEGER,    
    id_estado :Sequelize.INTEGER,
    id_origen :Sequelize.INTEGER,
    id_destino :Sequelize.INTEGER,

}, {
    timestamps: false,
});

module.exports = Envios;