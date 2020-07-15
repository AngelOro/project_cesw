const controller = {};
const connection = require('../../dbConnection/connection'); 
const Conduct = require('../model/Conduct');
const conn = connection();

controller.getConduct = (req, res, next) => {
    conn.query('SELECT * FROM tbl_conductores', (err, rows) => {
      if(err) next(new Error(err))
      else res.json({success: true, data: rows})
    })
}

controller.create = async (req,res)=>{
   const {identificacion, nombre, primer_apellido,segundo_apellido,telefono_contacto,fecha_nacimiento,licencia_conduccion} = req.body;
   const data = await Conduct.create({
    identificacion:identificacion,
    nombre:nombre,
    primer_apellido:primer_apellido,
    segundo_apellido:segundo_apellido,
    telefono_contacto:telefono_contacto,
    fecha_nacimiento:fecha_nacimiento,
    licencia_conduccion:licencia_conduccion

   }).then(function(data){
     return data;

   }).catch(error => {
     console.log(error)
     return error;
    })
    res.status(200).json({
      success:true,
      message:"Guardo exitosamente en la base de datos",
      data:data
    })
    console.log(data);
}

module.exports = controller;
