import React from 'react';
import Section from "../Section.jsx";
import CustomInput from "../CustomInput/CustomInput.jsx";
import Button from "../Button/Button.jsx";

const PlansInput = ({plansInput, onSaveClick, onChange, onReset}) => {
    const handleSave = () => {
        onSaveClick(plansInput);
    };

    const resetFields = () => {
        onReset();
    }

    return (
        <Section>
            <CustomInput
                labelText="Nazwa Planu"
                value={plansInput.title}
                onChange={(event) => onChange("title", event.target.value)}
            />
            <Button
                className="button"
                onClick={() => {
                    handleSave();
                    resetFields();
                }}
            >
                <p>Dodaj plan</p>
            </Button>
        </Section>
    );
};

export default PlansInput;