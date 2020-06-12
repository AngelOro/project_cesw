var Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'sotransiv',
    'sotransiv',
    '1234',
    {
      host: 'localhost',
      dialect: 'mysql'
    }
  );
  
  module.exports = sequelize;