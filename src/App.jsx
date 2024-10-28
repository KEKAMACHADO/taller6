import React from 'react'
import './App.css'
import Home from '../src/pages/home/Home'
import Navbar from '../src/pages/navbar/Navbar'

function App() {
 
  return (
    <>
    <div className="App">
      <Navbar/>
      <Home />
    </div>
    </>
  )
}

export default App
