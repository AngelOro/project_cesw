var Sequelize = require('sequelize');

const sequelize = new Sequelize(


    'sotransiv', //database
    'sotransiv', //user
    '1234',      //pass
    {
      host: 'localhost',
      dialect: 'mysql'
    }
  );
  
  module.exports = sequelize;