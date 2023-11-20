import "./App.css";
import Header from "./components/Header/Header.jsx";
import Plans from "./components/Plans/Plans.jsx";
import PartsOfPlan from "./components/PartsOfPlan/PartsOfPlan.jsx";
import React from "react";
import Exercises from "./components/Exercises/Exercises.jsx";
import {InputContextProvider} from "./store/input-context.jsx";

function App() {


    return (
        <div>
            <InputContextProvider>
            <Header/>
            <Plans/>
            <PartsOfPlan/>
            <Exercises/>
            </InputContextProvider>
        </div>
    );
}

export default App;