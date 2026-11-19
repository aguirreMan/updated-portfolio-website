import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout() {
  const { pathname } = useLocation()
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (window.location.hash) return

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    mainRef.current?.focus({ preventScroll: true })
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed
                   focus:top-4 focus:left-4 focus:z-50
                   focus:rounded-md focus:bg-card
                   focus:px-4 focus:py-3 focus:text-foreground
                   focus:outline-2 focus:outline-accent-blue"
      >
        Skip to content
      </a>

      <header>
        <Navbar />
      </header>

      <main
        ref={mainRef}
        id="main-content"
        tabIndex={-1}
        className="flex-grow focus:outline-none"
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout