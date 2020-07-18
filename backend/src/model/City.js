const Sequelize = require('sequelize');
var sequelize = require('./database');

var nameTable = 'tbl_ciudades';

var City = sequelize.define(nameTable, {

    id_ciudad:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: false
    },
    descripcion:Sequelize.STRING
    
}, {
    timestamps: false,
});

module.exports = City;