import React from 'react';
import myPng from '../images/logo.png';


function Header() {
    return (

        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">

            <nav class="navbar navbar-expand-sm  bg-dark navbar-dark fixed-bottom">
                <img className="mb-2" src={myPng} alt="" width="80" height="65"></img>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#colapsado">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="colapsado">
                    <ul class="navbar-nav">
                        <li class="nav-item"><a href="#" clas="nav-link">Home</a></li>
                        <li class="nav-item"><a href="#" clas="nav-link">About</a></li>
                        <li class="nav-item"><a href="#" clas="nav-link">Features</a></li>
                        <li class="nav-item dropdown">
                            <a href="#" clas="nav-link dropdown-toggle" data-toggle="dropdown" id="navbardrop">pricing</a>
                            <div class="dropdown-menu">
                                <a href="#" class="dropdown-item">Subenlace</a>
                                <a href="#" class="dropdown-item">Subenlace</a>
                                <a href="#" class="dropdown-item">Subenlace</a>
                                <a href="#" class="dropdown-item">Subenlace</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default Header;