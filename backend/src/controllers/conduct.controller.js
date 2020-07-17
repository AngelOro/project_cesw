const controller = {};
const connection = require("../../dbConnection/connection");
const Conduct = require("../model/Conduct");
const AssignVehicle = require("../model/AssignVehicle");
const conn = connection();

controller.getConduct = (req, res, next) => {
  conn.query("SELECT * FROM tbl_conductores", (err, rows) => {
    if (err) next(new Error(err));
    else res.json({ success: true, data: rows });
  });
};




controller.create = async (req, res) => {
  const {identificacion, nombre, primer_apellido,segundo_apellido,telefono_contacto,fecha_nacimiento,licencia_conduccion} = req.body;
   const data = await Conduct.create({
    identificacion:identificacion,
    nombre:nombre,
    primer_apellido:primer_apellido,
    segundo_apellido:segundo_apellido,
    telefono_contacto:telefono_contacto,
    fecha_nacimiento:fecha_nacimiento,
    licencia_conduccion:licencia_conduccion
   })
   console.log(data)
   .then(function(data){
     return data;
   })
     .catch((error) => {
      console.log(error);
      return error;
    });
  // const {
  //   identificacion,
  //   nombre,
  //   primer_apellido,
  //   segundo_apellido,
  //   telefono_contacto,
  //   fecha_nacimiento,
  //   licencia_conduccion,
  //   id_vehiculo,
  // } = req.body;
  // const query = ` call pbd_consultar_tbl_roles_por_agrupador (${identificacion}, ${nombre}, ${primer_apellido}, ${segundo_apellido}, ${telefono_contacto}, ${fecha_nacimiento}, ${licencia_conduccion}, ${id_vehiculo})`;

  // conn.query(query, (err, res) => {
  //   console.log(res);
  //     if (err) {
  //       console.log("Error en el query");
  //       console.log(err);
  //       return callback(err);
  //     } else {
  //       callback(null, res);
  //     }
  //   })
  //   .then(function (res) {
  //     return res;
  //   })
    
  res.status(200).json({
    success: true,
    message: "Guardo exitosamente en la base de datos",
    data: data,
  });
  console.log(data);
};


controller.assignVehicle = async (req, res) => {
  // data
  const {
    id_vehiculo,
    id_conductor,
  } = req.body;
  // create
  const data = await AssignVehicle.create({
    id_vehiculo: id_vehiculo,
    id_conductor: id_conductor,
    fecha_asignacion: new Date(),
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
    message: "Vehículo asignado exitosamente",
    data: data,
  });
};


module.exports = controller;
