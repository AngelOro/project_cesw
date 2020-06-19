var Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'sotraniv',
    'sotransiv',
    '1234',
    {
      host: 'localhost',
      dialect: 'mysql'
    }
  );
  
  module.exports = sequelize;