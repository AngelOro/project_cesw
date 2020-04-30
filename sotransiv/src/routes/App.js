import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Body from '../components/Body';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Header} />
      <Route path="/" component={Body} />
    </BrowserRouter>
  );
}

export default App;
