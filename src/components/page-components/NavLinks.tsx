import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const links = [
  { label: 'Home', to: '/', end: true },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
  { label: 'Resume', to: '/assets/Updated_Manuel_Aguirre_Resume.pdf', external: true },
]

interface NavLinksProps {
  isMobile?: boolean
  onLinkClick?: () => void
}

export default function NavLinks({ isMobile = false, onLinkClick }: NavLinksProps) {
  function closeMobileMenu() {
    if (isMobile && onLinkClick) {
      onLinkClick()
    }
  }

  return (
    <nav className={isMobile ? 'flex flex-col gap-6 text-2xl' : 'flex gap-8'}>
      {links.map((link) =>
        link.external ? (
          <a
            key={link.to}
            href={link.to}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            onClick={closeMobileMenu}
          >
            {link.label}
          </a>
        ) : (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            viewTransition
            className="relative pb-1"
            onClick={closeMobileMenu}
          >
            {({ isActive }) => (
              <>
                <span
                  className={
                    isActive
                      ? 'text-foreground font-semibold'
                      : 'text-muted-foreground hover:text-foreground transition-colors duration-200'
                  }
                >
                  {link.label}
                </span>
                {isActive && !isMobile && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-primary"
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </>
            )}
          </NavLink>
        )
      )}
    </nav>
  )
}
