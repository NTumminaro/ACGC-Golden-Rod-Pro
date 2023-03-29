import { useState } from 'react'

// these imported the svg files and are no longer needed if they dont exist (I deleted the one in public, but left the one in assets for reference)
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// we can import css directly into these jsx files, and I think thats so cool
import './App.css'

function App() {
  // sets constants as well as a function for count as a constant, the function is defined later
  // usestate seems to be built into react, probably in the react docs
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        {/* these logos no longer exist, but they were being exported from svg files, so im commenting them out right now for reference */}

        {/* svg files are a way of quick rendering images on a webpage, but as far as I'm aware they are not necessary at all, espcially with something like this that isn't super compilcated, but we'll see... */}
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Fish Fish Fish</h1>
      <div className="card">
        {/* setCount is defined here */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}
// exports the app function 
export default App
