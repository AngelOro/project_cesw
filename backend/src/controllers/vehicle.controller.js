const connection = require('../../dbConnection/connection')
const conn = connection()

const controller = {}

controller.getVehicles = (req, res, next) => {
    conn.query('SELECT * FROM tbl_vehiculos', (err, rows) => {
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


