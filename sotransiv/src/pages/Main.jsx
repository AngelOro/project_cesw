import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import UserContent from '../components/UserContent';
// import '../styles/Main.css';
import {link,Link} from 'react-router-dom';

const Main = () => {//deja de ser un componente stateful no contiene {}
  // siempre se retorna un unico componente contenedor
  return (
    <>
      
      <MainContent />
      

    </>
  );
}

export default Main;
//<UserContent/>