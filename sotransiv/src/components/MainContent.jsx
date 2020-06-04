import React from "react";
import { link, Link } from "react-router-dom";
import logo from "../images/LogoWhite.png";
import user from "../images/user.jpg";
import "../styles/Sidebar.css";

function Content() {
  return (
    <div className="form-row">
      <div id="sidebar-container" className="bg-primary">
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

          {/* <ul className="list-unstyled components">
            <li className="active">
              <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                Vehículos
              </a>
              <ul className="collapse list-unstyled" id="homeSubmenu">
              <li>
                  <Link to="/Vehicle" className="d-block text-light p-3 border-0" >
                    <i className="icon ion-md-apps lead mr-2"></i> Gestionar Vehículos
                  </Link>
                </li>
                <li>
                  <Link to="/Vehicle" className="d-block text-light p-3 border-0" >
                    <i className="icon ion-md-apps lead mr-2"></i> Consumos de Vehículos
                  </Link>
                </li>
              </ul>
            </li>
            <li>
            <Link to="/Conduct" className="d-block text-light p-3 border-0">
            <i className="icon ion-md-people lead mr-2"></i> Conductores
          </Link>
            </li>
            <li>
            <Link to="/Shipping" className="d-block text-light p-3 border-0">
            <i className="icon ion-md-paper-plane lead mr-2"></i>Envíos
          </Link>
            </li>
            <li>
                <a href="#reporteSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Reportes</a>
                <ul className="collapse list-unstyled" id="pageSubmenu">
                    <li>
                    <Link to="/Report" className="d-block text-light p-3 border-0">
                      <i className="icon ion-md-stats lead mr-2"></i> Historico de Vehículos
                    </Link>
                    </li>
                    <li>
                      <Link to="/Report" className="d-block text-light p-3 border-0">
                        <i className="icon ion-md-stats lead mr-2"></i> Historico de Conductores
                      </Link>
                    </li>
                    <li>
                        <Link to="/Report" className="d-block text-light p-3 border-0">
                          <i className="icon ion-md-stats lead mr-2"></i> Historico de Envíos
                        </Link>
                    </li>
                </ul>
            </li>
          </ul> */}
        </div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <div className="form-row ">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link to="/Main" className="nav-link iconNotifications">
                    <i className="icon ion-md-notifications lead mr-2 notificaciones"></i>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link text-dark dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      src={user}
                      className="img-fluid rounded-circle avatar mr-2"
                      alt="fotoUser"
                    />
                    Administrador
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdown"
                  >
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Cerrar sesión
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Content;
