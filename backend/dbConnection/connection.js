
const mysql = require("mysql");

module.exports = () =>
  mysql.createConnection(
    {
      host: "localhost",
      user: "sotransiv",
      password: "1234",
      database: "sotraniv",
      port: 3306,
    },
    "single" // Conexión simple o única
  );
