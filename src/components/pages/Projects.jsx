import React from 'react'
import ProjectCard from './ProjectCard'

export default function Projects() {
    const projectData = [
        { title: 'resume', description: 'view my education resume' },
        { title: 'Recipe App', description: 'Built with React typescript, Tailwind, Node, express' },
        { title: 'Dashboard', description: 'Built with React typescript tailwind' }
    ]
    return (
        <div className='backdrop-grayscale-50 mt-20'>
            <h1 className='text-3xl text-custom-text-color mt-10 flex justify-center pb-10'>My Projects</h1>
            <div className='flex justify-center gap-8'>
                {projectData.map((project, index) => {
                    return <ProjectCard key={index} title={project.title} description={project.description} />
                })}
            </div>
        </div>
    )
}