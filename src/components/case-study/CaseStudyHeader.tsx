import { ExternalLink, Github } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface CaseStudyHeaderProps {
  category: string
  title: string
  description: string
  stack: string[]
  liveLink: string
  githubLink: string
}

export default function CaseStudyHeader({ category, title, description, stack, liveLink, githubLink }: CaseStudyHeaderProps) {
  return (
    <header className='pb-8 border-b border-border'>
      <p className='text-sm text-muted-foreground mb-4'>{category}</p>
      <h1 className='text-3xl font-bold'>{ title }</h1>
      <p className='text-muted-foreground max-w-2xl leading-7 mt-4'>{description}</p>

      <div className='flex flex-wrap gap-2 mt-6'>
        {stack.map((tech) => (
          <Badge key={tech} variant='secondary'>{tech}</Badge>
        ))}
      </div>
      <div className='flex items-center gap-4 text-sm text-muted-foreground mt-8 transition-colors'>
        <a href={liveLink} target='_blank' rel='noopener noreferrer'
          className='flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors'
        >
          <ExternalLink size={16} />
          <span>Live Demo</span>
        </a>
        <a href={githubLink} target='_blank' rel='noopener noreferrer'
          className='flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors'>
          <Github size={16} />
          <span>GitHub</span>
        </a>
      </div>
    </header>
  )
}
