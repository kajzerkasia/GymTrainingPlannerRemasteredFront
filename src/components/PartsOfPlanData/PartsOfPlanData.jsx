import React, {useState} from "react";
import Section from "../Section.jsx";
import Tabs from "../Tabs/Tabs.jsx";
import Card from "../UI/Card.jsx";
import TabButton from "../TabButton/TabButton.jsx";
import EditButton from "../EditButton/EditButton.jsx";
import Exercises from "../Exercises/Exercises.jsx";

const PartsOfPlanData = ({partsOfPlanArray}) => {
    const [selectedPartOfPlan, setSelectedPartOfPlan] = useState();

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
                            {partsOfPlanArray.map((partOfPlan) => (
                                <TabButton
                                    key={partOfPlan.title}
                                    isSelected={selectedPartOfPlan === `${partOfPlan.title}`}
                                    onClick={() => handleSelectPartOfPlan(`${partOfPlan.title}`)}
                                >
                                    <EditButton initialName={partOfPlan.title}/>
                                </TabButton>
                            ))}
                        </Card>
                    }
                >
                </Tabs>
                {selectedPartOfPlan && <Exercises/>}
            </Section>
        </div>
    );
};

export default PartsOfPlanData;
