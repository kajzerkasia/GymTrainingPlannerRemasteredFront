import React from "react";

const CustomInput = ({labelText, ...props}) => {
    return (
        <div>
            <p>
                <label className="exercises-label">{labelText}</label>
                <input
                    {...props}
                    type="text"
                    required
                    className="exercises-input"
                />
            </p>
        </div>
    );
};

export default CustomInput;
