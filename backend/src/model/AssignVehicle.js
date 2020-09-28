const Sequelize = require("sequelize");
var sequelize = require("./database");
var Vehiculos = require("./Vehicle");
var conduct = require("./Conduct");

var nameTable = "tbl_vehiculo_asignado";

var AssignVehicle = sequelize.define(
  nameTable,
  {
    id_vehiculo_asignado: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    id_vehiculo: {
        type: Sequelize.INTEGER,
        reference: {
          model: Vehiculos,
          key: "id_vehiculo",
        },
      },
      id_conductor: {
        type: Sequelize.STRING,
        reference: {
          model: conduct,
          key: "identificacion",
        },
      },
    fecha_asignacion: Sequelize.DATE
  },
  {
    timestamps: false,
  }
);

module.exports = AssignVehicle;