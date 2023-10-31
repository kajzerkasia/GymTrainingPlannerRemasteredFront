import React from 'react';
import Section from "../Section.jsx";
// import './ExercisesInput.css';

const ExercisesInput = ({ onChange, exercisesInput }) => {
    const labelClasses = "block mb-1 font-title text-base font-bold uppercase text-almost-white";
    const inputClasses = "w-full p-2 mb-4 border border-cyan bg-transparent rounded text-cyan text-base";

    return (
        <Section className='p-4 max-w-lg my-8 mx-0 rounded bg-violet'>
            <div>
                <p>
                    <label className={labelClasses}>Kolejność</label>
                    <input
                        className={inputClasses}
                        type="text"
                        required
                        value={exercisesInput.order}
                        onChange={(event) =>
                            onChange('order', event.target.value)
                    }
                    />
                </p>
            </div>
            <div>
                <p>
                    <label className={labelClasses}>Ćwiczenie</label>
                    <input
                        className={inputClasses}
                        type="text"
                        required
                        value={exercisesInput.exercise}
                        onChange={(event) =>
                            onChange('exercise', event.target.value)
                        }
                    />
                </p>
            </div>
            <div>
                <p>
                    <label className={labelClasses}>Ilość serii i powtórzeń</label>
                    <input
                        className={inputClasses}
                        type="text"
                        required
                        value={exercisesInput.seriesAndRepetitions}
                        onChange={(event) =>
                            onChange('seriesAndRepetitions', event.target.value)
                        }
                    />
                </p>
            </div>
            <div>
                <p>
                    <label className={labelClasses}>Tempo</label>
                    <input
                        className={inputClasses}
                        type="text"
                        required
                        value={exercisesInput.tempo}
                        onChange={(event) =>
                            onChange('tempo', event.target.value)
                        }
                    />
                </p>
            </div>
            <div>
                <p>
                    <label className={labelClasses}>Długość przerwy</label>
                    <input
                        className={inputClasses}
                        type="text"
                        required
                        value={exercisesInput.rest}
                        onChange={(event) =>
                            onChange('rest', event.target.value)
                        }
                    />
                </p>
            </div>
        </Section>
    );
};

export default ExercisesInput;

// @TODO: Separate reusable component that contains label + input