import React from 'react';
import Header from '../components/Header';
import VehicleContent from '../components/VehicleContent';



const Vehicle = () => {//deja de ser un componente stateful no contiene {}
  // siempre se retorna un unico componente contenedor
  return (
    <>
      
      <Header />
      <VehicleContent />      

    </>
  );
}

export default Vehicle;