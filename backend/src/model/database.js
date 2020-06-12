var Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'sotransiv',
    'root',
    '1234',
    {
      host: 'localhost',
      dialect: 'mysql'
    }
  );
  
  module.exports = sequelize;