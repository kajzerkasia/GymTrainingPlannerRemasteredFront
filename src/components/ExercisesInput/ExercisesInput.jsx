import React from "react";
import Section from "../Section.jsx";
import CustomInput from "../CustomInput/CustomInput.jsx";

const ExercisesInput = ({ onChange, exercisesInput }) => {
  return (
    <Section className="p-4 w-2/5 my-8 mx-0 rounded bg-violet">
      <CustomInput labelText="Kolejność" className="exercises-label">
        <input
          className="exercises-input"
          type="text"
          required
          value={exercisesInput.order}
          onChange={(event) => onChange("order", event.target.value)}
        />
      </CustomInput>
      <CustomInput labelText="Ćwiczenie" className="exercises-label">
        <input
          className="exercises-input"
          type="text"
          required
          value={exercisesInput.exercise}
          onChange={(event) => onChange("exercise", event.target.value)}
        />
      </CustomInput>
      <CustomInput
        labelText="Ilość serii i powtórzeń"
        className="exercises-label"
      >
        <input
          className="exercises-input"
          type="text"
          required
          value={exercisesInput.seriesAndRepetitions}
          onChange={(event) =>
            onChange("seriesAndRepetitions", event.target.value)
          }
        />
      </CustomInput>
      <CustomInput labelText="Tempo" className="exercises-label">
        <input
          className="exercises-input"
          type="text"
          required
          value={exercisesInput.tempo}
          onChange={(event) => onChange("tempo", event.target.value)}
        />
      </CustomInput>
      <CustomInput labelText="Długość przerwy" className="exercises-label">
        <input
          className="exercises-input"
          type="text"
          required
          value={exercisesInput.rest}
          onChange={(event) => onChange("rest", event.target.value)}
        />
      </CustomInput>
    </Section>
  );
};

export default ExercisesInput;
