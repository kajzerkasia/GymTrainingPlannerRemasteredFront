import './App.css'
import Header from "./components/Header/Header.jsx";
import Plan from "./components/Plan.jsx";
import {PLANS} from "./data.js";

function App() {

  return (
    <div>
        <Header/>
        <main>
            <section id="plans">
                <h2>Plany</h2>
                <ul>
                    {PLANS.map((plan) => (
                        <Plan key={plan.title} {...plan}/>
                    ))}
                </ul>
            </section>
        </main>
    </div>
  )
}

export default App
