import React from 'react';
import PlansInput from "../PlansInput/PlansInput.jsx";
import PlansData from "../PlansData/PlansData.jsx";
import {useInputLogic} from "../../hooks/useInputLogic.js";

const Plans = () => {
  const keys = ["title"];
  const {
      input,
      itemsArray,
      handleChange,
      handleSaveClick,
      handleReset,
  } = useInputLogic(keys);

    return (
        <div>
            <PlansInput
                plansInput={input}
                onSaveClick={handleSaveClick}
                onChange={handleChange}
                onReset={handleReset}
            />
            <PlansData plansArray={itemsArray}/>
        </div>
    );
};

export default Plans;