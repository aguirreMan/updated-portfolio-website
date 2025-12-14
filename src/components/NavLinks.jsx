import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NavLinks() {

    function styleLinks({ isActive }) {
        return isActive
            ? 'text-[#89a4d1] font-semibold border-b-2 border-[#005de2] pb-1'
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