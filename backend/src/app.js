const express = require('express')

const app = express()

//Settings, configuración del servidor
app.set('port', process.env.PORT || 3001) //Se asigna el puerto


//Middlewares
app.use(express.json());

const routersVehicles = require('./routes/index.routes');
const routersUsers = require('./routes/user.routes')
//Routes
app.use('/Vehicle', routersVehicles);

app.use('/user', routersUsers)

// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use('/',(req,res) => {
  res.send("Welcome to server of Node Js")
})

//Errors
// app.use((err, req, res, next) => {
//   res.send({ error: err.message })
// })

app.listen(app.get('port'), () => {
  // console.log(`Server on port ${app.get('port')}`)
  console.log("Iniciando servidor node")
})