var Usuarios = require('../model/Users');
var sequelize = require('../model/database');
const controllers = {};

controllers.testdata = async ( req, res) => {
  
  const response = await sequelize.sync().then(function() {
       const data =  Usuarios.findAll()
       return data;
    })
    .catch(err => {
      return err;
    });
    res.json(response)
  
  }
  
  controllers.list = async (req, res) => {

    const data = await Usuarios.findAll()
    .then(function(data){
      return data;
    })
    .catch(error => {
      return error;
    }); 
  
    res.json({success: true, data: data});
  
  }

  module.exports = controllers