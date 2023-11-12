import React from 'react';
import Section from "../Section.jsx";
import CustomInput from "../CustomInput/CustomInput.jsx";
import Button from "../Button/Button.jsx";

const PlansInput = ({plansInput, onSaveClick}) => {
    const handleSave = () => {
        onSaveClick(plansInput);
    };

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
                }}
            >
                Dodaj plan</Button>
        </Section>
    );
};

export default PlansInput;