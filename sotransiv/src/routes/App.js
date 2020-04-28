import React from 'react';
import { BrowserRouter, Swith, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Login from '../components/Login';
import Main from '../pages/Main.jsx';
import Vehiculo from '../pages/Vehiculo.jsx'


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/Main" component={Main} />
      <Route path="/Vehiculo" component={Vehiculo} />
      
    </BrowserRouter>
  );
}

export default App;
