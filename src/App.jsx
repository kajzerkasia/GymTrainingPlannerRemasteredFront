import './App.css'
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import {PARTS_OF_PLANS, PLANS} from "./data.js";
import Card from "./components/UI/Card.jsx";
import {useState} from "react";

function App() {
    const [selectedPlan, setSelectedPlan] = useState();

    const handleSelect = selectedButton => {
        setSelectedPlan(selectedButton);
    };

    let tabContent = <p>Wybierz plan</p>;

    if (selectedPlan) {
        tabContent = (
            <div id="tab-content">
                <section id="parts_of_plans" className="plans-buttons">
                    <ul>
                        <Card className="card-brighter">
                        {PARTS_OF_PLANS.map((partOfPlan) => (
                            <TabButton
                                key={partOfPlan.title}
                                {...partOfPlan}
                                isSelected={selectedPlan === `${partOfPlan.title}`}
                                onSelect={() => handleSelect(`${partOfPlan.title}`)}
                            >
                                {partOfPlan.title}
                            </TabButton>
                        ))}
                        </Card>
                    </ul>
                </section>
            </div>
        );
    }


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
                    <section>
                        {tabContent}
                    </section>
                </Card>
            </main>
        </div>
    )
}

export default App
