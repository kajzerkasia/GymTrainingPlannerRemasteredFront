import React from "react";

const columnNames = [
  [
    "Kolejność",
    "Ćwiczenie",
    "Ilość serii i powtórzeń",
    "Tempo",
    "Długość przerwy",
  ],
];

const ExercisesColumnsNames = () => {
  return (
    <ol className="exercises-column-names-ol">
      {columnNames.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="exercises-column-names-second-ol">
            {row.map((exercise, colIndex) => (
              <li key={colIndex}>
                <button className="exercises-button">{exercise}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default ExercisesColumnsNames;
