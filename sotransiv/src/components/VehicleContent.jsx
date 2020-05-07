import React, { Component } from "react";
import "../styles/VehicleContent.css";
//import { link, Link } from "react-router-dom";
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
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">placa</th>
                <th scope="col">modelo</th>
                <th scope="col">matricula</th>
                <th scope="col">marca</th>
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
                <td><i className="fas fa-edit" id="icon-edit"></i></td>
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
