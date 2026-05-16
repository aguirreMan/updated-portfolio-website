import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'origin', label: 'Origin' },
  { id: 'why', label: 'Why I rebuilt it' },
  { id: 'decisions', label: 'Technical decisions' },
  { id: 'differently', label: "What I'd change" },
  { id: 'future', label: 'Future work' }
]

export default function CaseStudyLayout() {
  const [activeSection, setActiveSection] = useState('overview')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
    }, [])

    return (
      <div className='min-h-screen px-6 py-20'>
        <div className='max-w-5xl mx-auto'>
          <Link
            to='/projects'
            className='inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-10'
          >
            <ArrowLeft size={15} /> Back to projects
          </Link>

          <div className='flex gap-12'>
            <aside className='hidden md:block w-40 flex-shrink-0'>
              <nav className='sticky top-24 flex flex-col gap-1'>
                {sections.map(({ id, label }) => {
                  const isActive = activeSection === id
                  return (
                    <a
                      key={id}
                      href={`#${id}`}
                      aria-current={isActive ? 'location' : undefined}
                      className={`text-xs border-l-2 pl-3 py-1 transition-all duration-200 ${
                        isActive ? 'text-foreground border-primary' : 'text-muted-foreground border-border hover:text-foreground'
                      }`}
                    >
                      {label}
                    </a>
                  )
                })}
              </nav>
            </aside>

            <div className='flex-1 min-w-0'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    )
  }
