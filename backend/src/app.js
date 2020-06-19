
var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())
 
app.get('/user', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen(3001, function () {
  console.log('CORS-enabled web server listening on port 80')
})

const routersVehicles = require('./routes/index.routes');
const routersUsers = require('./routes/user.routes')
const routersConduct = require('./routes/conduct.routes')
//Routes
app.use('/Vehicle', routersVehicles);
app.use('/user', routersUsers);
app.use('/Conduct', routersConduct);


//Settings, configuración del servidor
app.set('port', process.env.PORT || 3000) //Se asigna el puerto
//Middlewares
app.use(express.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//Errors
// app.use((err, req, res, next) => {
//   res.send({ error: err.message })
// })

app.listen(app.get('port'), () => {
  // console.log(`Server on port ${app.get('port')}`)
  console.log("Iniciando servidor node")
})


/////////////////////////////////////////////////////////////////
