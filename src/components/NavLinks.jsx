import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function NavLinks() {
    return (
        <>
            <NavLink to='/' className={({ isActive }) =>
                isActive ? 'text-gray-600 underline' : 'hover:underline'}>Home</NavLink>
            <NavLink to='/About' className={({ isActive }) =>
                isActive ? 'text-gray-600 underline' : 'hover:underline'}>About</NavLink>
            <NavLink to='/Projects' className={({ isActive }) =>
                isActive ? 'text-gray-600 underline' : 'hover:underline'}>Projects</NavLink>
            <NavLink to='/Contact' className={({ isActive }) =>
                isActive ? 'text-gray-600 underline' : 'hover:underline'}>Contact</NavLink>
        </>
    )
}

