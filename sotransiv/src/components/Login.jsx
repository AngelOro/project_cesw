import React from 'react';
import myPng from '../images/logo.png';
import '../styles/Login.css'
import { link, Link } from 'react-router-dom';

class Login extends React.Component {
    render() {
        return (
            <body className="text-center">
                <form className="form-signin">
                    <img className="mb-4" src={myPng} alt="" width="150" height="150"></img>         
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus></input>
                    <label for="inputPassword" className="sr-only">Password</label>

                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required></input>
                        <div className="checkbox mb-3"></div>
                        <label>
                            <input type="checkbox" value="remember-me"></input>remenber me
                        </label>
                        <Link to="/Main">
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                        </Link>
                        <p className="mt-2 mb-1 text-muted">&copy; 2020-2021</p>
                </form>
            </body>
        )
    }
}

export default Login;