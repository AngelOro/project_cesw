import React from 'react';
import {link,Link} from 'react-router-dom';

function Vehiculo () {
    return (
        <div className="container">
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1>SotranSIV</h1>
            </div>
            <Link to="/RegisterVehicle" >
            <button   class="btn-1 btn-primary">Registrar Vehiculo</button>
            </Link>
        </div>

    )
}

export default Vehiculo;