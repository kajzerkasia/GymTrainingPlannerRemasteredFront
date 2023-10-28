import React from 'react';
import './TabButton.css';

const TabButton = ({children, isSelected, ...props}) => {
    return (
            <div className={isSelected ? 'active' : ''} {...props}>
                {children}
            </div>
    );
};

export default TabButton;