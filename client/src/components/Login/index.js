import React from "react";
import "./style.css"

function Login() {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="Absolute-Center is-Responsive">
                    <form action="" id="loginForm">
                        <div className="form-group input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                            <input className="form-control" type="text" name='username' placeholder="username" />
                        </div>
                        <div className="form-group input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                            <input className="form-control" type="password" name='password' placeholder="password" />
                        </div>                        
                        <div className="form-group">
                            <button type="button" className="btn btn-def btn-block">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;


