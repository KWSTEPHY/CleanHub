import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import Navbar from './components/Navbar/Navbar.tsx'
import './index.css'
// import AboutUs from './components/AboutUs.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    {/* <AboutUs />   */}
  </React.StrictMode>,
)
