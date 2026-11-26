import { lazy } from 'react'
import { BrowserRouter, Route, createRoutesFromElements, matchRoutes, useLocation, useRoutes } from 'react-router-dom'

import Home from '@/components/pages/Home'
import Layout from '@/components/page-components/Layout'
import NotFound from '@/components/pages/NotFound'
import CaseStudyLayout from '@/components/case-study/CaseStudyLayout'
import GoogleAnalyticsTracker from '@/components/page-components/GoogleAnalyticsTracker'

const About = lazy(() => import('@/components/pages/About'))
const Projects = lazy(() => import('@/components/pages/Projects'))
const Contact = lazy(() => import('@/components/pages/Contact'))

const Recipe = lazy(() => import('@/components/pages/case-studies/Recipe.mdx'))
const Gorilla = lazy(() => import('@/components/pages/case-studies/Gorilla.mdx'))
const JobsDashboard = lazy(() => import('@/components/pages/case-studies/JobsDashboard.mdx'))
const DragonBallz = lazy(() => import('@/components/pages/case-studies/DragonBallz.mdx'))

const homeTitle = 'Manuel Aguirre | Frontend Developer'

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} handle={{ title: 'About' }} />
    <Route path="projects" element={<Projects />} handle={{ title: 'Projects' }} />
    {/* Case Study Routes */}
    <Route path="projects/recipe-study" element={<CaseStudyLayout key='recipe-study' />}>
      <Route index element={<Recipe />} handle={{ title: 'Recipe App' }} />
    </Route>
    <Route path="projects/gorilla-ai" element={<CaseStudyLayout key='gorilla-ai' />}>
      <Route index element={<Gorilla />} handle={{ title: 'Gorilla AI' }} />
    </Route>
    <Route path="projects/jobs-dashboard" element={<CaseStudyLayout key='jobs-dashboard' />}>
      <Route index element={<JobsDashboard />} handle={{ title: 'Jobs Dashboard' }} />
    </Route>
    <Route path="projects/dragon-ballz" element={<CaseStudyLayout key='DragonBallz-study' />}>
      <Route index element={<DragonBallz />} handle={{ title: 'Dragon Ball Z' }} />
    </Route>
    <Route path="contact" element={<Contact />} handle={{ title: 'Contact' }} />
    <Route path="*" element={<NotFound />} handle={{ title: 'Page Not Found' }} />
  </Route>
)

function PortfolioRoutes() {
  const { pathname } = useLocation()
  const content = useRoutes(routes)
  const pageTitle: unknown = matchRoutes(routes, pathname)?.at(-1)?.route.handle?.title
  const title = typeof pageTitle === 'string' ? `${pageTitle} | Manuel Aguirre` : homeTitle

  return (
    <>
      <title>{title}</title>
      <GoogleAnalyticsTracker title={title} />
      {content}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <PortfolioRoutes />
    </BrowserRouter>
  )
}

export default App
