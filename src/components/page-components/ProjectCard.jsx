import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ProjectCard({ className, title, description, stack, liveLink, githubLink, blogSlug, isFeatured }) {
  return (
    <Card className={cn('flex flex-col hover:-translate-y-1 transition-all duration-200',
      isFeatured ? "border-primary/40 bg-primary/[0.02] shadow-md" : "", className)}>
      <CardHeader>
        {isFeatured && (
          <Badge className="text-xs uppercase tracking-widest mb-1">
            Flagship Project
          </Badge>
        )}
        <CardTitle className="text-xl">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className={isFeatured ? "bg-primary/10 text-primary hover:bg-primary/20 border-transparent shadow-none" : ""}
          >
            {tech}
          </Badge>
        ))}
      </CardContent>
      <CardFooter className="mt-auto flex items-center gap-3">
        <Button size="sm" asChild>
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={13} className="mr-1.5" /> Live
          </a>
        </Button>
        <Button size="sm" variant="secondary" asChild>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            Code
          </a>
        </Button>
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
