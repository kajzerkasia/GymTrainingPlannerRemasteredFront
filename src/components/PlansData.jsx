import React, {useState} from "react";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
import EditButton from "./EditButton.jsx";
import PartsOfPlan from "./PartsOfPlan.jsx";

const PlansData = ({plansArray}) => {
    const [selectedPlan, setSelectedPlan] = useState();

    const handleSelectPlan = (selectedButton) => {
        setSelectedPlan(selectedButton);
    };

    return (
        <Section className="plans-section">
            <Tabs
                className="plans-tabs"
                buttons={
                    <>
                        {plansArray.map((plan) => (
                            <TabButton
                                key={plan.title}
                                isSelected={selectedPlan === `${plan.title}`}
                                onClick={() => handleSelectPlan(`${plan.title}`)}
                            >
                                <EditButton initialName={plan.title}/>
                            </TabButton>
                        ))}
                    </>
                }
            >
            </Tabs>
            {selectedPlan && <PartsOfPlan/>}
        </Section>
    );
};

export default PlansData;
