import React, {useState} from "react";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
import Card from "./UI/Card.jsx";
import TabButton from "./TabButton.jsx";
import EditButton from "./EditButton.jsx";
import Exercises from "./Exercises.jsx";

const PartsOfPlanData = ({partsOfPlanArray, selectedPlan}) => {
    const [selectedPartOfPlan, setSelectedPartOfPlan] = useState('');

    const handleSelectPartOfPlan = (selectedButton) => {
        setSelectedPartOfPlan(selectedButton);
    };

    return (
        <div id="tab-content">
            <Section className="tab-content-section">
                <Tabs
                    className="tab-content-tabs"
                    buttons={
                        <Card>
                            {selectedPlan && partsOfPlanArray
                                .filter((partOfPlan) => partOfPlan.planId === selectedPlan)
                                .map((partOfPlan) => (
                                    <TabButton
                                        key={partOfPlan.id}
                                        isSelected={selectedPartOfPlan === partOfPlan.id}
                                        onClick={() => handleSelectPartOfPlan(partOfPlan.id)}
                                    >
                                        <EditButton initialName={partOfPlan.title} />
                                    </TabButton>
                                ))}
                            {selectedPlan && partsOfPlanArray.length === 0 && <p>Brak dostępnych części planu</p>}
                        </Card>
                    }
                >
                </Tabs>
                {selectedPartOfPlan && <Exercises selectedPartOfPlan={selectedPartOfPlan}/>}
            </Section>
        </div>
    );
};

export default PartsOfPlanData;
