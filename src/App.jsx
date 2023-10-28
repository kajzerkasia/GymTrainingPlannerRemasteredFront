import './App.css'
import Header from "./components/Header/Header.jsx";
import Plans from "./components/Plans/Plans.jsx";
import Exercises from "./components/Exercises/Exercises.jsx";
import {useState} from "react";

function App() {
    const [exercisesInput, setExercisesInput] = useState({
        order: '',
        exercise: '',
        seriesAndRepetitions: '',
        tempo: '',
        rest: '',
    })

    return (
        <div>
            <Header/>
            <main>
                <Plans/>
            </main>
            <Exercises/>
        </div>
    )
}

export default App
