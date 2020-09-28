const connection = require("../../dbConnection/connection");
const conn = connection();
const Vehiculos = require('../model/Vehicle');

const controller = {};

controller.getVehicles = (req, res, next) => {
  conn.query(
    "SELECT V.id_vehiculo, V.placa, V.matricula, V.r_trailer, V.capacidad, V.fecha_soat, V.fecha_poliza, V.modelo, MV.descripcion AS marca , TV.descripcion AS tipoVehiculo, EV.descripcion AS estadoVehiculo " +
      "FROM tbl_vehiculos AS V INNER JOIN tbl_marcas_vehiculos AS MV ON V.id_marca = MV.id_marca " +
      "INNER JOIN tbl_tipos_vehiculos AS TV ON V.id_tipo = TV.id_tipo " +
      "INNER JOIN tbl_estados AS EV ON V.id_estado = EV.id_estado WHERE V.id_estado = 1",
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

controller.getVehicleAvailable = ( req, res, next) => {
  conn.query(
    "SELECT id_vehiculo, placa FROM tbl_vehiculos WHERE id_estado =  1 or id_estado = 5 " ,
    (err, rows) => {
      if (err) next(new Error(err));
      else res.json({ success: true, data: rows });
    }
  );
};

controller.insertVehicle = async (req, res) => {
  // data
  const data = {
    placa,
    matricula,
    r_trailer,
    capacidad,
    fecha_soat,
    fecha_poliza,
    modelo,
    id_marca,
    id_tipo,
    id_estado,
  } = req.body;
  // create
  let sql = "INSERT INTO tbl_vehiculos SET ?";
  conn.query(sql, data,(err, results) => {
    if(err) throw err;
    return data;
  });
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

controller.editVehicle = async (req,res) => {
  const { id_vehiculo } = req.params;

  conn.query("SELECT V.id_vehiculo, V.placa, V.matricula, V.r_trailer, V.capacidad, date_format(V.fecha_soat, '%d/%m/%Y') as fecha_soat, date_format(V.fecha_poliza, '%d/%m/%Y') as fecha_poliza , V.modelo, MV.descripcion AS marca, MV.id_marca , TV.descripcion AS tipoVehiculo, TV.id_tipo, EV.descripcion AS estadoVehiculo " +
  "FROM tbl_vehiculos AS V INNER JOIN tbl_marcas_vehiculos AS MV ON V.id_marca = MV.id_marca " +
  "INNER JOIN tbl_tipos_vehiculos AS TV ON V.id_tipo = TV.id_tipo " +
  "INNER JOIN tbl_estados AS EV ON V.id_estado = EV.id_estado WHERE V.id_estado = 1 and id_vehiculo = " + req.params.id_vehiculo,(err, rows) =>{
    if (err) next(new Error(err));
    else res.json({ success: true, data: rows });
  } )
  // .then(function(data){
  //   return data;
  // })
  // .catch(error =>{
  //   return error;
  // })
  // res.json({ success: true, data: data });
}

controller.deleteVehicle = async (req, res) => {
  // parameter post
  const { id_vehiculo } = req.body;
  // delete sequelize
  conn.query("UPDATE tbl_vehiculos set id_estado = 2 where id_vehiculo = " + req.body.id_vehiculo, (err, rows) => {
    if(err) throw err;
    else res.json({ success: true, message:"Se elimina vehículo" });
  }
);
}

controller.vehicleEdit = async (req,res) => {
  // parameter get id
  const { id_vehiculo } = req.params;
  // parameter POST
  const {placa,
    matricula,
    r_trailer,
    capacidad,
    fecha_soat,
    fecha_poliza,
    modelo,
    id_marca,
    id_tipo,
    id_estado
  } = req.body;
  // Update data
  const data = await Vehiculos.update({
    placa:placa,
    matricula:matricula,
    r_trailer:r_trailer,
    capacidad:capacidad,
    fecha_soat:fecha_soat,
    fecha_poliza:fecha_poliza,
    modelo:modelo,
    id_marca:id_marca,
    id_tipo:id_tipo,
    id_estado:id_estado,
  },
  {
    where: { id_vehiculo: id_vehiculo}
  })
  .then( function(data){
    return data;
  })
  .catch(error => {
    return error;
  }) 
  res.json({success:true, data:data, message:"Updated successful"});
}

module.exports = controller;
