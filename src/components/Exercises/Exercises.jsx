import React from 'react';
// import './Exercises.css';
import {createArrayOfExercises} from "../../utils/exercisesArray.js";

const columnNames = [
    ["Kolejność", "Ćwiczenie", "Ilość serii i powtórzeń", "Tempo", "Długość przerwy"],
]

// const initialExercises = [
//     ["1", "goblet squat", "3s8", "3111", "120-180s"],
//     ["2", "neutral grip lat pulldown", "3s8-10", "3011", "120-150s"],
//     ["3", "lying leg curl", "2s6-8", "3010", "120s"],
//     ["4", "lone arm db press", "2s10", "3011", "90s"],
//     ["5", "suitcase walk", "3s50m", null, "60s"],
// ]

const Exercises = ({ exercisesData }) => {
    const exercises = createArrayOfExercises(exercisesData);

    return (
        <>
        {/*<ol id="exercises-column-names">*/}
        <ol className="flex flex-wrap flex-col justify-center gap-8 my-12 mx-0 p-0 list-none">
            {columnNames.map((row, rowIndex) => <li key={rowIndex}>
                <ol className="flex flex-wrap justify-center gap-8 m-0 p-0 list-none">
                    {row.map((exercise, colIndex) => <li key={colIndex}>
                        <button className="bg-violet text-almost-white uppercase w-32 h-32 border-none text-base py-4 font-button">{exercise}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
        <ol id="exercises">
            {exercises.map((exercise) => {
                return <ol key={exercise.order}>
                    <button>{exercise.order}</button>
                    <button>{exercise.exercise}</button>
                    <button>{exercise.seriesAndRepetitions}</button>
                    <button>{exercise.tempo}</button>
                    <button>{exercise.rest}</button>
                </ol>
            })}
        </ol>
        </>
    );
};

export default Exercises;