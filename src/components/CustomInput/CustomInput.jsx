import React from 'react';

const CustomInput = ({labelText, children, ...props}) => {
    return (
        <div>
            <p>
                <label {...props}>{labelText}</label>
                {children}
            </p>
        </div>
    );
};

export default CustomInput;