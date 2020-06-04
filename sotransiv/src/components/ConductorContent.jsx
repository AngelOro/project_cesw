import React, { Component } from "react";
import "../styles/VehicleContent.css";
import { link, Link } from "react-router-dom";
import Axios from "axios";

class ConductorContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: {},
      dataVehicles: {},
    };
  }

  _fetchData() {
    Axios.get("https://conductors.now.sh/conductors")
      .then((res) => {
        const conductorsData = res.data;
        console.log(conductorsData);
        this.setState({
          loading: false,
          data: conductorsData,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error: isNaN,
        });
      });
  }

  componentDidMount() {
    this._fetchData();
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="App">
          <h1>Cargando...</h1>
        </div>
      );
    }

    if (this.state.error !== null) {
      return <h1>Error</h1>;
    }

    return (
      <div className="container">
        <h3 className="tittle">Conductores</h3>
        <div className="row" id="row-container">
          <div className="col-md-6">
            <div className="form-row" id="form-input">
              <input className="input-search" type="text" placeholder="Buscar" />
              <a className="nav-link" href="#">
              <i className="icon ion-md-search lead mr-2"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 btn-new">
            <Link to="/RegisterConduct">
              <button
                type="button"
                className="btn-3 btn-primary "
                id="btn-search"
              >
                + Nuevo
              </button>
            </Link>
          </div>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Identificacion</th>
              <th scope="col" >Nombre</th>
              <th scope="col">Telefono</th>
              <th scope="col">Vehiculo Asignado</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>

          {this.state.data.map((character) => (
            <tbody>
              <tr>
                <td>{character.identificacion}</td>
                <td>{character.nombre + ' ' + character.primer_apellido + ' ' + character.segundo_apellido}</td>
                <td>{character.telefono}</td>
                <td></td>
                <td>
                  <i className="fas fa-edit" id="icon-edit"></i>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

export default ConductorContent;