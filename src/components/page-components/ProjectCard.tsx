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
}

export default function ProjectCard({
  className,
  title,
  description,
  stack,
  liveLink,
  githubLink,
  blogSlug,
}: ProjectCardProps) {

  return (
    <Card className={cn('flex flex-col hover:-translate-y-1 transition-all duration-200', className)}>
      <CardHeader>
        <CardTitle className="text-xl">
          {title}
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
            >
              <ExternalLink size={13} className="mr-1.5" />
              Live
            </a>
          </Button>
        )}
        {githubLink && (
          <Button size="sm" variant="secondary" asChild>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              Code
            </a>
          </Button>
        )}
        {blogSlug && (
          <Link
            to={`/projects/${blogSlug}`}
            className="ml-auto text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1"
          >
            Case study →
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}
