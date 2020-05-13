import React from 'react';
import logo from '../images/Logo_color.png';
import '../styles/Login.css'
import { link, Link } from 'react-router-dom';

class Login extends React.Component {
    render() {
        return (
            <div className="container-login">
                <div class="capa-gradiente"></div>
            <form className="form-signin" id="form">
                <img className="mb-4 logo" src={logo} alt=""></img>
                <label for="inputUser" className="sr-only">Usuario</label>
                <input type="text" id="inputUser" className="form-control form-login" placeholder="Usuario" required autofocus></input>
                <label for="inputPassword" className="sr-only">Clave</label>

                <input type="password" id="inputPassword" className="form-control form-login" placeholder="Clave" required></input>
                <div className="checkbox mb-3"></div>
                
                <Link to="/Main">
                    <button className="btn-login btn-lg btn-primary btn-block" type="submit">Ingresar</button>
                </Link>
            </form>
            </div>
        )
    }
}

export default Login;