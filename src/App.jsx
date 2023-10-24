import './App.css'
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import {PLANS} from "./data.js";
import Card from "./components/UI/Card.jsx";
import {useState} from "react";

function App() {
    const [selectedPlan, setSelectedPlan] = useState();

    const handleSelect = selectedButton => {
        setSelectedPlan(selectedButton);
    };

    return (
        <div>
            <Header/>
            <main>
                <Card>
                    <section id="plans" className="plans-buttons">
                        <h2>Plany</h2>
                        <ul>
                            {PLANS.map((plan) => (
                                <TabButton
                                    key={plan.title}
                                    {...plan}
                                    isSelected={selectedPlan === `${plan.title}`}
                                    onSelect={() => handleSelect(`${plan.title}`)}
                                    >
                                    {plan.title}
                                </TabButton>
                            ))}
                        </ul>
                    </section>
                </Card>
            </main>
        </div>
    )
}

export default App
