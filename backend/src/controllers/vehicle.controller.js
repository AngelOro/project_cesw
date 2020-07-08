const connection = require('../../dbConnection/connection')
const conn = connection()

const controller = {}

controller.getVehicles = (req, res, next) => {
    conn.query(('SELECT V.id_vehiculo, V.placa, V.matricula, V.r_trailer, V.capacidad, V.fecha_soat, V.fecha_poliza, V.modelo, MV.descripcion AS marca , TV.descripcion AS tipoVehiculo, EV.descripcion AS estadoVehiculo ' +
    'FROM tbl_vehiculos AS V INNER JOIN tbl_marcas_vehiculos AS MV ON V.id_marca = MV.id_marca '+
    'INNER JOIN tbl_tipos_vehiculos AS TV ON V.id_tipo = TV.id_tipo ' + 
    'INNER JOIN tbl_estados AS EV ON V.id_estado = EV.id_estado'), (err, rows) => {
      if(err) next(new Error(err))
      else res.json({success: true, data: rows})
    })
}

// controllers.list = async (req, res) => {

//   const data = await Usuarios.findAll()
//   .then(function(data){
//     return data;
//   })
//   .catch(error => {
//     return error;
//   }); 

//   res.json({success: true, data: data});

// }

  module.exports = controller


