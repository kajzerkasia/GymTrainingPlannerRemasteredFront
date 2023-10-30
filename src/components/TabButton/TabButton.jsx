import React from 'react';

const TabButton = ({children, isSelected, ...props}) => {
    let active = "bg-darker-violet"
    // background-color: #673599;
    // color: #ebe7ef;

    return (
            <div className={`isSelected ? ${active} : ''`} {...props}>
                {children}
            </div>
    );
};

export default TabButton;