import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' }
]

export default function NavLinks({ isMobile = false, onLinkClick }) {

    function closeMobileMenu() {
        if (isMobile && onLinkClick) {
            onLinkClick()
        }
    }

    return (
        <nav className={isMobile ? 'flex flex-col gap-6 text-2xl' : 'flex gap-8'}>
            {links.map((link) => (
                <NavLink
                    key={link.to}
                    to={link.to}
                    viewTransition
                    className='relative pb-1'
                    onClick={closeMobileMenu}
                >
                    {({ isActive }) => (
                        <>
                            <span
                                className={
                                    isActive
                                        ? 'text-[#89a4d1] font-bold'
                                        : 'text-white hover:text-[#005de2] transition-colors duration-200'
                                }
                            >
                                {link.label}
                            </span>
                            {isActive && !isMobile && (
                                <motion.div
                                    layoutId='underline'
                                    className='absolute left-0 right-0 -bottom-1 h-[2px] bg-[#005de2]'
                                    transition={{
                                        type: 'spring',
                                        stiffness: 500,
                                        damping: 30
                                    }}
                                />
                            )}
                        </>
                    )}
                </NavLink>
            ))}
        </nav>
    )
}