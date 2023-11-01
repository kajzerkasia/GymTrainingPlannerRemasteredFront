import React from "react";
import { createArrayOfExercises } from "../../utils/exercisesArray.js";

// const initialExercises = [
//     ["1", "goblet squat", "3s8", "3111", "120-180s"],
//     ["2", "neutral grip lat pulldown", "3s8-10", "3011", "120-150s"],
//     ["3", "lying leg curl", "2s6-8", "3010", "120s"],
//     ["4", "lone arm db press", "2s10", "3011", "90s"],
//     ["5", "suitcase walk", "3s50m", null, "60s"],
// ]

const ExercisesData = ({ exercisesData }) => {
  const exercises = createArrayOfExercises(exercisesData);

  return (
    <ol className="exercises-ol">
      {exercises.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="exercises-second-ol">
            {Object.entries(row).map(([key, value], colIndex) => (
              <li key={colIndex}>
                <button className="exercises-button">{value}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default ExercisesData;
