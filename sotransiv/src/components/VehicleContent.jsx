import React, { Component } from "react";
import "../styles/VehicleContent.css";
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
      typeVehicle:[],
      marcaVehicle: [],
      visible: false,
      vehiculoBackup: {},
      textBuscar: "",
      placa: "",
      modelo: "",
      marca: "",
      matricula: "",
      tipo_vehiculo: "",
      capacidad: "",
      r_trailer: "",
      fecha_soat: "",
      fecha_poliza: "",
      fecha_poliza_extra: "",
      select_type: 0,
      select_marca: 0,
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
// Metodo que trae la información de cada vehículo registrado
  _fetchData() {
<<<<<<< HEAD
    Axios.get("http://192.168.56.1:3001/Vehicle/")
=======
    Axios.get("https://sotransiv-app.herokuapp.com/Vehicle/")
>>>>>>> 01043b4a47ea27f32276ffad7891d912225d3d5a
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

  // Metodo que trae los tipos de vehículos almacenados en la base de datos
  _fetchTypeVehicle(){
    Axios.get("https://sotransiv-app.herokuapp.com/Vehicle/typeVehicle")
    .then((res) => {
      if (res.data.success) {
        const data = res.data.data;
        console.log(data);
        this.setState({
          loading: false,
          typeVehicle: data,
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

   // Metodo que trae los tipos de vehículos almacenados en la base de datos
   _fetchMarcaVehicle(){
    Axios.get("https://sotransiv-app.herokuapp.com/Vehicle/marcaVehicle")
    .then((res) => {
      if (res.data.success) {
        const data = res.data.data;
        console.log(data);
        this.setState({
          loading: false,
          marcaVehicle: data,
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
// Función que usa para filtrar los vehículos
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
    this._fetchTypeVehicle();
    this._fetchMarcaVehicle();
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

<<<<<<< HEAD
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    Axios.post("https://192.168.56.1:3001/Vehicle", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((errorForm) => {
        this.setState({
          loadingForm: false,
          errorForm: isNaN,
        });
      });
=======
  // submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log(this.state);
  //   Axios.post("http://192.168.0.20:3001/Vehicle/newVehicle", this.state)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       this.setState({
  //         loading: false,
  //         error: isNaN,
  //       });
  //     });
  // };

  submitHandler () {
    const baseUrl = "https://sotransiv-app.herokuapp.com/Vehicle/newVehicle"

            const datapost = {
                placa: this.state.placa,
                matricula: this.state.matricula,
                r_trailer: this.state.r_trailer,
                capacidad: this.state.capacidad,
                fecha_soat: this.state.fecha_soat,
                fecha_poliza: this.state.fecha_poliza,
                modelo: this.state.modelo,
                id_marca: this.state.select_marca,
                id_tipo: this.state.select_type 
            }
            console.log(datapost);
            Axios.post(baseUrl, datapost)
                .then(response => {
                    if (response.data.success === true) {
                        alert(response.data.message)
                    } else {
                        alert(response.data.message)
                    }
                }).catch(error => {
                    alert("Error 34 " + error)
                })
>>>>>>> 01043b4a47ea27f32276ffad7891d912225d3d5a
  };


  // sendSave(){

  //   if (this.state.selectRole==0) {
  //     alert("Seleccione el tipo de Role")
  //   }
  //   else if (this.state.campPhone=="") {
  //      alert("Digite el campo de telefono")
  //   }
  //   else if (this.state.campName=="") {
  //      alert("Digite el campo de Nombre")
  //   }
  //   else if (this.state.campEmail=="") {
  //      alert("Digite el campo de email")
  //   }
  //   else if (this.state.campAddress=="") {
  //      alert("Digite el campo de Direccion")
  //   }
  //   else {
 
  //     const baseUrl = "http://localhost:3000/employee/create"
 
  //     const datapost = {
  //       name : this.state.campName,
  //       email : this.state.campEmail,
  //       phone : this.state.campPhone,
  //       address : this.state.campAddress,
  //       role  : this.state.selectRole
  //     }
 
  //     axios.post(baseUrl,datapost)
  //     .then(response=>{
  //       if (response.data.success===true) {
  //         alert(response.data.message)
  //       }
  //       else {
  //         alert(response.data.message)
  //       }
  //     }).catch(error=>{
  //       alert("Error 34 "+error)
  //     })
 
  //   }
 
  // }

  render() {
    const {
      placa,
      matricula,
      r_trailer,
      capacidad,
      fecha_soat,
      fecha_poliza,
      modelo,
      select_marca,
      select_type,
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
              <form>
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
                      <select
                        className="form-control"
                        name="select_marca"
                        value={select_marca}
                        onChange={this.changeHandler}
                      >
                        {this.state.marcaVehicle.map((vehicle) => (
                          <option value={vehicle.id_marca}>{vehicle.marcaVehiculo}</option>
                        ))}
                      </select>
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
                        name="select_type"
                        value={select_type}
                        onChange={ this.changeHandler}
                      >
                        {this.state.typeVehicle.map((vehicle) => (
                          <option value={vehicle.id_tipo}>{vehicle.tipoVehiculo}</option>
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
                  <div className="form-group">
                      <label>Matrícula</label>
                      <input
                        type="text"
                        className="form-control"
                        name="matricula"
                        value={matricula}
                        onChange={this.changeHandler}
                      />
                    </div>
                  {/* <div className="form-group col-md-4">
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
                  </div> */}
                </div>
                <div className="form-row btn-action">
                  <div className="form-group col-md-3">
                    <button
                      type="submit"
                      className="btn-primary btn-formvehicle"
                      onClick={() => this.submitHandler()}
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
