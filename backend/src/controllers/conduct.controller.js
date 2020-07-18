const controller = {};
const connection = require("../../dbConnection/connection");
const Conduct = require("../model/Conduct");
const AssignVehicle = require("../model/AssignVehicle");
const conn = connection();

controller.getConduct = (req, res, next) => {
  conn.query("select * from tbl_conductores", (err, rows) => {
    if (err) next(new Error(err));
    else res.json({ success: true, data: rows });

    // conn.query("SELECT identificacion, nombre, primer_apellido, segundo_apellido, telefono_contacto, fecha_nacimiento, licencia_conduccion, V.placa, VA.id_vehiculo" +
    // " FROM tbl_conductores E INNER JOIN tbl_vehiculo_asignado VA ON E.identificacion = VA.id_conductor " +
    // " INNER JOIN tbl_vehiculos V ON VA.id_vehiculo = V.id_vehiculo ", (err, rows) => {
    //   if (err) next(new Error(err));
    //   else res.json({ success: true, data: rows });
    // });
  });
};

controller.create = async (req, res) => {
  const {
    identificacion,
    nombre,
    primer_apellido,
    segundo_apellido,
    telefono_contacto,
    fecha_nacimiento,
    licencia_conduccion,
  } = req.body;
  const data = await Conduct.create({
    identificacion: identificacion,
    nombre: nombre,
    primer_apellido: primer_apellido,
    segundo_apellido: segundo_apellido,
    telefono_contacto: telefono_contacto,
    fecha_nacimiento: fecha_nacimiento,
    licencia_conduccion: licencia_conduccion,
  });
  console
    .log(data)
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
  res.status(200).json({
    success: true,
    message: "Guardo exitosamente en la base de datos",
    data: data,
  });
  console.log(data);
};

controller.assignVehicle = async (req, res) => {
  // data
  const { id_vehiculo, id_conductor } = req.body;
  // create
  const data = await AssignVehicle.create({
    id_vehiculo: id_vehiculo,
    id_conductor: id_conductor,
    fecha_asignacion: new Date(),
  });
  console
    .log(data)
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
    message: "Vehículo asignado exitosamente",
    data: data,
  });
};

controller.editConduct = async (req, res) => {
  const { identificacion } = req.params;

  conn.query(
    "SELECT * FROM tbl_conductores where identificacion = " +
      req.params.identificacion,
    (err, rows) => {
      if (err) next(new Error(err));
      else res.json({ success: true, data: rows });
    }
  );
};

controller.ConductEdit = async (req, res) => {
  const { identificacion } = req.params;
  const {
    nombre,
    primer_apellido,
    segundo_apellido,
    telefono_contacto,
    fecha_nacimiento,
    licencia_conduccion,
  } = req.body;
  // Update data
  const data = await Conduct.update(
    {
      identificacion: identificacion,
      nombre: nombre,
      primer_apellido: primer_apellido,
      segundo_apellido: segundo_apellido,
      telefono_contacto: telefono_contacto,
      fecha_nacimiento: fecha_nacimiento,
      licencia_conduccion: licencia_conduccion,
    },
    {
      where: { identificacion: identificacion },
    }
  )
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      return error;
    });
  res.json({ success: true, data: data, message: "¡Updated successful!" });
};

controller.deleteConduct = async (req, res) => {
  const { identificacion } = req.body;

  conn.query(
    "delete from tbl_conductores where identificacion = " +
      req.body.identificacion,
    (err, rows) => {
      if (err) throw err;
      else res.json({ success: true, message: "Se elimina Conductor" });
    }
  );
};

module.exports = controller;
