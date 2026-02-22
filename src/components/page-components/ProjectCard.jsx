import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'

export default function ProjectCard({
  title,
  description,
  stack,
  liveLink,
  githubLink,
}) {
  return (
    <Card className="flex flex-col hover:-translate-y-1 transition">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>

      <CardContent className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <Badge key={tech} variant="secondary">
            {tech}
          </Badge>
        ))}
      </CardContent>
      <CardFooter className="mt-auto flex gap-3">
        <Button size="sm" asChild>
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            Live
          </a>
        </Button>
        <Button size="sm" variant="secondary" asChild>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            Code
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
