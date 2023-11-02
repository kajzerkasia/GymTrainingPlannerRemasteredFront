import React, { useState } from "react";
import { PLANS } from "../../data.js";
import TabButton from "../TabButton/TabButton.jsx";
import Section from "../Section.jsx";
import Tabs from "../Tabs/Tabs.jsx";
import EditButton from "../EditButton/EditButton.jsx";
import TabContent from "../TabContent/TabContent.jsx";

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState();

  const handleSelectPlan = (selectedButton) => {
    setSelectedPlan(selectedButton);
  };

  return (
    <Section className="plans-section" title="Plany treningowe">
      <Tabs
        className="plans-tabs"
        buttons={
          <>
            {PLANS.map((plan) => (
              <TabButton
                key={plan.title}
                {...plan}
                isSelected={selectedPlan === `${plan.title}`}
                onClick={() => handleSelectPlan(`${plan.title}`)}
              >
                <EditButton initialName={plan.title} />
              </TabButton>
            ))}
          </>
        }
      >
        {selectedPlan ? <TabContent /> : <p>Wybierz plan</p>}
      </Tabs>
    </Section>
  );
};

export default Plans;
