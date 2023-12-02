import React from 'react';
import PlansInput from "./PlansInput.jsx";
import PlansData from "./PlansData.jsx";
import {useInputLogic} from "../hooks/useInputLogic.js";
import {PLANS_KEYS} from "../constants/keys.js";

const Plans = () => {
    const {
        input,
        itemsArray,
        handleChange,
        handleSaveClick,
        handleReset,
    } = useInputLogic(PLANS_KEYS);

    return (
        <div>
            <PlansInput
                plansInput={input}
                onSaveClick={handleSaveClick}
                onChange={handleChange}
                onReset={handleReset}
            />
            <PlansData plansArray={itemsArray}/>
        </div>
    );
};

export default Plans;