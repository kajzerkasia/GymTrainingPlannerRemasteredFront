import React from 'react';

const Tabs = ({ children, buttons, ButtonsContainer = 'ul', ...props}) => {
    return (
        <>
            <ButtonsContainer {...props}>
                {buttons}
            </ButtonsContainer>
            {children && children}
        </>
    );
};

export default Tabs;