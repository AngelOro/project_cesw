const connection = require("../../dbConnection/connection");
const conn = connection();
const Vehiculos = require('../model/Vehicle');

const controller = {};

controller.getVehicles = (req, res, next) => {
  conn.query(
    "SELECT V.id_vehiculo, V.placa, V.matricula, V.r_trailer, V.capacidad, V.fecha_soat, V.fecha_poliza, V.modelo, MV.descripcion AS marca , TV.descripcion AS tipoVehiculo, EV.descripcion AS estadoVehiculo " +
      "FROM tbl_vehiculos AS V INNER JOIN tbl_marcas_vehiculos AS MV ON V.id_marca = MV.id_marca " +
      "INNER JOIN tbl_tipos_vehiculos AS TV ON V.id_tipo = TV.id_tipo " +
      "INNER JOIN tbl_estados AS EV ON V.id_estado = EV.id_estado",
    (err, rows) => {
      if (err) next(new Error(err));
      else res.json({ success: true, data: rows });
    }
  );
};

controller.getTypeVehicle = (req, res, next) => {
  conn.query(
    "SELECT id_tipo, descripcion as tipoVehiculo FROM tbl_tipos_vehiculos",
    (err, rows) => {
      if (err) next(new Error(err));
      else res.json({ success: true, data: rows });
    }
  );
};

controller.getMarcaVehicle = (req, res, next) => {
  conn.query(
    "SELECT id_marca, descripcion as marcaVehiculo FROM tbl_marcas_vehiculos",
    (err, rows) => {
      if (err) next(new Error(err));
      else res.json({ success: true, data: rows });
    }
  );
};

controller.insertVehicle = async (req, res) => {
  // data
  const {
    placa,
    matricula,
    r_trailer,
    capacidad,
    fecha_soat,
    fecha_poliza,
    modelo,
    id_marca,
    id_tipo,
  } = req.body;
  // create
  const data = await Vehiculos.create({
    placa: placa,
    matricula: matricula,
    r_trailer: r_trailer,
    capacidad: capacidad,
    fecha_soat: fecha_soat,
    fecha_poliza: fecha_poliza,
    modelo: modelo,
    id_marca: id_marca,
    id_tipo: id_tipo,
    id_estado: 1,
  })
  console.log(data)
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      console.log("Error" + error);
      return error;
    });
  // return res
  res.status(200).json({
    success: true,
    message: "Vehículo almacenado exitosamente",
    data: data,
  });
};

module.exports = controller;
