import React from 'react';

const Tabs = ({ children, buttons, ButtonsContainer = 'ul' }) => {
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