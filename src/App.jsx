import Home from './components/pages/Home.jsx'
import Layout from './components/page-components/Layout.jsx'
import About from './components/pages/About.jsx'
import Projects from './components/pages/Projects.jsx'
import Contact from './components/pages/Contact.jsx'
import NotFound from './components/pages/NotFound.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
