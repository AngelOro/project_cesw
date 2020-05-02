import React from 'react';
import Header from '../components/Header';
import VehiculoContent from '../components/VehiculoContent';
import {link,Link} from 'react-router-dom';


const Vehiculo = () => {//deja de ser un componente stateful no contiene {}
  // siempre se retorna un unico componente contenedor
  return (
    <>
      
      <Header />
      <VehiculoContent />      

    </>
  );
}

export default Vehiculo;