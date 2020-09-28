
const mysql = require("mysql");

// module.exports = () =>
//   mysql.createConnection(
//     {
//       host: "us-cdbr-east-02.cleardb.com",
//       user: "b253d8d41276d8",
//       password: "0bfe4be5",
//       database: "heroku_06f05af3b8f2d97",
//       // port: 3306,
//     },
//   );

  module.exports = () =>
  mysql.createConnection(
    {
      host: "localhost",
      user: "sotransiv",
      password: "1234",
      database: "sotransiv",
      port: 3306,
    },
  );