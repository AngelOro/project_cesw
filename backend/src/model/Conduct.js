const Sequelize = require('sequelize');
var sequelize = require('./database');

var nameTable = 'tbl_conductores';

var conduct = sequelize.define(nameTable, {

    identificacion:{
        type:Sequelize.STRING,
        primaryKey: true
    },
    nombre:Sequelize.STRING,
    primer_apellido:Sequelize.STRING,
    segundo_apellido:Sequelize.STRING,
    telefono_contacto:Sequelize.STRING,
    fecha_nacimiento:Sequelize.DATE,
    licencia_conduccion:Sequelize.STRING,
}, {
    timestamps: false,
});

module.exports = conduct;
