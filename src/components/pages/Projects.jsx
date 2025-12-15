import React from 'react'
import ProjectCard from './ProjectCard'

export default function Projects() {
    const projectData = [
        { title: 'resume', description: 'view my education resume' },
        { title: 'Recipe App', description: 'Built with React typescript, Tailwind, Node, express' },
        { title: 'Dashboard', description: 'Built with React typescript tailwind' }
    ]
    return (
        <div className='bg-gradient-to-b from-[#00215b] via-[#131c29] to-[#101018] min-h-screen flex flex-col items-center pt-10'>
            <h1 className='text-3xl text-custom-text-color pb-10 mt-20'>My Projects</h1>
            <div className='flex justify-center gap-8 flex-wrap'>
                {projectData.map((project, index) => {
                    return <ProjectCard key={index} title={project.title} description={project.description} />
                })}
            </div>
        </div>
    )
}