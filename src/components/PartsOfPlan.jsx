import React from 'react';
import PartsOfPlanInput from "./PartsOfPlanInput.jsx";
import {useInputLogic} from "../hooks/useInputLogic.js";
import {PARTS_OF_PLAN_KEYS} from "../constants/keys.js";
import PartsOfPlanData from "./PartsOfPlanData.jsx";

const PartsOfPlan = ({ selectedPlan }) => {
    const {
        input,
        itemsArray,
        handleChange,
        handleSaveClick,
        handleReset,
    } = useInputLogic(PARTS_OF_PLAN_KEYS);

    console.log(input);

    return (
        <div>
            <PartsOfPlanInput
                partsOfPlanInput={input}
                onSaveClick={() => handleSaveClick(selectedPlan)}
                onChange={handleChange}
                onReset={handleReset}
            />
            <PartsOfPlanData partsOfPlanArray={itemsArray} selectedPlan={selectedPlan} />
        </div>
    );
};

export default PartsOfPlan;