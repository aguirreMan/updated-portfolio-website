import { Outlet } from 'react-router-dom'
import Navbar from '../page-components/Navbar'
import Footer from '../page-components/Footer'

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
