import React from 'react';

const TabButton = ({children, isSelected, ...props}) => {
    return (
            <div className={isSelected ? 'active' : ''} {...props}>
                {children}
            </div>
    );
};

export default TabButton;