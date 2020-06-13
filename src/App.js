import React from 'react'
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import './App.css'

function App() {
  return (
    <div className="App">
      <Route component={NavBar} />
      <Route component={LandingPage} />
    </div>
  )
}

export default App
