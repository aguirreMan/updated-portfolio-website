import { motion, useReducedMotion } from 'framer-motion'
import ProjectCard from '@/components/page-components/ProjectCard'
import { projectData } from '@/data/projects'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function Home() {
  const name = 'Manuel Aguirre'
  const reduceMotion = useReducedMotion()
  const featuredProjects = projectData.filter(project =>
    project.blogSlug === 'gorilla-ai' || project.blogSlug === 'dragon-ballz'
  )
  return (
    <>
      <section aria-labelledby="home-heading" className="relative w-full overflow-hidden">
        <img
          src="/assets/hero.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-[1]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-background/50 to-background"
        />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[65svh] pt-28 pb-16 text-center px-4">
          <motion.p
            className="text-sm uppercase tracking-widest text-blue-400 mb-3"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.6 }}
          >
            Frontend Engineer
          </motion.p>
          <h1 id="home-heading" className="text-4xl md:text-6xl font-bold text-white tracking-wider drop-shadow-md">
            {name.split('').map((character, index) => (
              <motion.span
                key={index}
                initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : index * 0.07 }}
              >
                {character}
              </motion.span>
            ))}
          </h1>
          <p className="text-white/70 text-xl mt-4 font-medium pb-6 tracking-wide max-w-xl">
            Building scalable, polished web applications with React, TypeScript, and modern tooling.
          </p>
          <Button size="lg" asChild>
            <a href="#featured-projects">Explore featured projects</a>
          </Button>
        </div>
      </section>
      <section id="featured-projects" aria-labelledby="featured-heading" className="px-6 py-12 md:py-16 scroll-mt-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 max-w-2xl">
            <h2 id="featured-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-3">Featured projects</h2>
            <p className="text-muted-foreground leading-relaxed">Explore how I build responsive interfaces, manage complex state, and turn application data into useful experiences.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map(project => (
              <article key={project.blogSlug} className="min-w-0 flex flex-col">
                <ProjectCard
                  featured
                  className="h-full"
                  title={
                    project.blogSlug === 'dragon-ballz'
                      ? 'Dragon Ball Z React Application'
                      : project.title
                  }
                  description={
                    project.blogSlug === 'gorilla-ai'
                      ? 'AI workflow with streaming conversations, authentication, and saved chat history.'
                      : 'Interactive character experience with custom power-level visualizations and reducer-driven game logic.'
                  }
                  stack={
                    project.blogSlug === 'gorilla-ai'
                      ? ['Next.js', 'React', 'TypeScript', 'Supabase']
                      : ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
                  }
                  liveLink={project.liveLink}
                  githubLink={project.githubLink}
                  blogSlug={project.blogSlug}
                />
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/projects">View all projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
