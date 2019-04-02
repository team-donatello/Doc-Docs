import React from "react";
import "./style.css";


function Jumbotron({ children }) {
  return (
    <div className="container">
    <div
      style={{ border: "solid", borderwidth: "10px", height: 200, background: "#C2E2E5", paddingTop: 45, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
    </div>
  );
}

export default Jumbotron;
