const Sequelize = require("sequelize");
var sequelize = require("./database");

var nameTable = "tbl_tipos_vehiculos";

var TipoVehiculo = sequelize.define(
  nameTable,
  {
    id_tipo: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    descripcion: Sequelize.STRING,
  },
  {
    timestamps: false,
  }
);

module.exports = TipoVehiculo;
