import React, { Component } from "react";
//import "../styles/VehicleContent.css";
import { link, Link } from "react-router-dom";
import Axios from "axios";


class ShippingContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: {},
      dataBackup: {},
      textBuscar: "",
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
          dataBackup: vehiclesData,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error: isNaN,
        });
      });
  }
  
  filter(event){
    var text = event.target.value
    const data = this.state.dataBackup
    const newData = data.filter(function(item){
        const itemData = item.placa.toUpperCase()
        const itemDataDescp = item.marca.toUpperCase()
        const campo = itemData+" "+itemDataDescp 
        const textData = text.toUpperCase()
        return campo.indexOf(textData) > -1
    })
    this.setState({
        data: newData,
        textBuscar: text,
    })
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
        <h3 className="tittle">Envios</h3>
        <div className="row" id="row-container">
          <div className="col-md-10">
            <div className="form-row" id="form-input">
            <input
                className="input-search"
                type="text"
                placeholder="Buscar" value={this.state.text} onChange={(text) => this.filter(text)}
              />
              <a className="nav-link" href="#">
              <i className="icon ion-md-search lead mr-2"></i>
              </a>
            </div>
          </div>
          <div className="col-md-2 btn-new">
            <Link to="/RegisterShipping">
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
          <thead className="head-table">
            <tr>
              <th scope="col">Codigo Envio</th>
              <th scope="col">Vehiculo Asignado</th>
              <th scope="col">Ciudad Origen</th>
              <th scope="col">Ciudad Destino</th>
              <th scope="col">Estado Envio</th>
            </tr>
          </thead>
          <tbody className="body-table">
            {this.state.data.map((character) => (
              <tr className="tr-table">
                <td>{character.modelo}</td>
                <td>{character.placa}</td>
                <td>{character.marca}</td>
                <td>{character.marca}</td>
                <td>En proceso</td>
              </tr>
          ))}
          </tbody>
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
export default ShippingContent;
