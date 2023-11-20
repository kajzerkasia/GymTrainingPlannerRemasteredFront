import React, {useContext} from 'react';
import ExercisesInput from "../ExercisesInput/ExercisesInput.jsx";
import { InputContext } from "../../store/input-context.jsx";

const Exercises = () => {
    const {
        input,
        itemsArray,
        handleChange,
        handleSaveClick,
        handleReset,
    } = useContext(InputContext);

    return (
        <div>
            <ExercisesInput
                exercisesInput={input}
                onChange={handleChange}
                onSaveClick={() => {
                    handleSaveClick();
                }}
                onReset={handleReset}
            />
            {/*{itemsArray.length > 0 && <ExercisesColumnsNames />}*/}
            {/*<ExercisesData exercisesArray={itemsArray} />*/}
        </div>
    );
};

export default Exercises;