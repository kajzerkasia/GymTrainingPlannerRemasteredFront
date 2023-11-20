import React from 'react';
import ExercisesInput from "../ExercisesInput/ExercisesInput.jsx";
import ExercisesColumnsNames from "../ExercisesColumnsNames/ExercisesColumnsNames.jsx";
import ExercisesData from "../ExercisesData/ExercisesData.jsx";
import {useInputLogic} from "../../hooks/useInputLogic.js";
import {EXERCISES_KEYS} from "../../constants/data.js";

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
                onSaveClick={() => {
                    handleSaveClick();
                }}
                onReset={handleReset}
            />
            {itemsArray.length > 0 && <ExercisesColumnsNames />}
            <ExercisesData exercisesArray={itemsArray} />
        </div>
    );
};

export default Exercises;