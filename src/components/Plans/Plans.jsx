import React, {useState} from 'react';
import PlansInput from "../PlansInput/PlansInput.jsx";
import {INITIAL_EXERCISES_INPUT, PLANS} from "../../constants/data.js";

const Plans = () => {
    const [plansInput, setPlansInput] = useState(PLANS);
    const [plansArray, setPlansArray] = useState([]);

    const handleSaveClick = (newPlan) => {
        const {image, title} = newPlan;
        const updatedPlansArray = [...plansArray];
        setPlansArray(updatedPlansArray);
        setPlansArray((prevPlansArray) => [
            ...prevPlansArray,
            {
                image,
                title,
            }
        ]);
        return plansArray;
    }

    return (
        <div>
            <PlansInput
                plansInput={plansInput}
                onSaveClick={handleSaveClick}
            />
        </div>
    );
};

export default Plans;