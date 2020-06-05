
import React, { Component } from "react";
import foto from "../images/icono.png";
import "../styles/FormRegister.css";
import Axios from "axios";
import { link, Link } from "react-router-dom";


class FormVehiculo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingForm: true,
      errorForm: null,
      dataForm: {},
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

  componentDidMount() {
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

    return (

      <div className="form-vehiculo">
        <h3 className="form-title">Registar Vehículo</h3>
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

                  {/* <input formControlName="foto" /> */}
                  {/* <div className="middle">

                                    <div className="text" >Tomar foto</div>                                    
                                        <label className="text"> Subir foto
                                        <input type="file" />
                                            <span></span>
                                         </label>
                                </div> */}

                </div>
                <button type="file" className="btn-primary btn-register">
                  Subir Imagen
                </button>
              </div>
              {/* <!--<div className="col-12 profilePictureButtons">
                                <button type="button" className="btn buttonFill" title="Tomar foto" dataForm-toggle="tooltip" dataForm-placement="top" className="custom-tooltip"><i className="fas fa-camera" aria-hidden="true"></i></button>
                                <button type="button" className="btn buttonFill" title="Subir foto" dataForm-toggle="tooltip" dataForm-placement="top" className="custom-tooltip"><i className="fas fa-upload" aria-hidden="true"></i></button>
                            </div>--> */}
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
                  {this.state.dataForm.map((character) => (
                    <option>{character.tipo_vehiculo}</option>
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
              <div className="invalid-feedback">El código es obligatorio</div>
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
          {/* <div className="form-row">
            <div className="form-group col-md-4">
              <label className="customTittleLabel">SOAT </label>
              <button type="submit" className="btn-primary btn-register">
                Subir Archivo
              </button>
            </div> */}
          {/* <div className="form-group col-md-4">
              <label className="customTittleLabel">Matrícula </label>
              <button type="submit" className="btn-primary btn-register">
                Subir Archivo
              </button>
            </div> */}
          {/* </div> */}
          <div className="form-row btn-action">
            <div className="form-group col-md-3">
              
                <button type="submit" className="btn-primary btn-formvehicle">
                  {/* //onClick={this.handleChange}> */}
                  Registrar
                </button>
              
            </div>

            {/* <div className="form-group col-md-3">
              <button type="submit" className="btn-primary btn-formvehicle ">
                Cancelar
              </button>
            </div> */}
          </div>
        </form>
      </div>
    
    );
  }
}

export default FormVehiculo;
