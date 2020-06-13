import React from 'react'
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  return (
    <div className="App">
      <Route component={NavBar} />
    </div>
  )
}

export default App
