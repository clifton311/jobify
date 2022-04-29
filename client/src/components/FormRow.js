import React from "react";

const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name}>{labelText || name}</label>
      <input
        type={type}
        name={name}
        onChange={handleChange}
        value={value}
        className="form-input"
      />
   
    </div>
  );
};

export default FormRow;
