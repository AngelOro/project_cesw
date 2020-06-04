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
        <h3 className="tittle">Vehículos</h3>
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

        <table className="table table-striped" id="tableContent">
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
      </div>
    );
  }
}
export default VehicleContent;
