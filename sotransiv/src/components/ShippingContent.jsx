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
      visible: false,
      dataBackup: {},
      textBuscar: "",

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

                  <button type="submit" class="btn btn-primary">Registrar</button>
                  <button type="submit" class="btn btn-primary" href="javascript:void(0);" onClick={() => this.closeModal()}>Cerrar</button>
                </form>
              </div>
              
            </div>
          </Modal>
        </section>

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
