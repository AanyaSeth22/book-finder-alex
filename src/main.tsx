import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx' // 💡 Ensure this imports your App component
import './index.css'        // 💡 Ensure this imports your cleaned CSS

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App /> {/* 💡 Ensure the App component is rendered here */}
  </React.StrictMode>,
)
