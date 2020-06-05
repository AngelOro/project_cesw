import React, { Component } from "react";
//import "../styles/VehicleContent.css";
import { link, Link } from "react-router-dom";
import Axios from "axios";
import Modal from 'react-awesome-modal';


class ShippingContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: {},
      visible: false
    };
  }


  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
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
        <h3 className="tittle">Envios</h3>
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

            <button
              type="button"
              className="btn-3 btn-primary "
              id="btn-search"
              value="Open"
              onClick={() => this.openModal()}
            >
              + Nuevo
              </button>

          </div>
        </div>
        <section>
          <Modal visible={this.state.visible} width="950" height="700" effect="fadeInUp" onClickAway={() => this.closeModal()}>
            <div>
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
              <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
            </div>
          </Modal>
        </section>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Codigo Envio</th>
              <th scope="col">Producto</th>
              <th scope="col">Vehiculo Asignado</th>
              <th scope="col">Ciudad Origen</th>
              <th scope="col">Ciudad Destino</th>
              <th scope="col">Estado Envio</th>
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
                <td></td>
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
export default ShippingContent;
