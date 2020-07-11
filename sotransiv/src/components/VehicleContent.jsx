import React, { Component } from "react";
import "../styles/VehicleContent.css";
import { link, Link } from "react-router-dom";
import Axios from "axios";
import Modal from "react-awesome-modal";
import foto from "../images/icono.png";

class VehicleContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      vehicleData: [],
      visible: false,
      vehiculoBackup: {},
      textBuscar: "",
      loadingForm: true,
      errorForm: null,
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
    Axios.get("http://192.168.56.1:3001/Vehicle/")
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          console.log(data);
          this.setState({
            loading: false,
            vehicleData: data,
            vehiculoBackup: data,
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

  _fetchdataForm() {
    Axios.get("https://api-sotransiv-8xli76wpt.now.sh/vehicles")
      .then((res) => {
        const vehiclesdataForm = res.dataForm;
        console.log(vehiclesdataForm);
        this.setState({
          loadingForm: false,
          dataForm: vehiclesdataForm,
        });
      })
      .catch((errorForm) => {
        this.setState({
          loadingForm: false,
          errorForm: isNaN,
        });
      });
  }

  filter(event) {
    var text = event.target.value;
    const data = this.state.vehiculoBackup;
    const newData = data.filter(function (item) {
      const itemData = item.placa.toUpperCase();
      const itemDataDescp = item.marca.toUpperCase();
      const campo = itemData + " " + itemDataDescp;
      const textData = text.toUpperCase();
      return campo.indexOf(textData) > -1;
    });
    this.setState({
      vehicleData: newData,
      textBuscar: text,
    });
  }
  componentDidMount() {
    this._fetchData();
    this._fetchdataForm();
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
      .catch((errorForm) => {
        this.setState({
          loadingForm: false,
          errorForm: isNaN,
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

    if (this.state.loadingForm) {
      return (
        <div className="App">
          <h1>Cargando...</h1>
        </div>
      );
    }

    if (this.state.errorForm !== null) {
      return <h1>errorForm</h1>;
    }

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
            width="950"
            height="600"
            effect="fadeInUp"
            onClickAway={() => this.closeModal()}
          >
            <div className="form-vehiculo">
              <h3 className="form-title">Registrar Vehículo</h3>
              <form onSubmit={this.submitHandler}>
                <div className="form-row">
                  <div className="col-md-3">
                    <div className="col-12 nopadding">
                      <div className="profileContainer">
                        <img
                          src={foto}
                          id="canvFoto"
                          width="205"
                          height="203"
                          alt=""
                          className="img-thumbnail image"
                        />
                      </div>
                      <button type="file" className="btn-primary btn-register">
                        Subir Imagen
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4 leftSeparator">
                    <div className="form-group">
                      <label>Placa</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputEmail4"
                        name="placa"
                        value={placa}
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label>Marca</label>
                      <input
                        type="text"
                        className="form-control"
                        name="marca"
                        value={marca}
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label>Capacidad</label>
                      <input
                        type="text"
                        className="form-control"
                        name="capacidad"
                        value={capacidad}
                        onChange={this.changeHandler}
                      />
                    </div>
                  </div>{" "}
                  <div className="col-md-4 leftSeparator">
                    <div className="form-group">
                      <label>Modelo</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputEmail4"
                        name="modelo"
                        value={modelo}
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label>Tipo Vehículo</label>
                      <select
                        className="form-control"
                        name="tipo_vehiculo"
                        value={tipo_vehiculo}
                        onChange={this.changeHandler}
                      >
                        {this.state.vehicleData.map((vehicle) => (
                          <option>{vehicle.tipoVehiculo}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label>R-Trailer</label>
                      <input
                        type="text"
                        className="form-control"
                        name="r_trailer"
                        value={r_trailer}
                        onChange={this.changeHandler}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label className="customTittleLabel">Fecha Ven. SOAT</label>
                    <input
                      className="form-control"
                      type="date"
                      name="fecha_soat"
                      value={fecha_soat}
                      onChange={this.changeHandler}
                    />
                    <div className="invalid-feedback">
                      El código es obligatorio
                    </div>
                  </div>
                  <div className="form-group col-md-4">
                    <label className="customTittleLabel">
                      Fecha Ven. Poliza Contractual
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      name="fecha_poliza"
                      value={fecha_poliza}
                      onChange={this.changeHandler}
                    />
                    <div className="invalid-feedback">
                      El código del terminal es obligatorio
                    </div>
                  </div>
                  <div className="form-group col-md-4">
                    <label className="customTittleLabel">
                      Fecha Poliza Extracontractual
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      name="fecha_poliza_extra"
                      value={fecha_poliza_extra}
                      onChange={this.changeHandler}
                    />
                    <div className="invalid-feedback">
                      La fecha de nacimiento es obligatoria
                    </div>
                  </div>
                </div>
                <div className="form-row btn-action">
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
          </Modal>
        </section>

        <table className="table table-striped" id="tableContent">
          <thead className="head-table">
            <tr>
              <th scope="col">Placa</th>
              <th scope="col">Modelo</th>
              <th scope="col">Matricula</th>
              <th scope="col"> Marca</th>
              <th scope="col"> Acciones</th>
            </tr>
          </thead>
          <tbody className="body-table">
            {this.state.vehicleData.map((character) => (
              <tr className="tr-table">
                <td>{character.placa}</td>
                <td>{character.modelo}</td>
                <td>{character.matricula}</td>
                <td>{character.marca}</td>
                <td>
                  Editar
                  <i className="fas fa-edit" id="icon-edit"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default VehicleContent;
