import React from "react";
import { link, Link } from "react-router-dom";
import logo from "../images/LogoWhite.png";
import user from "../images/user.jpg";
import "../styles/Sidebar.css";
import Navbar from './Navbar';

function Content() {
  return (
    <div className="form-row">
      <div id="sidebar-container position-fixed" className="bg-primary">
        <div className="content-sidebar">
        <div className="logo">
          <Link to="/Main">
            <img className="mb-4 logoWhite" src={logo} alt=""></img>
          </Link>
        </div>
        <div className="menu" id="sidebar">
          <Link to="/Vehicle" className="d-block text-light p-3 border-0">
            <i className="icon ion-md-apps lead mr-2"></i> Vehículos
          </Link>
          <Link to="/Conduct" className="d-block text-light p-3 border-0">
            <i className="icon ion-md-people lead mr-2"></i> Conductores
          </Link>
          <Link to="/Shipping" className="d-block text-light p-3 border-0">
            <i className="icon ion-md-paper-plane lead mr-2"></i>Envíos
          </Link>
          <Link to="/Report" className="d-block text-light p-3 border-0">
            <i className="icon ion-md-stats lead mr-2"></i> Reportes
          </Link>

         
        </div>
        </div>
          <Navbar />
        
      </div>
    </div>
  );
}

export default Content;
