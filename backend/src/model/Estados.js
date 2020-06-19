const Sequelize = require('sequelize');
var sequelize = require('./database');

var nameTable = 'tbl_estados';

var Estados = sequelize.define(nameTable, {

    id_estado:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: false
    },
    descripcion:Sequelize.STRING
    
}, {
    timestamps: false,
});

module.exports = Estados;