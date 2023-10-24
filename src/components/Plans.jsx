import React, {useState} from 'react';
import {PARTS_OF_PLANS, PLANS} from "../data.js";
import TabButton from "./TabButton.jsx";
import Card from "./UI/Card.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

const Plans = () => {
    const [selectedPlan, setSelectedPlan] = useState();
    const [selectedPartOfPlan, setSelectedPartOfPlan] = useState();

    const handleSelectPlan = selectedButton => {
        setSelectedPlan(selectedButton);
    };

    const handleSelectPartOfPlan = selectedButton => {
        setSelectedPartOfPlan(selectedButton);
    };

    let tabContent = <p>Wybierz plan</p>;


    if (selectedPlan) {
        tabContent = (
            <div id="tab-content">
                <Section id="parts_of_plans" className="plans-buttons">
                    <Tabs
                        buttons={
                        <Card className="card-brighter">
                            {PARTS_OF_PLANS.map((partOfPlan) => (
                                <TabButton
                                    key={partOfPlan.title}
                                    {...partOfPlan}
                                    isSelected={selectedPartOfPlan === `${partOfPlan.title}`}
                                    onClick={() => handleSelectPartOfPlan(`${partOfPlan.title}`)}
                                >
                                    {partOfPlan.title}
                                </TabButton>
                            ))}
                        </Card>
                    }>
                    </Tabs>
                </Section>
            </div>
        );
    }

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
                                {plan.title}
                            </TabButton>
                        ))}
                    </>
                }>
                    {tabContent}
                </Tabs>
            </Section>
        </Card>
    );
};

export default Plans;