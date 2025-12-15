import { useState } from 'react'
import NavLinks from './NavLinks'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  function closeMobileMenu() {
    setIsOpen(false)
  }

  return (
    <>
      {/* HEADER */}
      <header className='w-full absolute top-0 left-0 flex justify-between items-center px-6 py-4 z-20'>
        <h1 className='text-3xl font-bold'>
          <Link className='text-[#259cf6] hover:text-[#005de2] transition-colors' to='/'>
            MA
          </Link>
        </h1>

        {/* Desktop Nav */}
        <div className='hidden md:block'>
          <NavLinks />
        </div>

        {/* Mobile Hamburger */}
        <button
          className='md:hidden text-white hover:text-[#005de2] transition-colors'
          onClick={toggleMenu}
          aria-label='Toggle menu'
        >
          {isOpen ? <IoMdClose size={28} /> : <GiHamburgerMenu size={28} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-gradient-to-b from-[#00215b] via-[#131c29] to-[#101018] z-30 flex justify-center items-center'
          onClick={toggleMenu}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <NavLinks isMobile onLinkClick={closeMobileMenu} />
          </div>
        </div>
      )}
    </>
  )
}