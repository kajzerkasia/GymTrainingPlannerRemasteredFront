import React from 'react';
import Section from "../Section.jsx";
import CustomInput from "../CustomInput/CustomInput.jsx";
// import './ExercisesInput.css';

const ExercisesInput = ({ onChange, exercisesInput }) => {
    const labelClasses = "block mb-1 font-title text-base font-bold uppercase text-almost-white";
    const inputClasses = "w-full p-2 mb-4 border border-cyan bg-transparent rounded text-cyan text-base";

    return (
        <Section className='p-4 max-w-lg my-8 mx-0 rounded bg-violet'>
            <CustomInput
                labelText="Kolejność"
                className={labelClasses}>
                <input
                    className={inputClasses}
                    type="text"
                    required
                    value={exercisesInput.order}
                    onChange={(event) =>
                        onChange('order', event.target.value)
                    }
                />
            </CustomInput>
            <CustomInput
                labelText="Ćwiczenie"
                className={labelClasses}>
                <input
                    className={inputClasses}
                    type="text"
                    required
                    value={exercisesInput.exercise}
                    onChange={(event) =>
                        onChange('exercise', event.target.value)
                    }
                />
            </CustomInput>
            <CustomInput
                labelText="Ilość serii i powtórzeń"
                className={labelClasses}>
                <input
                    className={inputClasses}
                    type="text"
                    required
                    value={exercisesInput.seriesAndRepetitions}
                    onChange={(event) =>
                        onChange('seriesAndRepetitions', event.target.value)
                    }
                />
            </CustomInput>
            <CustomInput
                labelText="Tempo"
                className={labelClasses}>
                <input
                    className={inputClasses}
                    type="text"
                    required
                    value={exercisesInput.tempo}
                    onChange={(event) =>
                        onChange('tempo', event.target.value)
                    }
                />
            </CustomInput>
            <CustomInput
                labelText="Tempo"
                className={labelClasses}>
                <input
                    className={inputClasses}
                    type="text"
                    required
                    value={exercisesInput.tempo}
                    onChange={(event) =>
                        onChange('tempo', event.target.value)
                    }
                />
            </CustomInput>
            <CustomInput
                labelText="Długość przerwy"
                className={labelClasses}>
                <input
                    className={inputClasses}
                    type="text"
                    required
                    value={exercisesInput.rest}
                    onChange={(event) =>
                        onChange('rest', event.target.value)
                    }
                />
            </CustomInput>
        </Section>
    );
};

export default ExercisesInput;