import './App.css'
import Header from "./components/Header/Header.jsx";
import Plans from "./components/Plans/Plans.jsx";
import Exercises from "./components/Exercises/Exercises.jsx";
import {useState} from "react";
import ExercisesInput from "./components/ExercisesInput/ExercisesInput.jsx";

function App() {
    const [exercisesInput, setExercisesInput] = useState({
        order: '',
        exercise: '',
        seriesAndRepetitions: '',
        tempo: '',
        rest: '',
    })

    function handleChange(inputIdentifier, newValue) {
        setExercisesInput(prevExercisesInput => {
            return {
                ...prevExercisesInput,
                [inputIdentifier]: newValue
            };
        });
    }

    return (
        <div>
            <Header/>
            <main>
                <Plans/>
            </main>
            <ExercisesInput
                exercisesInput={exercisesInput}
                onChange={handleChange}/>
            {exercisesInput.order !== '' && <Exercises exercisesData={exercisesInput}/>}
        </div>
    )
}

export default App
