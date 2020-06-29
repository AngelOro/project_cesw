import React, { Component } from "react";
import "../styles/VehicleContent.css";
import { link, Link } from "react-router-dom";
import Axios from "axios";
import Modal from "react-awesome-modal";
import "../styles/FormRegister.css";

class ConductorContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: {},
      dataBackup: {},
      visible: false,
      textoBuscar: "",
    };
  }

  openModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  _fetchData() {
    Axios.get("http://192.168.1.2:3001/Conduct/")
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          console.log(data);
          this.setState({
            loading: false,
            data: data,
            dataBackup: data,
          });
        } else {
          alert("Sorry");
        }
      })
      .catch((error) => {
        alert("Error" + error);
        this.setState({
          loading: false,
          error: isNaN,
        });
      });
  }

  componentDidMount() {
    this._fetchData();
  }

  filter(event) {
    var text = event.target.value;
    const data = this.state.dataBackup;
    const newData = data.filter(function (item) {
      const itemIdentificacion = item.identificacion;
      const itemNombre = item.nombre.toUpperCase();
      const itemTel = item.telefono;
      const campo = itemIdentificacion + " " + itemNombre + " " + itemTel;
      const textData = text.toUpperCase();
      return campo.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
      textoBuscar: text,
    });
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
          <div className="col-md-10">
            <div className="form-row" id="form-input">
              <input
                className="input-search"
                type="text"
                placeholder=" Buscar"
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
          <Modal
            visible={this.state.visible}
            width="800"
            height="630"
            effect="fadeInUp"
            onClickAway={() => this.closeModal()}
          >
            <div>
              <div className="form-vehiculo">
                <h3 className="form-title">Registrar conductor</h3>
                <form className="formConduct">
                  <div className="form-row">
                    <div className="col-md-5 leftSeparator">
                      <div className="form-group">
                        <label>Identificacion</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Primer apellido</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Telefono</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Licencia de conduccion</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label class="container">
                          <input type="checkbox" /> Acepto de terminos y
                          condiciones
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </div>

                    <div className="col-md-5 leftSeparator">
                      <div className="form-group">
                        <label>Nombre</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Segundo apellido</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Vehiculo asignado</label>
                        <select
                          className="form-control"
                          name="vehiculo_asignado"
                        ></select>
                      </div>
                      <div className="form-group">
                        <label>Fecha de nacimiento</label>
                        <input className="form-control" type="date" />
                      </div>
                    </div>
                  </div>
                  <div className="form-row btn-action conduct">
                    <div className="form-group col-md-3">
                      <button
                        type="submit"
                        className="btn-primary btn-formvehicle"
                      >
                        Registrar
                      </button>
                    </div>
                    <div className="form-group col-md-3">
                      <button
                        type="button"
                        className="btn-primary btn-formvehicle"
                        onClick={() => this.closeModal()}
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Modal>
        </section>
        <table className="table table-striped">
          <thead className="head-table">
            <tr>
              <th scope="col">Identificacion</th>
              <th scope="col">Nombre</th>
              <th scope="col">Primer apellido</th>
              <th scope="col">Segundo apellido</th>
              <th scope="col">Telefono</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody className="body-table">
              {this.loadFillData()}
          </tbody>
        </table>
      </div>
    );
  }
  loadFillData(){
    return this.state.data.map((data)=>{
      return(
          <tr className="tr-table">
            <td>{data.identificacion}</td>
            <td>{data.nombre}</td>
            <td>{data.primer_apellido}</td>
            <td>{data.segundo_apellido}</td>
            <td>{data.telefono_contacto}</td>
            <td>editar</td>
          </tr>
      )
    })
}
}

export default ConductorContent;
