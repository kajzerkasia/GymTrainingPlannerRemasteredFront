import React from "react";
import Section from "../Section.jsx";
import CustomInput from "../CustomInput/CustomInput.jsx";
import Button from "../Button/Button.jsx";

const ExercisesInput = ({exercisesInput, onChange, onSaveClick, onReset}) => {

    const handleSave = () => {
        onSaveClick(exercisesInput);
    };

    const resetFields = () => {
        onReset();
    }

    return (
        <>
            <p className="exercises-input-p">Dodaj ćwiczenie do wybranej części planu</p>
            <Section className="section">
                <CustomInput
                    labelText="Kolejność"
                    value={exercisesInput.order}
                    onChange={(event) => onChange("order", event.target.value)}
                />
                <CustomInput
                    labelText="Ćwiczenie"
                    value={exercisesInput.exercise}
                    onChange={(event) => onChange("exercise", event.target.value)}
                />
                <CustomInput
                    labelText="Ilość serii i powtórzeń"
                    value={exercisesInput.seriesAndRepetitions}
                    onChange={(event) =>
                        onChange("seriesAndRepetitions", event.target.value)
                    }
                />
                <CustomInput
                    labelText="Tempo"
                    value={exercisesInput.tempo}
                    onChange={(event) => onChange("tempo", event.target.value)}
                />
                <CustomInput
                    labelText="Długość przerwy"
                    value={exercisesInput.rest}
                    onChange={(event) => onChange("rest", event.target.value)}
                />
                <Button
                    onClick={() => {
                        handleSave();
                        resetFields();
                    }}
                >
                    <p>Zapisz</p>
                </Button>
            </Section>
        </>
    );
};

export default ExercisesInput;
