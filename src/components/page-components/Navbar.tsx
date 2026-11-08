import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import NavLinks from './NavLinks'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog || !isOpen) return

    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'

    const desktop = window.matchMedia('(min-width: 768px)')
    const handleResize = () => {
      if (desktop.matches) setIsOpen(false)
    }

    desktop.addEventListener('change', handleResize)

    return () => {
      desktop.removeEventListener('change', handleResize)
      document.body.style.overflow = previousOverflow

      if (dialog.open) dialog.close()

      if (!desktop.matches) triggerRef.current?.focus()
    }
  }, [isOpen])

  return (
    <>
      <nav
        aria-label="Main navigation"
        className="absolute top-0 left-0 z-20 flex w-full
                   items-center justify-between px-6 py-4"
      >
        <Link
          to="/"
          className="text-lg font-semibold tracking-wide text-foreground"
        >
          MA
        </Link>

        <div className="hidden md:block">
          <NavLinks />
        </div>

        <button
          ref={triggerRef}
          type="button"
          className="flex size-11 items-center justify-center rounded-md
                     md:hidden focus-visible:outline-2
                     focus-visible:outline-accent-blue"
          aria-label="Open navigation"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen(true)}
        >
          <GiHamburgerMenu size={24} aria-hidden="true" />
        </button>
      </nav>

      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        aria-labelledby="mobile-navigation-title"
        className="fixed inset-0 m-0 h-dvh max-h-none w-screen
                   max-w-none border-0 bg-background p-0 text-foreground
                   backdrop:bg-black/60"
        onCancel={(event) => {
          event.preventDefault()
          setIsOpen(false)
        }}
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setIsOpen(false)
        }}
      >
        <h2 id="mobile-navigation-title" className="sr-only">
          Navigation
        </h2>

        <button
          type="button"
          autoFocus
          aria-label="Close navigation"
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-6 flex size-11 items-center
                     justify-center rounded-md focus-visible:outline-2
                     focus-visible:outline-accent-blue"
        >
          <IoMdClose size={28} aria-hidden="true" />
        </button>

        <div className="pointer-events-none flex min-h-full items-center
                        justify-center px-6 py-24">
          <div className="pointer-events-auto">
            <NavLinks
              isMobile
              onLinkClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      </dialog>
    </>
  )
}