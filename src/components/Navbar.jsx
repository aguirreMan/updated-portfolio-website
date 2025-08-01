import React, { useState } from 'react'
import NavLinks from './NavLinks'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      {/* HEADER */}
      <header className='w-full absolute top-0 left-0 flex justify-between items-center p-4 bg-transparent z-20'>
        <h1 className='text-2xl text-blue-800 font-bold'>MA</h1>

        {/* NavLinks (Desktop Only) */}
        <div className='hidden md:flex gap-4'>
          <NavLinks />
        </div>

        {/* Hamburger / Close Icon (Mobile Only) */}
        <div className='md:hidden cursor-pointer' onClick={toggleMenu}>
          {isOpen ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
        </div>
      </header>

      {/* Mobile Menu (Only when isOpen is true) */}
      {isOpen && (
        <nav className='md:hidden absolute top-full left-0 w-full bg-white p-4 z-10 shadow-md'>
          <NavLinks />
        </nav>
      )}
    </>
  )
}
