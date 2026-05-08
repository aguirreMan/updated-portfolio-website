import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'

export default function ProjectCard({ title, description, stack, liveLink, githubLink, blogSlug }) {
  return (
    <Card className="flex flex-col hover:-translate-y-1 transition-all duration-200">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <Badge key={tech} variant="secondary">{tech}</Badge>
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
            to={`/blog/${blogSlug}`}
            className="ml-auto text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1"
          >
            Case study →
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}
