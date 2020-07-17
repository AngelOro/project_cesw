import React, { Component } from "react";
import "../styles/VehicleContent.css";
import Axios from "axios";
import Modal from "react-awesome-modal";
import foto from "../images/icono.png";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

class VehicleContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      vehicleData: [],
      typeVehicle: [],
      marcaVehicle: [],
      vehicleEdit:[],
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
      visible_actualizar: true,
      visible_registrar:true,
    };
  }

  openModal() {
    this.setState({
      visible: true,
      visible_actualizar: true,
      visible_registrar:false,
    });
    
  }
  openModalEditar(id_vehiculo) {
    this.setState({
      visible: true,
      visible_actualizar: false,
      visible_registrar:true,
    })
    //id_vehiculo = this.props.match.params.id_vehiculo;
    const url = "http://localhost:3001/Vehicle/editVehicle/"+id_vehiculo
    Axios.get(url)
    .then(res=>{
      if (res.data.success) {
        const data = res.data.data[0]
        console.log(data);
        this.setState({
          vehicleEdit:data,
          placa: data.placa,
          matricula:data.matricula,
          r_trailer:data.r_trailer,
          capacidad:data.capacidad,
          fecha_soat:data.fecha_soat,
          fecha_poliza:data.fecha_poliza,
          modelo: data.modelo,
          select_marca: data.id_marca,
          select_type: data.id_tipo,
          id_vehiculo: data.id_vehiculo
        })
      }
      else {
        alert("Error web service")
      }
    })
    .catch(error=>{
      alert("Error server "+error)
    })
  }
  closeModal() {
    this.setState({
      visible: false,
    });
  }
  // Metodo que trae la información de cada vehículo registrado
  _fetchData() {
    //Axios.get("https://sotransiv-app.herokuapp.com/Vehicle/")
    Axios.get("http://localhost:3001/Vehicle/")

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
  _fetchTypeVehicle() {
    //Axios.get("https://sotransiv-app.herokuapp.com/Vehicle/typeVehicle")
    Axios.get("http://localhost:3001/Vehicle/typeVehicle")
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
  _fetchMarcaVehicle() {
    //Axios.get("https://sotransiv-app.herokuapp.com/Vehicle/marcaVehicle")
    Axios.get("http://localhost:3001/Vehicle/marcaVehicle")
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

  submitHandler() {
    //const baseUrl = "https://sotransiv-app.herokuapp.com/Vehicle/newVehicle"
    const baseUrl = "http://localhost:3001/Vehicle/newVehicle";
    const datapost = {
      placa: this.state.placa,
      matricula: this.state.matricula,
      r_trailer: this.state.r_trailer,
      capacidad: this.state.capacidad,
      fecha_soat: this.state.fecha_soat,
      fecha_poliza: this.state.fecha_poliza,
      modelo: this.state.modelo,
      id_marca: this.state.select_marca,
      id_tipo: this.state.select_type,
      id_estado: 1,
    };
    console.log(datapost);
    Axios.post(baseUrl, datapost)
      .then((response) => {
        if (response.data.success === true) {
          alert(response.data.message);
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        alert("Error 34 " + error);
      });
  }

  onDelete(id){
    Swal.fire({
      title: 'Eliminar Vehículo',
      text: '¿Está seguro de eliminar vehículo?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.sendDelete(id)
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'No se eliminó vehículo',
          'error'
        )
      }
    })
  }

  sendDelete(id_vehiculo)
  {
    // url de backend
    const baseUrl = "http://localhost:3001/Vehicle/deleteVehicle"    // parameter data post
    // network
    Axios.post(baseUrl,{
      id_vehiculo:id_vehiculo
    })
    .then(response =>{
      if (response.data.success) {
        Swal.fire(
          'Eliminado',
          'El vehículo fue eliminado',
          'success'
        )
        this._fetchData();
      }
    })
    .catch ( error => {
      alert("Error 325 ")
    })
  }


  sendUpdate(){
    //  get parameter id
    let id_vehiculo = this.state.id_vehiculo;
    console.log(id_vehiculo);
    // url de backend
    const baseUrl = "http://localhost:3001/Vehicle/vehicleEdit/"+id_vehiculo
    // parametros de datos post
    const datapost = {
      placa : this.state.placa,
      matricula : this.state.matricula,
      r_trailer : this.state.r_trailer,
      capacidad : this.state.capacidad,
      fecha_soat  : this.state.fecha_soat,
      fecha_poliza : this.state.fecha_poliza,
      modelo: this.state.modelo,
      id_marca: this.state.select_marca,
      id_tipo: this.state.select_type,
      id_estado: 1
    }

    Axios.put(baseUrl,datapost)
    .then(response=>{
      if (response.data.success===true) {
        alert(response.data.message)
      }
      else {
        alert("Error")
      }
    }).catch(error=>{
      alert("Error 34 "+error)
    })

   }

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
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Marca</label>
                      <select
                        className="form-control"
                        name="select_marca"
                        value={select_marca}
                        onChange={this.changeHandler}
                        required
                      >
                        <option value="0">Seleccionar</option>
                        {this.state.marcaVehicle.map((vehicle) => (
                          <option value={vehicle.id_marca}>
                            {vehicle.marcaVehiculo}
                          </option>
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
                        required
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
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Tipo Vehículo</label>
                      <select
                        className="form-control"
                        name="select_type"
                        value={select_type}
                        onChange={this.changeHandler}
                        required
                      >
                        <option value="0">Seleccionar</option>
                        {this.state.typeVehicle.map((vehicle) => (
                          <option value={vehicle.id_tipo}>
                            {vehicle.tipoVehiculo}
                          </option>
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
                      required
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
                      
                      required
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
                      required
                    />
                  </div>
                </div>
                <div className="form-row btn-action">
                  <div className="form-group col-md-3">
                    <button
                      type="submit"
                      className="btn-primary btn-formvehicle"
                      onClick={() => this.submitHandler()}
                      hidden={this.state.visible_registrar}
                       
                    >
                      Registrar
                    </button>
                  </div>
                  <div className="form-group col-md-3">
                    <button
                      type="submit"
                      className="btn-primary btn-formvehicle"
                      onClick={()=>this.sendUpdate()}
                      hidden={this.state.visible_actualizar}
                    >
                      Actualizar
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
              <th colSpan="2"> Acciones</th>
            </tr>
          </thead>
          <tbody className="body-table">
            {this.state.vehicleData.map((character) => (
              <tr className="tr-table">
                <td>{character.placa}</td>
                <td>{character.modelo}</td>
                <td>{character.matricula}</td>
                <td>{character.marca}</td>
                <td id="td-actions">
                  
                  <button
                    type="button"
                    className="btn-3 btn-primary "
                    id="btn-asignar"
                    value="Open"
                    onClick={() => this.openModalEditar(character.id_vehiculo)}
                  >
                    Editar
                  </button>
                </td>
                <td id="td-actions">
                  <button
                    type="button"
                    className="btn-3 btn-primary "
                    id="btn-eliminar"
                    value="Open"
                    onClick={()=>this.onDelete(character.id_vehiculo)}
                  >
                    Eliminar
                  </button>
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
