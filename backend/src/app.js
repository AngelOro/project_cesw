var express = require('express')
var cors = require('cors')
var app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
 
app.use(cors())
 
app.get('/', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.post('/', function (req, res) {
  res.send('POST request to the homepage');
})

app.put('/', function (req, res) {
  res.send('POST request to the homepage');
})

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')

})


const routersShipping = require('./routes/shipping.routes');
const routersVehicles = require('./routes/vehicle.routes');
const routersConduct = require('./routes/conduct.routes')


//Routes
app.use('/Vehicle', routersVehicles);
app.use('/Shipping', routersShipping);
app.use('/Conduct', routersConduct);



//Settings, configuración del servidor
app.set('port', process.env.PORT || 3001) //Se asigna el puerto 
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


app.listen(app.get('port'), () => {
  console.log("Iniciando servidor node")
})

