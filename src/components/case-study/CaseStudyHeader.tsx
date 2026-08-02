import { ExternalLink, Github, type LucideIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface CaseStudyHeaderProps {
  projectType: string
  title: string
  summary: string
  stack: string[]
  liveLink?: string
  githubLink?: string
}

export default function CaseStudyHeader({ projectType, title, summary, stack, liveLink, githubLink }: CaseStudyHeaderProps) {
  const links: { href?: string; icon: LucideIcon; label: string }[] = [
    { href: liveLink, icon: ExternalLink, label: 'Live Demo' },
    { href: githubLink, icon: Github, label: 'GitHub' },
  ]

  return (
    <header className='pb-8 border-b border-border'>
      <p className='text-sm text-muted-foreground mb-4'>{projectType}</p>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='text-muted-foreground max-w-2xl leading-7 mt-4'>{summary}</p>

      {stack.length > 0 && (
        <div className='flex flex-wrap gap-2 mt-6'>
          {stack.map((tech) => (
            <Badge key={tech} variant='secondary'>{tech}</Badge>
          ))}
        </div>
      )}

      <div className='flex items-center gap-4 mt-8'>
        {links.map(({ href, icon: Icon, label }) =>
          href ? (
            <a
              key={label}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`${label} (opens in a new tab)`}
              className='flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors'
            >
              <Icon size={16} />
              <span>{label}</span>
            </a>
          ) : null
        )}
      </div>
    </header>
  )
}
