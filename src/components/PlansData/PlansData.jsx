import React, { useState } from "react";
import TabButton from "../TabButton/TabButton.jsx";
import Section from "../Section.jsx";
import Tabs from "../Tabs/Tabs.jsx";
import EditButton from "../EditButton/EditButton.jsx";
import PartsOfPlan from "../PartsOfPlan/PartsOfPlan.jsx";
import {PLANS} from "../../constants/data.js";

const PlansData = () => {
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
                isSelected={selectedPlan === `${plan.title}`}
                onClick={() => handleSelectPlan(`${plan.title}`)}
              >
                <EditButton initialName={plan.title} />
              </TabButton>
            ))}
          </>
        }
      >
        {selectedPlan ? <PartsOfPlan /> : <p>Wybierz plan</p>}
      </Tabs>
    </Section>
  );
};

export default PlansData;
