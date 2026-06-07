import { Link } from 'react-router-dom'
import { Coffee } from 'lucide-react'
import { Button } from '../ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-center px-6">
      <Coffee className="w-12 h-12 text-amber-500" strokeWidth={1.5} />
      <h1 className="text-4xl font-bold text-foreground">
        This page took a coffee break.
      </h1>
      <p className="text-muted-foreground max-w-sm">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Button asChild className="mt-2">
        <Link to="/">Back to home</Link>
      </Button>
    </div>
  )
}
