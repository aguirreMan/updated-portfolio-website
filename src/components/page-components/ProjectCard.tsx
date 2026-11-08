import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  className?: string
  title: string
  description: string
  stack: string[]
  liveLink?: string
  githubLink?: string
  blogSlug?: string
  preview?: { src: string; alt: string; width: number; height: number }
  featured?: boolean
}

export default function ProjectCard({
  className,
  title,
  description,
  stack,
  liveLink,
  githubLink,
  blogSlug,
  preview,
  featured = false,
}: ProjectCardProps) {

  return (
    <Card className={cn('flex flex-col hover:-translate-y-1 transition-all duration-200 motion-reduce:transform-none motion-reduce:transition-none', featured && 'border-t-2 border-t-accent-blue bg-gradient-to-br from-card to-background', className)}>
      {preview && (
        <div className="px-6">
          <img src={preview.src} alt={preview.alt} width={preview.width} height={preview.height} loading="lazy" decoding="async" className="aspect-[16/10] w-full rounded-lg border object-contain bg-background" />
        </div>
      )}
      <CardHeader>
        {featured && <p className="text-xs uppercase tracking-widest text-blue-400">Featured project</p>}
        <CardTitle className="text-xl">
          {featured ? <h3>{title}</h3> : <h2>{title}</h2>}
        </CardTitle>
        <p className="text-sm leading-6 text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
          >
            {tech}
          </Badge>
        ))}
      </CardContent>
      <CardFooter className="mt-auto flex flex-wrap items-center gap-3 min-h-8">
        {liveLink && (
          <Button size="sm" asChild>
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${featured ? 'Try demo' : 'Live demo'}: ${title} (opens in a new tab)`}
            >
              <ExternalLink size={13} className="mr-1.5" />
              {featured ? 'Try demo' : 'Live'}
            </a>
          </Button>
        )}
        {githubLink && (
          <Button size="sm" variant="secondary" asChild>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </Button>
        )}
        {blogSlug && (
          <Link
            to={`/projects/${blogSlug}`}
            aria-label={`Read ${title} case study`}
            className="ml-auto text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-blue"
          >
            Case study →
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}
