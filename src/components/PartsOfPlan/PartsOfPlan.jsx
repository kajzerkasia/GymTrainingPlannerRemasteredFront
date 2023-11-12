import React from 'react';
import {useInputLogic} from "../../hooks/useInputLogic.js";
import PartsOfPlanData from "../PartsOfPlanData/PartsOfPlanData.jsx";
import PartsOfPlanInput from "../PartsOfPlanInput/PartsOfPlanInput.jsx";

const PartsOfPlan = () => {
    const keys = ["title"];
    const {
        input,
        itemsArray,
        handleChange,
        handleSaveClick,
        handleReset,
    } = useInputLogic(keys);

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