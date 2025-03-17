import React from "react";

import "./Input.css";

function Input(props) {
  return (
    <div className={`input-content ${props.togg}`}>
      <label>{props.label}</label>
      <input type={props.type} required />
    </div>
  );
}

export default Input;
