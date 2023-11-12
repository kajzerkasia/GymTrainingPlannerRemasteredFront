import React, {useState} from 'react';
import ExercisesInput from "../ExercisesInput/ExercisesInput.jsx";
import ExercisesColumnsNames from "../ExercisesColumnsNames/ExercisesColumnsNames.jsx";
import ExercisesData from "../ExercisesData/ExercisesData.jsx";
import {INITIAL_EXERCISES} from "../../constants/data.js";

const Exercises = () => {

    const [exercisesInput, setExercisesInput] = useState(INITIAL_EXERCISES);
    const [exercisesArray, setExercisesArray] = useState([]);

    function handleChange(inputIdentifier, newValue) {
        setExercisesInput((prevExercisesInput) => {
            return {
                ...prevExercisesInput,
                [inputIdentifier]: newValue,
            };
        });
    }

    const handleSaveClick = (newExercise) => {
        const {order, exercise, seriesAndRepetitions, tempo, rest} = newExercise;
        const updatedExercisesArray = [...exercisesArray];
        setExercisesArray(updatedExercisesArray);
        setExercisesArray((prevExercisesArray) => [
            ...prevExercisesArray,
            {
                order,
                exercise,
                seriesAndRepetitions,
                tempo,
                rest,
            }
        ]);
        return exercisesArray;
    }

    const resetExercisesInput = () => {
        setExercisesInput(INITIAL_EXERCISES);
    };

    return (
        <div>
            <ExercisesInput
                exercisesInput={exercisesInput}
                onChange={handleChange}
                onSaveClick={handleSaveClick}
                onReset={resetExercisesInput}
            />
            {exercisesArray.length > 0 && <ExercisesColumnsNames/>}
            <ExercisesData exercisesArray={exercisesArray}/>
        </div>
    );
};

export default Exercises;