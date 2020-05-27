import React from 'react';
import Header from '../components/Header'
import ConductorContent from '../components/ConductorContent';


const Conduct = () => {//deja de ser un componente stateful no contiene {}
  // siempre se retorna un unico componente contenedor
  return (
    <>
      <Header />
      <ConductorContent/>      
    </>
  );
}

export default Conduct;