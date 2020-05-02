import React from 'react';
import { BrowserRouter, Swith, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Login from '../components/Login';
import Main from '../pages/Main.jsx';
import Envio from '../pages/Envio';
import Reporte from '../pages/Reporte';
import Conductor from '../pages/Conductor';
import Vehiculo from '../pages/Vehiculo';
import RegisterVehicle from '../pages/RegisterVehicle'


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/Main" component={Main} />
      <Route path="/Vehiculo" component={Vehiculo} />
      <Route path="/Envio" component={Envio} />
      <Route path="/Reporte" component={Reporte} />
      <Route path="/Conductor" component={Conductor} />
      <Route path="/RegisterVehicle" component={RegisterVehicle}/>

    </BrowserRouter>
  );
}

export default App;
