import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function NavLinks() {
    return (
        <>
            <NavLink to='/' className={({ isActive }) =>
                isActive ? 'underline' : 'hover:underline'}>Home</NavLink>
            <NavLink to='/About' className={({ isActive }) =>
                isActive ? 'underline' : 'hover:underline'}>About</NavLink>
            <NavLink to='/Projects' className={({ isActive }) =>
                isActive ? 'underline' : 'hover:underline'}>Projects</NavLink>
            <NavLink to='/Contact' className={({ isActive }) =>
                isActive ? 'underline' : 'hover:underline'}>Contact</NavLink>
        </>
    )
}

