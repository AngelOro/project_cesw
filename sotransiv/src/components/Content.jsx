import React from 'react'
import { link, Link } from 'react-router-dom';

function Content() {
    return (
        <div className="container">
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1>SotranSIV</h1>
            </div>
            <Link to="/Vehiculo">
                <button type="button" class="btn-1 btn-primary">Vehiculos</button>
            </Link>
            <Link to="/">
                <button type="button" class="btn-1 btn-primary">Conductores</button>

            </Link>
            <button type="button" class="btn-1 btn-primary">Envios</button>
            <button type="button" class="btn-1 btn-primary">Reportes</button>

        </div>

    )
}

export default Content;