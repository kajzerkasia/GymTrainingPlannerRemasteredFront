import React from 'react';
import PartsOfPlanInput from "../PartsOfPlanInput/PartsOfPlanInput.jsx";
import {useInputLogic} from "../../hooks/useInputLogic.js";
import {PARTS_OF_PLAN_KEYS} from "../../constants/keys.js";
import PartsOfPlanData from "../PartsOfPlanData/PartsOfPlanData.jsx";

const PartsOfPlan = () => {
    const {
        input,
        itemsArray,
        handleChange,
        handleSaveClick,
        handleReset,
    } = useInputLogic(PARTS_OF_PLAN_KEYS);

    return (
        <div>
            <PartsOfPlanInput
                partsOfPlanInput={input}
                onSaveClick={handleSaveClick}
                onChange={handleChange}
                onReset={handleReset}
            />
            <PartsOfPlanData partsOfPlanArray={itemsArray}/>
        </div>
    );
};

export default PartsOfPlan;