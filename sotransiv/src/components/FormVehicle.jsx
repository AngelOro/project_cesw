import React, { Component } from 'react';
import foto from '../images/icono.png';
import '../styles/FormRegister.css';
import axios from 'axios';


class FormVehiculo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            placa: '',
            capacidad: '',
            marca: '',

        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    SubmitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios
            .post('https://api-sotransiv-8xli76wpt.now.sh/vehicles', this.state)
            .then(response => {
                console.log(response)
            })
            .catch((error) => {
                this.setState({
                  loading: false,
                  error: isNaN,
                });
              });
    }



    render() {
        const { marca, placa, capacidad } = this.state
        return (
            <div className="form-vehiculo">
                <h3 className="form-title">Registar Vehículo</h3>
                <form>
                    <div className="form-row">
                        <div className="col-md-3">
                            <div className="col-12 nopadding">
                                <div className="profileContainer">
                                    <img src={foto} id="canvFoto" width="205" height="203" alt=""
                                        className="img-thumbnail image" />

                                    {/* <input formControlName="foto" /> */}
                                    {/* <div className="middle">
                                    <div className="text" >Tomar foto</div>                                    
                                        <label className="text"> Subir foto
                                        <input type="file" />
                                            <span></span>
                                         </label>
                                </div> */}
                                </div>
                                <button type="file" className="btn-primary btn-register">Subir Imagen</button>
                            </div>
                            {/* <!--<div className="col-12 profilePictureButtons">
                                <button type="button" className="btn buttonFill" title="Tomar foto" data-toggle="tooltip" data-placement="top" className="custom-tooltip"><i className="fas fa-camera" aria-hidden="true"></i></button>
                                <button type="button" className="btn buttonFill" title="Subir foto" data-toggle="tooltip" data-placement="top" className="custom-tooltip"><i className="fas fa-upload" aria-hidden="true"></i></button>
                            </div>--> */}
                        </div>
                        <div className="col-md-4 leftSeparator">
                            <form onSubmit={this.SubmitHandler}>

                                <div className="form-group">
                                    <label >Placa</label>
                                    <input type="text" className="form-control" id="inputEmail4" name="placa" value={placa} onChange={this.changeHandler} />
                                </div>
                                <div className="form-group">
                                    <label >Marca</label>
                                    <input type="text" className="form-control" name="marca" value={marca} onChange={this.changeHandler} />
                                </div>
                                <div className="form-group">
                                    <label>Capacidad</label>
                                    <input type="text" className="form-control" name="capacidad" value={capacidad} onChange={this.changeHandler} />
                                </div>

                                <button type="submit">submit</button>
                            </form>
                        </div>
                        <div className="col-md-4 leftSeparator">

                            <div className="form-group">
                                <label >Modelo</label>
                                <input type="text" className="form-control" id="inputEmail4" />
                            </div>
                            <div className="form-group">
                                <label >Tipo Vehículo</label>
                                <select className="form-control" >
                                    <option > Seleccionar </option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label >R-Trailer</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label className="customTittleLabel">Fecha Ven. SOAT</label>
                            <input className="form-control" type="date" />
                            <div className="invalid-feedback">
                                El código es obligatorio
                    </div>
                        </div>
                        <div className="form-group col-md-4">
                            <label className="customTittleLabel">Fecha Ven. Poliza Contractual</label>
                            <input className="form-control" type="date" />
                            <div className="invalid-feedback">
                                El código del terminal es obligatorio
                    </div>
                        </div>
                        <div className="form-group col-md-4">
                            <label className="customTittleLabel">Fecha Poliza Extracontractual</label>
                            <input className="form-control" type="date" />
                            <div className="invalid-feedback">
                                La fecha de nacimiento es obligatoria
                    </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label className="customTittleLabel">SOAT   </label>
                            <button type="submit" className="btn-primary btn-register">Subir Archivo</button>
                        </div>
                        <div className="form-group col-md-4">
                            <label className="customTittleLabel">Matrícula  </label>
                            <button type="submit" className="btn-primary btn-register">Subir Archivo</button>
                        </div>
                    </div>
                    <div className="form-row btn-action">
                        <div className="form-group col-md-3">
                            <button type="submit" className="btn-primary btn-formvehicle ">Registrar</button>
                        </div>
                        <div className="form-group col-md-3">
                            <button type="submit" className="btn-primary btn-formvehicle ">Registrar</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default FormVehiculo;
