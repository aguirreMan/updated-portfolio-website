import React, { useState } from 'react'
import NavLinks from './NavLinks'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      {/* HEADER */}
      <header className='w-full absolute top-0 left-0 flex justify-between items-center p-4 bg-transparent z-20'>
        <h1 className='text-3xl text-custom-text-color font-bold cursor-pointer'>
          <Link to='/'>MA</Link>
        </h1>
        <nav className='hidden md:flex gap-8 text-white font-medium mr-6 mt-4'>
          <NavLinks />
        </nav>

        <div className='md:hidden cursor-pointer' onClick={toggleMenu}>
          {isOpen ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
        </div>
      </header>

      {isOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-white z-30 flex
        justify-center items-center'
          onClick={toggleMenu}>
          <nav
            className='flex flex-col gap-4'
            onClick={(event) => {
              event.stopPropagation()
              toggleMenu()
            }}>
            <NavLinks />
          </nav>

        </div >
      )
      }
    </>
  )
}
