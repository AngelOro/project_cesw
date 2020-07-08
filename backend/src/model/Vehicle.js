const Sequelize = require("sequelize");
var sequelize = require("./database");
var Marcas = require("./Marcas");
var TipoVehiculo = require("./TipoVehiculo");
var Estados = require("./Estados");

var nameTable = "tbl_vehiculos";

var Vehiculos = sequelize.define(
  nameTable,
  {
    id_vehiculo: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    placa: Sequelize.STRING,
    matricula: Sequelize.STRING,
    r_trailer: Sequelize.STRING,
    capacidad: Sequelize.STRING,
    fecha_soat: Sequelize.DATE,
    fecha_poliza: Sequelize.DATE,
    modelo: Sequelize.STRING,
    id_marca: {
      type: Sequelize.INTEGER,
      // This is a reference to another model
      references: {
        model: Marcas,
        key: "id_marca",
      },
    },
    id_tipo: {
      type: Sequelize.INTEGER,
      reference: {
        model: TipoVehiculo,
        key: "id_tipo",
      },
    },
    id_estado: {
      type: Sequelize.INTEGER,
      reference: {
        model: Estados,
        key: "id_estado",
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Vehiculos;
