import { useState } from "react";
import FishCard from "./components/fishCard";
import fishData from "./fish.json";

function App() {
    const [caughtFish, setCaughtFish] = useState([]);

    function updateFish(newFish) {
        console.log(newFish);
        // You have to return brand new arrays or objects for react to notice
        // a change in the state
        setCaughtFish([...caughtFish, newFish.id]);
        console.log(caughtFish);
    }

    return (
        <div className="App">
            <h1>Fish Fish Fish</h1>
            {fishData
                .filter((fish) => !caughtFish.includes(fish.id))
                .map((fish) => (
                    <FishCard
                        key={fish.id}
                        fish={fish}
                        updateFish={updateFish}
                    />
                ))}
        </div>
    );
}

// exports the app function
export default App;
