import ProjectCard from '../page-components/ProjectCard'

export default function Projects() {
    const projectData = [
        {
            title: 'Gorilla AI',
            description: 'Full-stack AI image generation platform with auth, credits, and gallery.',
            stack: [
                'Next.js',
                'React',
                'TypeScript',
                'Tailwind',
                'shadcn/ui',
                'Tanstack Query',
                'Clerk',
                'Supabase',
                'Vercel',
            ],
            liveLink: 'https://google.com',
            githubLink: 'https://google.com',
        },
        {
            title: 'Recipe App',
            description: 'A recipe app i built to teach myself to cook new recipes using data from spoonacular api hosted on railway and vercel',
            stack: [
                'React',
                'React router',
                'Node Express JS',
                'Typescript',
                'Tailwind CSS',
                'Vercel',
                'Railway',
                'Vite'
            ],
            liveLink: 'https://google.com',
            githubLink: 'https://google.com'
        },
        {
            title: 'GameShop',
            description: 'A fictional online video game store built to learn more React practices with future rawg api for video game data',
            stack: [
                'React',
                'React Router',
                'Node Express JS',
                'Typescript',
                'Tailwind CSS',
                'Railway',
                'Vercel',
                'Vite'
            ],
            liveLink: 'https://google.com',
            githubLink: 'https://google.com'
        }
    ]
    return (
        <div className='min-h-screen px-6 py-20'>
            <div className='max-w-6xl mx-auto'>
                <div className='text-center mb-12'>
                    <h1 className='mb-4 text-4xl font-bold text-foreground'>
                        Projects
                    </h1>
                    <p className='mx-auto max-w-2xl text-muted-foreground'>
                        A selection of projects demonstrating my experience building
                        modern, scalable web applications.
                    </p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {projectData.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            stack={project.stack}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}