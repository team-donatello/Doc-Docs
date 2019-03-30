import React from "react";
import "./style.css";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group center">
      <input className="form-control" {...props} />
    </div>
  );
}

export function PasswordInput(props) {
  return (
    <div className="form-group">
      <input className="form-control" type="password" {...props} />
    </div>
  );
}


export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="2" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "left", marginBottom: 10 }} className="btn btn-light">
      {props.children}
    </button>
  );
}


export function A(props) {
  return (
    <button className="btn btn-lg btn-secondary">
      <a target="_blank" className="" {...props}>
        {props.children}
      </a>
    </button>
  )
}

export function Select(props) {
  return (
    <div className="form-group">     
      <select className="form-control" id="exampleFormControlSelect1" {...props}>
        {props.children}        
      </select>
    </div>
  )
}

export function Option(props) {
  return (
        <option>
          {props.children}
        </option>
  )
}
