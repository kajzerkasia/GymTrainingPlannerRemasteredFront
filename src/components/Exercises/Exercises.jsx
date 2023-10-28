import React from 'react';
import './Exercises.css';

const columnNames = [
    ["Kolejność", "Ćwiczenie", "Ilość serii i powtórzeń", "Tempo", "Długość przerwy"],
]

const initialExercises = [
    ["1", "goblet squat", "3s8", "3111", "120-180s"],
    ["2", "neutral grip lat pulldown", "3s8-10", "3011", "120-150s"],
    ["3", "lying leg curl", "2s6-8", "3010", "120s"],
    ["4", "lone arm db press", "2s10", "3011", "90s"],
    ["5", "suitcase walk", "3s50m", null, "60s"],
]

const Exercises = () => {
    return (
        <>
        <ol id="exercises-column-names">
            {columnNames.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((exercise, colIndex) => <li key={colIndex}>
                        <button>{exercise}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
        <ol id="exercises">
            {initialExercises.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((exercise, colIndex) => <li key={colIndex}>
                        <button>{exercise}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
        </>
    );
};

export default Exercises;