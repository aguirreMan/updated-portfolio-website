import { useState, useEffect } from 'react'
import NavLinks from '../page-components/NavLinks'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e) => { if (e.key === 'Escape') setIsOpen(false) }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen])

  return (
    <>
      <nav className="w-full absolute top-0 left-0 flex justify-between items-center px-6 py-4 z-20">
        <Link
          to="/"
          className="text-lg font-semibold tracking-wide text-foreground
                     transition-colors hover:text-primary"
        >
          MA
        </Link>
        <div className="hidden md:block">
          <NavLinks />
        </div>
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 z-30 flex justify-center items-center bg-background"
          onClick={() => setIsOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <NavLinks isMobile onLinkClick={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </>
  )
}
