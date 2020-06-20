const controller = {};
const connection = require('../../dbConnection/connection')
const conn = connection()

controller.getConduct = (req, res, next) => {
    conn.query('SELECT * FROM tbl_conductores', (err, rows) => {
      if(err) next(new Error(err))
      else res.json({success: true, data: rows})
    })
}

module.exports = controller;
