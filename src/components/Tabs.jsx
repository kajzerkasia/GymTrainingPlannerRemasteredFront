import React from 'react';

const Tabs = ({ children, buttons, ButtonsContainer }) => {
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children && children}
        </>
    );
};

export default Tabs;