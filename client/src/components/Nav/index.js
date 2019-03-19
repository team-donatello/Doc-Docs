import React from "react";
import "./style.css"

function Nav() {
    return(
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-band" href="/">
                Doc Docs
            </a>
            <a className="nav-item" href="/home">Home</a>
        </nav>
    );
}

export default Nav;