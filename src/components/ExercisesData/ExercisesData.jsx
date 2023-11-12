import React from "react";

const ExercisesData = ({ exercisesArray }) => {

  return (
    <ol className="exercises-ol">
      {exercisesArray.map((row, rowIndex) => (
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
