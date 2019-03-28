import React from "react";


function Jumbotron({ children }) {
  return (
    <div className="container">
    <div
      style={{ border: "solid", height: 150, background: "#C2E2E5", paddingTop: 45, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
    </div>
  );
}

export default Jumbotron;
