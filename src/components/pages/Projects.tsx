import ProjectCard from '@/components/page-components/ProjectCard'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'


const projectData = [
  {
    title: 'Gorilla AI',
    isFeatured: true,
    description: 'AI-powered learning platform that adapts conversations to a user’s skill level while supporting authenticated chat sessions, persistent history, and structured learning workflows.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'shadcn/ui', 'Clerk', 'Supabase', 'Vercel'],
    liveLink: 'https://gorilla-ai-theta.vercel.app/',
    githubLink: 'https://github.com/aguirreMan/gorilla-ai',
    blogSlug: 'gorilla-ai',
  },
  {
    title: 'Recipe App',
    description:
      'Full-stack recipe discovery app powered by the Spoonacular API. Search, browse, and save recipes with a Node/Express backend and a React frontend.',
    stack: ['React', 'TypeScript', 'React Router', 'Node.js', 'Express', 'Tailwind CSS', 'Vercel', 'Railway', 'Vite'],
    liveLink: 'https://react-recipe-blush.vercel.app/',
    githubLink: 'https://github.com/aguirreMan/react-recipe',
    blogSlug: 'recipe-study',
  },
  {
    title: 'Dragon Ball Z',
    description: `
      Interactive React application featuring reducer-driven game logic, reusable UI components, animations, and custom power-level visualizations inspired by the Dragon Ball universe.
    `,
    stack: ['React', 'TypeScript', 'React Router', 'Tailwind CSS', 'Framer Motion', 'Radix UI', 'Netlify'],
    liveLink: 'https://relaxed-meerkat-4ede1d.netlify.app/',
    githubLink: 'https://github.com/aguirreMan/dragonball-z-react-application',
    blogSlug: 'dragon-ballz',
  },
]

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
            <ProjectCard key={project.title}
              className={project.isFeatured ? 'md:col-span-2' : 'md:col-span-1'}
              {...project} />
          ))}
        </div>
        <div className='flex justify-center pt-14'>
          <Link to="/contact">
            <Button variant='secondary' size='lg'>Let's get in touch!</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
