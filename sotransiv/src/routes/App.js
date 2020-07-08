import React, { Component } from 'react';
import { BrowserRouter, Swith, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import MainLogin from '../components/MainLogin';
import Main from '../pages/Main.jsx';
import Shipping from '../pages/Shipping';
import Report from '../pages/Report';
import Conduct from '../pages/Conduct';
import Vehicle from '../pages/Vehicle';
import RegisterConduct from '../pages/RegisterConduct'
import RegisterVehicle from '../pages/RegisterVehicle';
import RegisterShipping from '../pages/RegisterShipping';
//import '@fortawesome/fontawesome-free/css/fontawesome.min.css'


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={MainLogin} />
      <Route path="/Main" component={Main} />
      <Route path="/Vehicle" component={Vehicle} />
      <Route path="/Shipping" component={Shipping} />
      <Route path="/Report" component={Report} />
      <Route path="/Conduct" component={Conduct} />
      <Route path="/RegisterVehicle" component={RegisterVehicle}/>
      <Route path="/RegisterConduct" component={RegisterConduct}/>
      <Route path="/RegisterShipping" component={RegisterShipping}/>
    </BrowserRouter>
  );

}

export default App;
