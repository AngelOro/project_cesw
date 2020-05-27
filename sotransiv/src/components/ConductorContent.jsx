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
          <div className="col-md-7">
            <div className="form-row" id="form-input">
              <input type="text" placeholder="Buscar placa" />
              <a className="nav-link" href="#">
                <svg
                  className="bi bi-search"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="col-md-5">
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
              <th scope="col">Nombre</th>
              <th scope="col">Primer apellido</th>
              <th scope="col">Segundo apellido</th>
              <th scope="col">Telefono</th>
              <th scope="col">Vehiculo Asignado</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>

          {this.state.data.map((character) => (
            <tbody>
              <tr>
                <td>{character.identificacion}</td>
                <td>{character.nombre}</td>
                <td>{character.primer_apellido}</td>
                <td>{character.segundo_apellido}</td>
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