import React from 'react'
import Home from './components/pages/Home.jsx'
import './App.css'
import Navbar from './components/pages/Navbar.jsx'
import About from './components/pages/About.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
