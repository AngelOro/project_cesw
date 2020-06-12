var Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'sotransiv', //database
    'sotransiv', //Usuario
    '1234',
    {
      host: 'localhost',
      dialect: 'mysql'
    }
  );
  
  module.exports = sequelize;