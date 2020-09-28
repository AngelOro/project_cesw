import React, { Component } from "react";
import "../styles/VehicleContent.css";
import Axios from "axios";
import Modal from "react-awesome-modal";
import "../styles/FormRegister.css";
import Swal from 'sweetalert2/dist/sweetalert2.js';

class ConductorContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: [],
      dataBackup: {},
      vehicleAvailable: [],
      ConductEdit:[],
      visible: false,
      modalPlaca: false,
      textoBuscar: "",
      identificacion: "",
      nombre: "",
      primer_apellido: "",
      segundo_apellido: "",
      telefono_contacto: "",
      fecha_nacimiento: "",
      licencia_conduccion: "",
      select_placa: 0,
      identificacionAsg: "",
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
  openModalPlaca(identificacion) {
    this.setState({
      modalPlaca: true,
      identificacionAsg: identificacion,
    });

  }
  closeModal() {
    this.setState({
      visible: false,
    });
  }
  closeModalPlaca() {
    this.setState({
      modalPlaca: false,
    });
  }

  onDeleteConduct(identificacion){
    Swal.fire({
      title: 'Eliminar Conductor',
      text: '¿Está seguro de eliminar Conductor?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.sendDelete(identificacion)
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'No se eliminó Conductor',
          'error'
        )
      }
    })
  };

  sendDelete(identificacion)
  {
    const baseUrl = "http://localhost:3000/Conduct/deleteConduct"   
    Axios.post(baseUrl,{
      identificacion:identificacion
    })
    .then(response =>{
      if (response.data.success) {
        Swal.fire(
          'Eliminado',
          'El conductor fue eliminado',
          'success'
        )
        this._fetchData();
      }
    })
    .catch ( error => {
      alert("Error 325 ")
    })
  };

  sendUpdate(){
    //  get parameter id
    let identificacion = this.state.identificacion;
    // url de backend
    const baseUrl = "http://localhost:3000/Conduct/ConductEdit/"+identificacion
    // parametros de datos post
    const datapost = {
      identificacion : this.state.identificacion,
      nombre : this.state.nombre,
      primer_apellido : this.state.primer_apellido,
      segundo_apellido : this.state.segundo_apellido,
      telefono_contacto  : this.state.telefono_contacto,
      fecha_nacimiento : this.state.fecha_nacimiento,
      licencia_conduccion: this.state.licencia_conduccion,
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

  openModalEditarConductor(identificacion) {
    this.setState({
      visible: true,
      visible_actualizar: false,
      visible_registrar:true,
    })
    //id_vehiculo = this.props.match.params.id_vehiculo;
    const url = "http://localhost:3000/Conduct/editConduct/" + identificacion
    Axios.get(url)
    .then(res=>{
      if (res.data.success) {
        const data = res.data.data[0]
        console.log(data);
        this.setState({
          ConductEdit:data,
          identificacion: data.identificacion,
          nombre:data.nombre,
          primer_apellido:data.primer_apellido,
          segundo_apellido:data.segundo_apellido,
          telefono_contacto:data.telefono_contacto,
          fecha_nacimiento:data.fecha_nacimiento,
          licencia_conduccion: data.licencia_conduccion,
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
  };

  sendSave() {
    if (this.state.identificacion == "") {
      alert("Digite el campo de identificacion");
    } else if (this.state.nombre == "") {
      alert("Digite el campo de Nombre");
    } else if (this.state.primer_apellido == "") {
      alert("Digite el campo de primer apellido");
    } else if (this.state.telefono_contacto == "") {
      alert("Digite el campo de telefono contacto");
    } else if (this.state.fecha_nacimiento == "") {
      alert("Digite el campo fecha de nacimiento");
    } else if (this.state.licencia_conduccion == "") {
      alert("Digite el campo licencia de conduccion");
    } else {
      const baseUrl = "http://localhost:3001/Conduct/create";

      const datapost = {
        identificacion: this.state.identificacion,
        nombre: this.state.nombre,
        primer_apellido: this.state.primer_apellido,
        segundo_apellido: this.state.segundo_apellido,
        telefono_contacto: this.state.telefono_contacto,
        fecha_nacimiento: this.state.fecha_nacimiento,
        licencia_conduccion: this.state.licencia_conduccion,
        select_placa: this.state.select_placa,
      };
      console.log(datapost);
      Axios.post(baseUrl, datapost)
        .then((response) => {
          if ((response.data.success = true)) {
            alert(response.data.message);
          } else {
            alert(response.data.message);
          }
        })
        .catch((error) => {
          alert("Error 34 " + error);
        });
    }
  }
  
  _fetchData() {
    //Axios.get("https://sotransiv-app.herokuapp.com/Conduct")
    Axios.get("http://localhost:3001/Conduct")
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

  _fetchVehicleAvailable() {
    //Axios.get("https://sotransiv-app.herokuapp.com/Vehicle/typeVehicle")
    Axios.get("http://localhost:3001/Vehicle/vehicleAvailable")
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          console.log(data);
          this.setState({
            loading: false,
            vehicleAvailable: data,
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
    this._fetchVehicleAvailable();
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

  assignVehicle() {
    //const baseUrl = "https://sotransiv-app.herokuapp.com/Vehicle/newVehicle"
    const baseUrl = "http://localhost:3001/Conduct/assignVehicle"
            const datapost = {
                id_vehiculo: this.state.select_placa,
                id_conductor: this.state.identificacionAsg
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
  };

  render() {
    const {
      identificacion,
      nombre,
      primer_apellido,
      segundo_apellido,
      telefono_contacto,
      fecha_nacimiento,
      licencia_conduccion,
      select_placa,
      identificacionAsg,
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
                        <input
                          type="text"
                          className="form-control"
                          value={this.state.identificacion}
                          onChange={(value) =>
                            this.setState({
                              identificacion: value.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label>Primer apellido</label>
                        <input
                          type="text"
                          className="form-control"
                          value={this.state.primer_apellido}
                          onChange={(value) =>
                            this.setState({
                              primer_apellido: value.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label>Telefono</label>
                        <input
                          type="text"
                          className="form-control"
                          value={this.state.telefono_contacto}
                          onChange={(value) =>
                            this.setState({
                              telefono_contacto: value.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label>Licencia de conduccion</label>
                        <input
                          type="text"
                          className="form-control"
                          value={this.state.licencia_conduccion}
                          onChange={(value) =>
                            this.setState({
                              licencia_conduccion: value.target.value,
                            })
                          }
                        />
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
                        <input
                          type="text"
                          className="form-control"
                          value={this.state.nombre}
                          onChange={(value) =>
                            this.setState({ nombre: value.target.value })
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label>Segundo apellido</label>
                        <input
                          type="text"
                          className="form-control"
                          value={this.state.segundo_apellido}
                          onChange={(value) =>
                            this.setState({
                              segundo_apellido: value.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="form-group">
                        <label>Fecha de nacimiento</label>
                        <input
                          className="form-control"
                          type="date"
                          value={this.state.fecha_nacimiento}
                          onChange={(value) =>
                            this.setState({
                              fecha_nacimiento: value.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-row btn-action conduct">
                    <div className="form-group col-md-3">
                      <button
                        type="submit"
                        className="btn-primary btn-formvehicle"
                        onClick={() => this.sendSave()}
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
            </div>
          </Modal>
        </section>
        {/* <section>
          <Modal
            visible={this.state.modalPlaca}
            width="390"
            height="450"
            effect="fadeInUp"
            onClickAway={() => this.closeModalPlaca()}
          >
            
              <h3 className="form-title">Asignar Vehículo</h3>
              <form>
                <div className="form-group" id="modalPlaca">
                  <label id="labelPlaca">Identificacion</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.identificacionAsg}
                    onChange={(value) =>
                      this.setState({
                        identificacionAsg: value.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group" id="modalPlaca">
                  <label id="labelPlaca">Seleccionar Vehículo</label>
                  <select
                    className="form-control"
                    name="select_placa"
                    value={this.state.select_placa}
                    onChange={(value) =>
                      this.setState({
                        select_placa: value.target.value,
                      })
                    }
                  >
                    {this.state.vehicleAvailable.map((vehicle) => (
                      <option value={vehicle.id_vehiculo}>
                        {vehicle.placa}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-row btn-action conduct">
                  <div className="form-group col-md-3">
                    <button
                      type="submit"
                      className="btn-primary btn-formvehicle"
                      onClick={() => this.assignVehicle()}
                    >
                      Asignar
                    </button>
                  </div>
                  <div className="form-group col-md-3">
                    <button
                      type="button"
                      className="btn-primary btn-formvehicle"
                      onClick={() => this.closeModalPlaca()}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
                </form>
          </Modal>
        </section>*/}
        <table className="table table-striped"> 
          <thead className="head-table">
            <tr>
              <th scope="col">Identificacion</th>
              <th scope="col">Nombre</th>
              <th scope="col">Primer apellido</th>
              <th scope="col">Segundo apellido</th>
              <th scope="col">Telefono</th>
              <th scope="col" colSpan="3">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="body-table">
            {this.state.data.map((data) => (
              <tr className="tr_conduct">
                <td>{data.identificacion}</td>
                <td>{data.nombre}</td>
                <td>{data.primer_apellido}</td>
                <td>{data.segundo_apellido}</td>
                <td>{data.telefono_contacto}</td>
                <td id="td-actions">
                  {/* <button
                    type="button"
                    className="btn-3 btn-primary "
                    id="btn-asignar"
                    value="Open"
                    onClick={() => this.openModalPlaca(data.identificacion)}
                  >
                    Asignar Vehículo
                  </button> */}

                  <button
                    type="button"
                    className="btn-3 btn-primary "
                    id="btn-asignar"
                    value="Open"
                    onClick={() => this.openModalEditarConductor(data.identificacion)}
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
                    onClick={()=>this.onDeleteConduct(data.identificacion)}
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

export default ConductorContent;
