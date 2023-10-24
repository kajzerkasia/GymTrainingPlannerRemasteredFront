import React from 'react';
import './Plan.css';

const Plan = ({image, title}) => {
    return (
        <li>
            {/*<img src={image} alt={title}/>*/}
            <h3>{title}</h3>
        </li>
    );
};

export default Plan;