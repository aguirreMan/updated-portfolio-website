import { useState } from 'react'
import NavLinks from '../page-components/NavLinks'
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
            {/* Header */}
            <header className='w-full absolute top-0 left-0 flex justify-between items-center px-6 py-4 z-20'>
                <Link
                    to='/'
                    className='text-lg font-semibold tracking-wide text-muted-foreground 
                    transition-colors hover:text-foreground'
                >
                    MA
                </Link>

                {/* Desktop Nav */}
                <div className='hidden md:block'>
                    <NavLinks />
                </div>

                {/* Mobile Hamburger */}
                <button
                    className='md:hidden text-muted-foreground hover:text-foreground transition-colors'
                    onClick={toggleMenu}
                    aria-label='Toggle menu'
                >
                    {isOpen ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
                </button>
            </header>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    className='fixed inset-0 z-30 flex justify-center items-center bg-background'
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