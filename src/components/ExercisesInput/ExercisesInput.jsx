import React from 'react';
import Section from "../Section.jsx";

const ExercisesInput = ({ onChange, exercisesInput }) => {
    return (
        <Section>
            <div className="single-exercises-input">
                <p>
                    <label>Kolejność</label>
                    <input
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
                    <label>Ćwiczenie</label>
                    <input
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
                    <label>Ilość serii i powtórzeń</label>
                    <input
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
                    <label>Tempo</label>
                    <input
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
                    <label>Długość przerwy</label>
                    <input
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