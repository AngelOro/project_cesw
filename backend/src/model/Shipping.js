const Sequelize = require("sequelize");
var sequelize = require("./database");
var Vehicle = require("./Vehicle");
var Estados = require("./Estados");
const City = require("./City");

var nameTable = "tbl_envios";


var Envios = sequelize.define(nameTable, {

    id_envio:{
        type:Sequelize.INTEGER,
        primaryKey: true,

    },
    codigo_envio: Sequelize.STRING,
    nombre_producto: Sequelize.STRING,
    referencia: Sequelize.STRING,
    cantidad: Sequelize.FLOAT,
    fecha_inicio: Sequelize.DATE,
    fecha_fin: Sequelize.DATE,
    valor_envio: Sequelize.STRING,
    id_vehiculo: {
      type: Sequelize.INTEGER,
      // This is a reference to another model
      references: {
        model: Vehicle,
        key: "id_vehiculo",
      },
    },
    id_origen: {
      type: Sequelize.INTEGER,
      reference: {
        model: City,
        key: "id_ciudad",
      },
    },
    id_destino: {
      type: Sequelize.INTEGER,
      reference: {
        model: City,
        key: "id_ciudad",
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

module.exports = Envios;
