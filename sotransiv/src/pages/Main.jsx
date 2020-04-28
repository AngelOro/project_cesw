import React, { Component } from 'react';
import Header from '../components/Header';
import Content from '../components/Content';
import {link,Link} from 'react-router-dom';

const Main = () => {//deja de ser un componente stateful no contiene {}
  // siempre se retorna un unico componente contenedor
  return (
    <>
      
      <Header />
      <Content />
      

    </>
  );
}

export default Main;