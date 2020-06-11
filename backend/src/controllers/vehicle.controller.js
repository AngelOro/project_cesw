const connection = require('../../dbConnection/connection')
const conn = connection()

const controller = {}

controller.getVehicles = (req, res, next) => {
    conn.query('SELECT * FROM tbl_vehiculos', (err, rows) => {
      if(err) next(new Error(err))
      else res.send("Obteniendo vehículos")
      //res.render('index', { vehiclesData: rows })
    })
    // const data = {
    //   placa: "UTK-786",
    //   marca: "International"
    // }
    // res.json(data);
}


  module.exports = controller


