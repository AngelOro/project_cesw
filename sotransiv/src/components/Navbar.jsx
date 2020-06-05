import React, { Component } from "react";
import user from "../images/user.jpg";
import "../styles/Sidebar.css";
import { link, Link } from "react-router-dom";

function Navbar() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    //   <div className="form-row ">
    //     <div
    //       className="collapse navbar-collapse"
    //       id="navbarSupportedContent"
    //     >
    //       <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
    //         <li className="nav-item active">
    //           <Link to="/Main" className="nav-link iconNotifications">
    //             <i className="icon ion-md-notifications lead mr-2 notificaciones"></i>
    //           </Link>
    //         </li>
    //         <li className="nav-item dropdown">
    //           <a
    //             className="nav-link text-dark dropdown-toggle"
    //             href="#"
    //             id="navbarDropdown"
    //             role="button"
    //             data-toggle="dropdown"
    //             aria-haspopup="true"
    //             aria-expanded="false"
    //           >
    //             <img
    //               src={user}
    //               className="img-fluid rounded-circle avatar mr-2"
    //               alt="fotoUser"
    //             />
    //             Administrador
    //           </a>
    //           <div
    //             className="dropdown-menu dropdown-menu-right"
    //             aria-labelledby="navbarDropdown"
    //           >
    //             <div className="dropdown-divider"></div>
    //             <a className="dropdown-item" href="#">
    //               Cerrar sesión
    //             </a>
    //           </div>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="form-row ">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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

      {/* <nav className="navbar navbar-expand-lg justify-content-between" id="nav">
        <ul className="navbar-nav my-2 my-lg-0">
          <li className="nav-item active">
            <Link to="/Main">
              <a className="nav-link" href="#">
                <i className="icon ion-md-notifications lead mr-2"></i>
                Home
              </a>
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
      </nav> */}
    </nav>
  );
}

export default Navbar;
