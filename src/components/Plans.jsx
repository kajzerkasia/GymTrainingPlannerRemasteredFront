import React, {useState} from 'react';
import {PARTS_OF_PLANS, PLANS} from "../data.js";
import TabButton from "./TabButton.jsx";
import Card from "./UI/Card.jsx";
import Section from "./Section.jsx";

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
                    <ul>
                        <Card className="card-brighter">
                            {PARTS_OF_PLANS.map((partOfPlan) => (
                                <TabButton
                                    key={partOfPlan.title}
                                    {...partOfPlan}
                                    isSelected={selectedPartOfPlan === `${partOfPlan.title}`}
                                    onSelect={() => handleSelectPartOfPlan(`${partOfPlan.title}`)}
                                >
                                    {partOfPlan.title}
                                </TabButton>
                            ))}
                        </Card>
                    </ul>
                </Section>
            </div>
        );
    }

    return (
        <Card>
            <Section id="plans" className="plans-buttons" title="Plany">
                <ul>
                    {PLANS.map((plan) => (
                        <TabButton
                            key={plan.title}
                            {...plan}
                            isSelected={selectedPlan === `${plan.title}`}
                            onSelect={() => handleSelectPlan(`${plan.title}`)}
                        >
                            {plan.title}
                        </TabButton>
                    ))}
                </ul>
            </Section>
            <section>
                {tabContent}
            </section>
        </Card>
    );
};

export default Plans;