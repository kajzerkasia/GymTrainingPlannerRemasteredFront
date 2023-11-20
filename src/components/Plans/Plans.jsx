import React, {useContext} from 'react';
import PlansInput from "../PlansInput/PlansInput.jsx";
import { InputContext } from "../../store/input-context.jsx";

const Plans = () => {
    const {
        input,
        itemsArray,
        handleChange,
        handleSaveClick,
        handleReset,
    } = useContext(InputContext);

    return (
        <div>
            <PlansInput
                plansInput={input}
                onSaveClick={handleSaveClick}
                onChange={handleChange}
                onReset={handleReset}
            />
            {/*<PlansData plansArray={itemsArray}/>*/}
        </div>
    );
};

export default Plans;