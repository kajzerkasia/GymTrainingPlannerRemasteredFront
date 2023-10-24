import React from 'react';

const Tabs = ({ children, buttons }) => {
    return (
        <>
            <ul>
                {buttons}
            </ul>
            {children && children}
        </>
    );
};

export default Tabs;