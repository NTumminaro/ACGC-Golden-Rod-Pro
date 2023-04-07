import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // react.strictmode seems to be a debugging tool and is most likely not needed
  // calls the App function that is being exported from App.jsx
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
