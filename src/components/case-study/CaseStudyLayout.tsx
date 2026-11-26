import { useState, useEffect, useRef } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import { ArrowLeft } from 'lucide-react'
import { mdxComponents } from '@/components/case-study/mdxComponents'

interface Section {
  id: string
  label: string
}

export default function CaseStudyLayout() {
  const { pathname, hash } = useLocation()
  const contentRef = useRef<HTMLDivElement>(null)
  const [sections, setSections] = useState<Section[]>([])
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const elements = Array.from(contentRef.current?.querySelectorAll<HTMLElement>('section[id]') ?? [])

    setSections(elements.map((element) => (
      {
        id: element.id,
        label: element.querySelector('h2')?.textContent?.trim() || element.id,
      }))
    )
    setActiveSection(elements[0]?.id ?? '')

    if (elements.length === 0) return

    let observer: IntersectionObserver | undefined
    let rootMargin = ''

    function observeSections() {
      const height = document.documentElement.clientHeight
      const top = Math.min(96, Math.max(0, height - 32))
      const bottom = Math.min(height, Math.max(top + 32, Math.round(height * 0.35)))
      // Percentage root margins use viewport width, including on the vertical axis.
      const nextMargin = `${-top}px 0px ${bottom - height}px 0px`
      if (nextMargin === rootMargin) return

      rootMargin = nextMargin
      observer?.disconnect()

      const intersecting = new Set<Element>()
      observer = new IntersectionObserver((entries, currentObserver) => {
        if (currentObserver !== observer) return

        for (const { target, isIntersecting } of entries) {
          if (isIntersecting) intersecting.add(target)
          else intersecting.delete(target)
        }

        const firstVisible = elements.find((element) => intersecting.has(element))
        if (firstVisible) setActiveSection(firstVisible.id)
      }, { rootMargin })

      for (const element of elements) observer.observe(element)
    }

    observeSections()
    window.addEventListener('resize', observeSections)

    return () => {
      window.removeEventListener('resize', observeSections)
      observer?.disconnect()
      observer = undefined
    }

  }, [pathname])

  useEffect(() => {
    if (!hash) return

    let id: string

    try {
      id = decodeURIComponent(hash.slice(1))
    } catch {
      return
    }

    const section = document.getElementById(id)

    if (section && contentRef.current?.contains(section)) {
      section.scrollIntoView({
        behavior: 'instant',
        block: 'start',
      })
    }
  }, [pathname, hash])

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
              <nav aria-label="Case study sections" className='sticky top-24 flex flex-col gap-1'>
                {sections.map(({ id, label }) => {
                  const isActive = activeSection === id
                  return (
                    <a
                      key={id}
                      href={`#${id}`}
                      aria-current={isActive ? 'location' : undefined}
                      className={`text-xs border-l-2 pl-3 py-1 transition-all duration-200 ${isActive
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
