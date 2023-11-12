import React, {useState} from 'react';
import PlansInput from "../PlansInput/PlansInput.jsx";
import { INITIAL_PLANS } from "../../constants/data.js";
import PlansData from "../PlansData/PlansData.jsx";

const Plans = () => {
    const [plansInput, setPlansInput] = useState(INITIAL_PLANS);
    const [plansArray, setPlansArray] = useState([]);

    function handleChange(inputIdentifier, newValue) {
        setPlansInput((prevPlansInput) => {
            return {
                ...prevPlansInput,
                [inputIdentifier]: newValue,
            };
        });
    }

    const handleSaveClick = (newPlan) => {
        const {title} = newPlan;
        const updatedPlansArray = [...plansArray];
        setPlansArray(updatedPlansArray);
        setPlansArray((prevPlansArray) => [
            ...prevPlansArray,
            {
                title,
            }
        ]);
        return plansArray;
    }

    const resetPlansInput = () => {
        setPlansInput(INITIAL_PLANS);
    };

    return (
        <div>
            <PlansInput
                plansInput={plansInput}
                onSaveClick={handleSaveClick}
                onChange={handleChange}
                onReset={resetPlansInput}
            />
            <PlansData plansArray={plansArray}/>
        </div>
    );
};

export default Plans;