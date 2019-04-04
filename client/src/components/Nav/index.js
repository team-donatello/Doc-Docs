import React from "react";
import "./style.css"

function Nav() {
    return (

        <nav className="navbar navbar-expand-lg">
                <a className="nav-item " href="/home">Home</a>
                {/* <a className="nav-item " href="/scheduler/:name">Scheduler</a> */}
                <a className="nav-item " href="/login">Login</a>
        </nav >
        

    );
}

export default Nav;