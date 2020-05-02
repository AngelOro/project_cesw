import React from 'react'
import { link, Link } from 'react-router-dom';

function Content() {
    return (
        <div className="container" id="container-content">
            <div className="row">
                <div className="col-md-7">
                    <Link to="/Vehicle">
                        <button type="button" class="btn-1 btn-primary" id="btn-vehiculo">Vehiculos</button>
                    </Link>
                </div>
                <div className="col-md-3">
                    <Link to="/Conduct">
                        <button type="button" class="btn-2 btn-primary">Conductores</button>

                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <Link to="/Shipping">
                        <button type="button" class="btn-1 btn-primary">Envios</button>
                    </Link>
                </div>
                <div className="col-md-3">
                    <Link to="/Report">
                        <button type="button" class="btn-2 btn-primary">Reportes</button>
                    </Link>
                </div>
            </div>

        </div>

    )
}

export default Content;