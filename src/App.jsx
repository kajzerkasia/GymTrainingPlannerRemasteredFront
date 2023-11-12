import "./App.css";
import Header from "./components/Header/Header.jsx";
import Plans from "./components/Plans/Plans.jsx";
import ExercisesData from "./components/ExercisesData/ExercisesData.jsx";
import {useState} from "react";
import ExercisesInput from "./components/ExercisesInput/ExercisesInput.jsx";
import ExercisesColumnsNames from "./components/ExercisesColumnsNames/ExercisesColumnsNames.jsx";
import {INITIAL_EXERCISES_INPUT} from "./constants/data.js";

function App() {
    const [exercisesInput, setExercisesInput] = useState(INITIAL_EXERCISES_INPUT);
    const [exercisesArray, setExercisesArray] = useState([]);

    function handleChange(inputIdentifier, newValue) {
        setExercisesInput((prevExercisesInput) => {
            return {
                ...prevExercisesInput,
                [inputIdentifier]: newValue,
            };
        });
    }

    const handleSaveClick = (newExercise) => {
        const {order, exercise, seriesAndRepetitions, tempo, rest} = newExercise;
        const updatedExercisesArray = [...exercisesArray];
        setExercisesArray(updatedExercisesArray);
        setExercisesArray((prevExercisesArray) => [
            ...prevExercisesArray,
            {
                order,
                exercise,
                seriesAndRepetitions,
                tempo,
                rest,
            }
        ]);
    }

    const resetExercisesInput = () => {
        setExercisesInput(INITIAL_EXERCISES_INPUT);
    };

    return (
        <div>
            <Header/>
            <main>
                <Plans/>
            </main>
            <ExercisesInput
                exercisesInput={exercisesInput}
                onChange={handleChange}
                onSaveClick={handleSaveClick}
                onReset={resetExercisesInput}
            />
            <ExercisesColumnsNames/>
            {exercisesInput.order !== "" && (
                <ExercisesData exercisesData={exercisesInput}/>
            )}
        </div>
    );
}

export default App;
