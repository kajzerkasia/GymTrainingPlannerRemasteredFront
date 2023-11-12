import "./App.css";
import Header from "./components/Header/Header.jsx";
import Exercises from "./components/Exercises/Exercises.jsx";
import Plans from "./components/Plans/Plans.jsx";

function App() {


    return (
        <div>
            <Header/>
            <main>
                <Plans/>
            </main>
            <Exercises/>
        </div>
    );
}

export default App;