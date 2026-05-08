import { Link, Outlet } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function CaseStudyLayout() {
  return (
    <div className='min-h-screen px-6 py-20'>
      <div className='max-w-3xl mx-auto'>
        <Link to='/projects'
          className='text-muted-foreground hover:text-foreground'>
          <ArrowLeft size={15} /> Back to projects
        </Link>
        <Outlet />
      </div>
    </div>
  )
}
