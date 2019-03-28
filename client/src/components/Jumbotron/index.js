import React from "react";


function Jumbotron({ children }) {
  return (
    <div className="container">
    <div
      style={{ border: "solid", height: 150, clear: "both", paddingTop: 50, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
    </div>
  );
}

export default Jumbotron;
