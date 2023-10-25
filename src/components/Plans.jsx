import React, {useState} from 'react';
import {PLANS} from "../data.js";
import TabButton from "./TabButton.jsx";
import Card from "./UI/Card.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
import EditButton from "./EditButton/EditButton.jsx";
import TabContent from "./TabContent.jsx";

const Plans = () => {
    const [selectedPlan, setSelectedPlan] = useState();

    const handleSelectPlan = selectedButton => {
        setSelectedPlan(selectedButton);
    };

    return (
        <Card>
            <Section id="plans" className="plans-buttons" title="Plany">
                <Tabs
                    buttons={
                    <>
                        {PLANS.map((plan) => (
                            <TabButton
                                key={plan.title}
                                {...plan}
                                isSelected={selectedPlan === `${plan.title}`}
                                onClick={() => handleSelectPlan(`${plan.title}`)}
                            >
                                <EditButton initialName={plan.title}/>
                            </TabButton>
                        ))}
                    </>
                }>
                    {selectedPlan ? <TabContent/> : <p>Wybierz plan</p>}
                </Tabs>
            </Section>
        </Card>
    );
};

export default Plans;