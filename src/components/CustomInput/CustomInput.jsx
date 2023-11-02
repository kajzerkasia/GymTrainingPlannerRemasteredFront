import React from "react";

const CustomInput = ({ labelText, value, onChange }) => {
  return (
    <div>
      <p>
        <label className="exercises-label">{labelText}</label>
        <input
          type="text"
          required
          className="exercises-input"
          onChange={onChange}
          value={value}
        />
      </p>
    </div>
  );
};

export default CustomInput;
