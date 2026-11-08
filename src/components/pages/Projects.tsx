import { projectData } from '@/data/projects'
import ProjectCard from '@/components/page-components/ProjectCard'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'


export default function Projects() {
  return (
    <div className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="mb-4 text-4xl font-bold text-foreground">Projects</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A selection of projects demonstrating my experience building modern, scalable web applications.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projectData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <div className='flex justify-center pt-14'>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">Let's get in touch!</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
