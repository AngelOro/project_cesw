
import React, { Component } from "react";
import foto from "../images/icono.png";
//import "../styles/FormRegister.css";
import Axios from "axios";
import { link, Link } from "react-router-dom";


class FormShipping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: {},
      placa: "",
      modelo: "",
      marca: "",
      tipo_vehiculo: "",
      capacidad: "",
      r_trailer: "",
      fecha_soat: "",
      fecha_poliza: "",
      fecha_poliza_extra: "",
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

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    Axios.post("https://api-sotransiv-8xli76wpt.now.sh/vehicles", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error: isNaN,
        });
      });
  };

  render() {
    const {
      placa,
      modelo,
      marca,
      tipo_vehiculo,
      capacidad,
      r_trailer,
      fecha_soat,
      fecha_poliza,
      fecha_poliza_extra,
    } = this.state;
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
        <div clasName="row">
          <h3 className="title">Registar Envio</h3>

        </div>
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCodEnvio">Codigo de Envio</label>
              <input type="text" class="form-control" id="inputCodEnvio" placeholder="ek123456">
              </input>
            </div>
            <div class="form-group col-md-6">
              <label for="inputValorEnvio">Valor Envio</label>
              <input type="number" class="form-control" id="inputValorEnvio" placeholder="$ 45000">
              </input>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputNombreProducto">Nombre Producto</label>
              <input type="text" class="form-control" id="inputNombreProducto" placeholder="Cemento,Ladrillo">
              </input>
            </div>
            <div class="form-group col-md-6">
              <label for="inputVehiculoAsignado">Vehiculo Asignado</label>
              <select id="inputVehiculoAsignado" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>

          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputReferencia">Referencia</label>
              <input type="number" class="form-control" id="inputReferencia" >
              </input>
            </div>
            <div class="form-group col-md-6">
              <label for="inputCantidad">Cantidad</label>
              <input type="text" class="form-control" id="inputCantidad" placeholder="100 tn">
              </input>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCantidadLote">Cantidad Lote</label>
              <input type="number" class="form-control" id="inputCantidadLote" >
              </input>
            </div>
            <div class="form-group col-md-6">
              <label for="inputCantidad">Cantidad</label>
              <input type="text" class="form-control" id="inputCantidad" placeholder="100 tn">
              </input>
            </div>
          </div>


          <div class="form-row">

            <div class="form-group col-md-3">
              <label for="inputState">Ciudad Origen</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>

            <div class="form-group col-md-3">
              <label for="inputState">Ciudad Destino</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>

            <div class="form-group col-md-3">
              <label for="inputState">Fecha Inicio</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>

            <div class="form-group col-md-3">
              <label for="inputState">Fecha Fin</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>

          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck">
              </input>
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          
          <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
      </div>
    );
  }
}

export default FormShipping;
