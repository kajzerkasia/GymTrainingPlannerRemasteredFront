import React from 'react';
import {useInputLogic} from "../../hooks/useInputLogic.js";
import PartsOfPlanInput from "../PartsOfPlanInput/PartsOfPlanInput.jsx";
import {PARTS_OF_PLAN_KEYS} from "../../constants/data.js";
import Exercises from "../Exercises/Exercises.jsx";

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
                onSaveClick={() => {
                    handleSaveClick();
                }}
                onChange={handleChange}
                onReset={handleReset}
            />
            {itemsArray.map((partOfPlan, partIndex) => (
                <div key={partIndex}>
                    <h1>{partOfPlan.title}</h1>
                    <Exercises/>
                </div>
            ))}
        </div>
    );
};

export default PartsOfPlan;