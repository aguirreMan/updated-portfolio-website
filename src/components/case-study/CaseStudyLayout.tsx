import { useState, useEffect, useRef } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import { ArrowLeft } from 'lucide-react'
import { mdxComponents } from '@/components/case-study/mdxComponents'

const NAV_LABELS: Record<string, string> = {
  differently: 'If I started over',
  future: 'Future work',
}

interface Section {
  id: string
  label: string
}

export default function CaseStudyLayout() {
  const { pathname } = useLocation()
  const contentRef = useRef<HTMLDivElement>(null)
  const [sections, setSections] = useState<Section[]>([])
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)

    const elements = Array.from(contentRef.current?.querySelectorAll<HTMLElement>('section[id]') ?? [])

    setSections(
      elements.map((element) => ({
        id: element.id,
        label:
          NAV_LABELS[element.id] ??
          element.querySelector('h2')?.textContent?.trim() ??
          element.id,
      }))
    )
    setActiveSection(elements[0]?.id ?? '')

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-96px 0px -65% 0px' }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [pathname])

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
          {sections.length > 0 && (
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
                        isActive
                          ? 'text-foreground border-primary'
                          : 'text-muted-foreground border-border hover:text-foreground'
                      }`}
                    >
                      {label}
                    </a>
                  )
                })}
              </nav>
            </aside>
          )}

          <div ref={contentRef} className='flex-1 min-w-0'>
            <MDXProvider components={mdxComponents}>
              <Outlet />
            </MDXProvider>
          </div>
        </div>
      </div>
    </div>
  )
}
