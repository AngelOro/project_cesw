import React from 'react';
import '../styles/Header.css';
import { link, Link } from 'react-router-dom';
import logo from '../images/LogoWhite.png';


function Header() {
    return (

        <nav className="navbar navbar-expand-lg justify-content-between" id="nav" >
            <div className="navbar-brand">
            <img className="mb-4 logoWhite" src={logo} alt=""></img>
            </div>
            <ul className="navbar-nav my-2 my-lg-0">
                <li className="nav-item active">
                    <Link to="/Main">
                        <a className="nav-link" href="#">
                            Home
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/">
                        <a className="nav-link" href="#">
                            About
                    </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Feature
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Pricing
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Contact us
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <svg
                            className="bi bi-search"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg" >
                            <path
                                fill-rule="evenodd"
                                d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
                                clip-rule="evenodd" />
                            <path
                                fill-rule="evenodd"
                                d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                                clip-rule="evenodd"/>
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Header;