import Home from '@/components/pages/Home'
import Layout from '@/components/page-components/Layout'
import About from '@/components/pages/About'
import Projects from '@/components/pages/Projects'
import Contact from '@/components/pages/Contact'
import NotFound from '@/components/pages/NotFound'
import CaseStudyLayout from '@/components/case-study/CaseStudyLayout'
import Recipe from '@/components/pages/case-studies/Recipe'
import Portfolio from '@/components/pages/case-studies/Portfolio'
import Gorilla from '@/components/pages/case-studies/Gorilla'

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
          <Route path="projects/portfolio-evolution" element={<CaseStudyLayout key='portfolio-evolution' />}>
            <Route index element={<Portfolio />} />
          </Route>
          <Route path="projects/gorilla-ai" element={<CaseStudyLayout key='gorilla-ai' />}>
            <Route index element={<Gorilla />} />
          </Route>

          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
