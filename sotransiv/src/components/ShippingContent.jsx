import React, { Component } from "react";
import "../styles/ShippingContent.css";
import { link, Link } from "react-router-dom";
import Axios from "axios";
import Modal from 'react-awesome-modal';


class ShippingContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      shippingData: [],
      visible: false,
      shippingBackup: {},
      textBuscar: "",
      id_envio: "",
      fecha_inicio: "",
      fecha_fin: "",
      placa: "",
      valor_envio: "",
      ciudad_origen: "",
      ciudad_destino: "",
      estado: "",

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
    Axios.get("http://192.168.1.2:3001/Shipping/")
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          console.log(data);
          this.setState({
            loading: false,
            shippingData: data,
            shippingBackup: data,
          });
        } else {
          alert("sorry");
        }
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error: isNaN,
        });
      });
  }


  filter(event) {
    var text = event.target.value;
    const data = this.state.shippingBackup;
    const newData = data.filter(function (item) {
      const itemData = item.id_envio;
      const itemDataDescp = item.ciudad_destino.toUpperCase();
      const campo = itemData + " " + itemDataDescp;
      const textData = text.toUpperCase();
      return campo.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
      textBuscar: text,
    });
  }

  componentDidMount() {
    this._fetchData();
  }

  render() {
    const {
      id_envio,
      fecha_inicio,
      fecha_fin,
      id_vehiculo,
      id_origen,
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
        <h3 className="tittle">Envios</h3>
        <div className="row" id="row-container">
          <div className="col-md-10">
            <div className="form-row" id="form-input">
              <input
                className="input-search"
                type="text"
                placeholder="Buscar" 
                value={this.state.text} 
                onChange={(text) => this.filter(text)}
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

        <table className="table table-striped" id="tableContent" >
          <thead className="head-table">
            <tr>
              <th scope="col">Codigo Envio</th>
              <th scope="col">Feach Inicio</th>
              <th scope="col">Valor Envio</th>
              <th scope="col">Vehiculo Asignado</th>
              <th scope="col">Ciudad Origen</th>
              <th scope="col">Ciudad Destino</th>
              <th scope="col">Estado Envio</th>
            </tr>
          </thead>
          <tbody className="body-table">
            {this.state.shippingData.map((data) => (
              <tr className="tr-table">
                <td scope="col">{data.id_envio}</td>
                <td>{data.fecha_inicio}</td>
                <td>{data.valor_envio}</td>
                <td>{data.placa}</td>
                <td>{data.ciudad_origen}</td>
                <td>{data.ciudad_destino}</td>
                <td>{data.estado}</td>
                <td>editar</td>
              </tr>

            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ShippingContent;
