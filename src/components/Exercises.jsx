import React from 'react';
import ExercisesInput from "./ExercisesInput.jsx";
import ExercisesColumnsNames from "./ExercisesColumnsNames.jsx";
import ExercisesData from "./ExercisesData.jsx";
import {useInputLogic} from "../hooks/useInputLogic.js";
import {EXERCISES_KEYS} from "../constants/keys.js";

const Exercises = () => {
    const {
        input,
        itemsArray,
        handleChange,
        handleSaveClick,
        handleReset,
    } = useInputLogic(EXERCISES_KEYS);

    return (
        <div>
            <ExercisesInput
                exercisesInput={input}
                onChange={handleChange}
                onSaveClick={handleSaveClick}
                onReset={handleReset}
            />
            {itemsArray.length > 0 && <ExercisesColumnsNames />}
            <ExercisesData exercisesArray={itemsArray} />
        </div>
    );
};

export default Exercises;