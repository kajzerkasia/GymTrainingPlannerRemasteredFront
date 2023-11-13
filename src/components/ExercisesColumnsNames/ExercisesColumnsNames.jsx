import React from "react";

const columnNames = [
  "Kolejność",
  "Ćwiczenie",
  "Ilość serii i powtórzeń",
  "Tempo",
  "Długość przerwy",
];

const ExercisesColumnsNames = () => {
  return (
      <ol className="exercises-column-names-ol">
        {columnNames.map((exercise, index) => (
            <li key={index}>
              <button className="exercises-button">{exercise}</button>
            </li>
        ))}
      </ol>
  );
};

export default ExercisesColumnsNames;