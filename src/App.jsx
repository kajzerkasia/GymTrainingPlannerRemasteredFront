import './App.css'
import Header from "./components/Header/Header.jsx";
import Plans from "./components/Plans.jsx";
import Exercises from "./components/Exercises.jsx";

function App() {

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
