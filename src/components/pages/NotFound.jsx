import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center pt-28 text-primary-foreground">
      <h1 className="text-4xl font-bold">404 - Not Found</h1>
      <p className='p-12 text-3xl font-bold'>This page could not be found</p>
      <Button asChild>
        <Link to="/" className="underline font-medium">
          Go back home
      </Link>
    </Button>
    </div>
  )
}
