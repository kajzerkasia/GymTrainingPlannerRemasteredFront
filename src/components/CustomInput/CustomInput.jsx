import React from "react";

const CustomInput = ({ labelText, children, value, onChange, ...props }) => {
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
          {...props}
        />
      </p>
    </div>
  );
};

export default CustomInput;
