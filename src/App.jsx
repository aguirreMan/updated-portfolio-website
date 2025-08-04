import React from 'react'
import Home from './components/pages/Home.jsx'
import './App.css'
import Layout from './components/Layout.jsx'
import About from './components/pages/About.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
