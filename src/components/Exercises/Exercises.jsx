import React from 'react';
import ExercisesInput from "../ExercisesInput/ExercisesInput.jsx";
import ExercisesColumnsNames from "../ExercisesColumnsNames/ExercisesColumnsNames.jsx";
import ExercisesData from "../ExercisesData/ExercisesData.jsx";
import {useInputLogic} from "../../hooks/useInputLogic.js";

const Exercises = () => {
    const keys = ["order", "exercise", "seriesAndRepetitions", "tempo", "rest"];
    const {
        input,
        itemsArray,
        handleChange,
        handleSaveClick,
        handleReset,
    } = useInputLogic(keys);

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