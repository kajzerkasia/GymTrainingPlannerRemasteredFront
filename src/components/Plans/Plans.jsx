import React, {useState} from 'react';
import {PLANS} from "../../data.js";
import TabButton from "../TabButton/TabButton.jsx";
import Card from "../UI/Card.jsx";
import Section from "../Section.jsx";
import Tabs from "../Tabs/Tabs.jsx";
import EditButton from "../EditButton/EditButton.jsx";
import TabContent from "../TabContent/TabContent.jsx";

const Plans = () => {
    const [selectedPlan, setSelectedPlan] = useState();

    const handleSelectPlan = selectedButton => {
        setSelectedPlan(selectedButton);
    };

    return (
        <Card>
            <Section className="flex flex-col text-violet uppercase font-bold" title="Plany treningowe">
                <Tabs
                    className="flex flex-wrap justify-center list-none py-8 m-0 gap-8"
                    buttons={
                    <>
                        {PLANS.map((plan) => (
                            <TabButton
                                className="text-almost-white border-solid border-2 border-violet py-2 px-2"
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