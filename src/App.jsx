import { useState } from 'react'
import FishCard from './components/fishCard'

function App() {
  const [caughtFish, setCaughtFish] = useState(Array(40).fill(null))

  function updateFish(newFish) {
    caughtFish.shift();
    caughtFish.push(newFish);
    setCaughtFish(caughtFish);
    console.log(caughtFish);
  };

  return (
    <div className="App">
      <h1>Fish Fish Fish</h1>
      {/* possibly loop? */}
      <FishCard fishUpdate={updateFish} />
    </div>
  )
}

// exports the app function 
export default App