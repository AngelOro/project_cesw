import React, { Component } from "react";
import "../styles/FormRegister.css";

class FormConduct extends Component {
  render() {
    return (
      <div className="form-vehiculo">
        <h3 className="form-title">Registrar conductor</h3>
        <form className="formConduct">
          <div className="form-row">
            <div className="col-md-4 leftSeparator">
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
                  <input type="checkbox"/> Acepto de terminos y condiciones
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>

            <div className="col-md-4 leftSeparator">
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
            <div className="form-group col-md-4">
              <button type="submit" className="btn-primary btn-formConduct" id="btn-conduct">
                Registrar conductor
              </button>
            </div>
        </form>
      </div>
    );
  }
}

export default FormConduct;
