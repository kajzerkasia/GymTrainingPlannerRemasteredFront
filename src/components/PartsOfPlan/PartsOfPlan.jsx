import React, {useContext} from 'react';
import { InputContext } from "../../store/input-context.jsx";
import PartsOfPlanInput from "../PartsOfPlanInput/PartsOfPlanInput.jsx";

const PartsOfPlan = () => {
    const {
        input,
        itemsArray,
        handleChange,
        handleSaveClick,
        handleReset,
    } = useContext(InputContext);

    return (
        <div>
            <PartsOfPlanInput
                partsOfPlanInput={input}
                onSaveClick={() => {
                    handleSaveClick();
                }}
                onChange={handleChange}
                onReset={handleReset}
            />
            {/*{itemsArray.map((partOfPlan, partIndex) => (*/}
            {/*    <div key={partIndex}>*/}
            {/*        <h1>{partOfPlan.title}</h1>*/}
            {/*        <Exercises/>*/}
            {/*    </div>*/}
            {/*))}*/}
        </div>
    );
};

export default PartsOfPlan;