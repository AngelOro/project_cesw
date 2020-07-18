const controller = {};
const connection = require('../../dbConnection/connection')
const conn = connection()

controller.getShipping = (req, res, next) => {
    conn.query('SELECT E.id_envio, DATE_FORMAT(E.fecha_inicio, "%d-%m-%Y") as fecha_inicio, E.fecha_fin, E.valor_envio, V.placa, CO.descripcion as ciudad_origen, CD.descripcion as ciudad_destino, ES.descripcion as estado ' +
    ' FROM tbl_envios E INNER JOIN tbl_vehiculo_asignado VA ON E.id_vehiculo = VA.id_vehiculo ' +
    ' INNER JOIN tbl_vehiculos V ON VA.id_vehiculo = V.id_vehiculo ' +
    ' INNER JOIN tbl_ciudades CO ON CO.id_ciudad = E.id_origen ' +
    ' INNER JOIN tbl_ciudades CD ON CD.id_ciudad = E.id_destino ' +
    ' INNER JOIN tbl_estados ES ON E.id_estado = ES.id_estado', (err, rows) => {
      if(err) next(new Error(err))
      else res.json({success: true, data: rows})
    })
}

module.exports = controller;
