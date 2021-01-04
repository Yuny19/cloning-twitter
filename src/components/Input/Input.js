import React from "react";

import './input.css';

const Input = ({type, label, value, onChangeHandler, readOnly}) => {
  return (
    <div className="form">
      <input type={type} value={value} required readOnly={readOnly?readOnly:false} onChange={onChangeHandler} />
      <label className="lbl-form">
        <span className="content-form">{label}</span>
      </label>
    </div>
  );
};

export default Input;
