import React from 'react';
import './TabButton.css';

const TabButton = ({children, onSelect, isSelected}) => {
    return (
        <li>
            <button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
        </li>
    );
};

export default TabButton;