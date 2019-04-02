import React from "react";
import "./style.css"

function Nav() {
    return (

        <nav className="navbar navbar-expand-lg">
        <div className="container">
            <style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300');
            </style>
                {/* <a className="navbar-band" href="/">
                    Doc Docs
                </a> */}
                <a className="nav-item " href="/home"><i className="fa fa-home"></i>Home</a>
                {/* <a className="nav-item " href="/scheduler/:name">Scheduler</a> */}
                <a className="nav-item " href="/login">Login</a>
                </div>
        </nav >
        

    );
}

export default Nav;