import "./App.css";
import Header from "./components/Header/Header.jsx";
import Exercises from "./components/Exercises/Exercises.jsx";
import Plans from "./components/Plans/Plans.jsx";
import PartsOfPlan from "./components/PartsOfPlan/PartsOfPlan.jsx";

function App() {


    return (
        <div>
            <Header/>
            <Plans/>
            <Exercises/>
        </div>
    );
}

export default App;