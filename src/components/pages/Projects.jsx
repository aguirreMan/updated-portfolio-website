import ProjectCard from '../page-components/ProjectCard'

const projectData = [
  {
    title: 'Gorilla AI',
    description:
      'AI-powered learning accelerator — conversational, adaptive to skill level, and scoped to research and learning workflows. Built with full auth, rate limiting, and chat persistence.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'shadcn/ui', 'TanStack Query', 'Clerk', 'Supabase', 'Vercel'],
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
    title: 'Portfolio Website',
    description: `
      A multi-page developer portfolio focused on long-form case studies,
      reusable UI architecture, and documenting the evolution of projects
      through engineering decisions and technical tradeoffs.
    `,
    stack: ['React', 'React Router', 'Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Netlify'],
    liveLink: 'https://manuelaguirre.dev/',
    githubLink: 'https://github.com/aguirreMan/updated-portfolio-website',
    blogSlug: 'portfolio-evolution',
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Work</p>
          <h1 className="mb-4 text-4xl font-bold text-foreground">Projects</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A selection of projects demonstrating my experience building modern, scalable web applications.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}
