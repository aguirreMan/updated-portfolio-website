import Home from './components/pages/Home.jsx'
import Layout from './components/page-components/Layout.jsx'
import About from './components/pages/About.jsx'
import Projects from './components/pages/Projects.jsx'
import Contact from './components/pages/Contact.jsx'
import NotFound from './components/pages/NotFound.jsx'
import CaseStudyLayout from './components/case-study/CaseStudyLayout.jsx'
import Recipe from './components/pages/case-studies/Recipe.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          {/*Case Study Routes */}
          <Route path="projects/recipe-study" element={<CaseStudyLayout key='recipe-study' />}>
            <Route index element={<Recipe />} />
          </Route>

          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
