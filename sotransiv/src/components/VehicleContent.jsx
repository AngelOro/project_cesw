import React, { Component } from "react";
import "../styles/VehicleContent.css";
import { link, Link } from "react-router-dom";
import Axios from "axios";


class VehicleContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: {},
    };
  }

  _fetchData() {
    Axios.get("https://api-sotransiv-8xli76wpt.now.sh/vehicles")
      .then((res) => {
        const vehiclesData = res.data;
        console.log(vehiclesData);
        this.setState({
          loading: false,
          data: vehiclesData,
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
        <h3 className="tittle">Vehiculos</h3>
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
            <Link to="/RegisterVehicle">
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
              <th scope="col">Placa</th>
              <th scope="col">Modelo</th>
              <th scope="col">Matricula</th>
              <th scope="col">Marca</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
            {this.state.data.map((character) => (
              <tbody>
              <tr>
                <td>{character.placa}</td>
                <td>{character.modelo}</td>
                <td>{character.matricula}</td>
                <td>{character.marca}</td>
                <td>
                  <i className="fas fa-edit" id="icon-edit"></i>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        {/* <h1>Ciclo de vida </h1>
        <h2>Vehiculo Informacion</h2>
        <ul>
          {this.state.data.map((character) => (
            <li>{character.placa}</li>
          ))}
        </ul> */}
      </div>
    );
  }
}
export default VehicleContent;
