import React, {useState} from 'react';
import Section from "../Section.jsx";
import Tabs from "../Tabs/Tabs.jsx";
import Card from "../UI/Card.jsx";
import {PARTS_OF_PLANS} from "../../data.js";
import TabButton from "../TabButton/TabButton.jsx";
import EditButton from "../EditButton/EditButton.jsx";
// import './TabContent.css';

const TabContent = () => {
    const [selectedPartOfPlan, setSelectedPartOfPlan] = useState();

    const handleSelectPartOfPlan = selectedButton => {
        setSelectedPartOfPlan(selectedButton);
    };

    return (
        <div id="tab-content">
            <Section>
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
                                    <EditButton initialName={partOfPlan.title}/>
                                </TabButton>
                            ))}
                        </Card>
                    }>
                </Tabs>
            </Section>
        </div>
    );
};

export default TabContent;