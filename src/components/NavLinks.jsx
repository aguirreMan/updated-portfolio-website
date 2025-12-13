import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function NavLinks() {
    function styleLinks({ isActive }) {
        isActive
            ? 'text-[#005de2] font-semibold border-b-2 border-[#005de2] pb-1'
            : 'text-white hover:text-[#005de2] transition-colors duration-200'
    }
    return (
        <>
            <NavLink to='/' className={styleLinks}>
                Home
            </NavLink>
            <NavLink to='/about' className={styleLinks}>
                About
            </NavLink>
            <NavLink to='/projects' className={styleLinks}>
                Projects
            </NavLink>
            <NavLink to='/contact' className={styleLinks}>
                Contact
            </NavLink>
        </>
    )
}

