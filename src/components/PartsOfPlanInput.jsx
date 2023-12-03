import Section from "./Section.jsx";
import CustomInput from "./CustomInput.jsx";
import Button from "./Button.jsx";
import React from "react";

const PartsOfPlanInput = ({partsOfPlanInput, onSaveClick, onChange, onReset}) => {
    const resetFields = () => {
        onReset();
    }

    const handleSave = () => {
        onSaveClick(partsOfPlanInput);
        resetFields();
    };

    return (
        <Section>
            <CustomInput
                labelText="Nazwa Części Planu"
                value={partsOfPlanInput.title}
                onChange={(event) => onChange("title", event.target.value)}
            />
            <Button
                className="button"
                onClick={() => {
                    handleSave();
                }}
            >
                <p>Dodaj część planu</p>
            </Button>
        </Section>
    );
};

export default PartsOfPlanInput;