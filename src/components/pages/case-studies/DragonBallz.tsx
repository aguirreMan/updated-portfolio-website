import CaseStudyHeader from '@/components/case-study/CaseStudyHeader'
import CaseStudySection from '@/components/case-study/CaseStudySection'

export default function DragonBallZ() {
  const stack = ['React', 'Tailwind CSS', 'Radix UI', 'React Router', 'Netlify', 'Framer Motion']
  return (
    <div className='flex flex-col gap-14'>
      <CaseStudyHeader
        projectType='Frontend Weirdness'
        title='Dragon Ball Z'
        summary='A React app for exploring the Dragon Ball Z universe — characters, planets, and transformations, built as a playground for animation and state management.'
        stack={stack}
        githubLink='https://github.com/aguirreMan/dragonball-z-react-application'
        liveLink='https://relaxed-meerkat-4ede1d.netlify.app/'
      />

      <CaseStudySection
        id='overview'
        title='Overview'
        description='What started as a fun way to practice React turned into a deep dive on component architecture and data visualization.'
      >
        <p className='text-muted-foreground leading-7 max-w-2xl'>
          Dragon Ball Z is a React application built around exploring characters,
          planets, transformations, and interactive gameplay from the Dragon Ball
          universe. While the project began as a fun way to practice frontend
          development, it gradually evolved into a playground for experimenting with
          component architecture, complex state management, reusable UI patterns,
          animation, and data visualization.
        </p>
      </CaseStudySection>

      <CaseStudySection
        id='origin'
        title='How it started'
        description='It started as a fun interactive project that gradually became a fun frontend challenge.'
      >
        <p className='text-muted-foreground leading-7 max-w-2xl'>
          I originally built this project because I wanted something enjoyable to work
          on while continuing to strengthen my React skills. Rather than recreating
          another CRUD application, I wanted a project that encouraged experimentation
          with animations, interactive UI, and custom frontend architecture. As more
          ideas were added, the project naturally grew beyond its original scope and
          introduced engineering problems I did not anticipate.
        </p>
      </CaseStudySection>

      <CaseStudySection
        id='challenges'
        title='Challenges encountered'
        description='The hardest problems were the ones that looked simple on the surface.'
      >
        <div className='flex flex-col gap-6 max-w-2xl'>
          <div>
            <p className='text-foreground font-medium mb-2'>Creating the Arena based game</p>
            <p className='text-muted-foreground leading-7'>
              My initial implementation relied on multiple independent useState hooks.
              As the Arena feature expanded, selecting fighters, tracking battle
              phases, determining winners, and resetting the game all became closely
              connected. Managing these relationships independently quickly became
              difficult, leading me to redesign the feature around useReducer where
              state transitions could be modeled more predictably.
            </p>
          </div>
          <div>
            <p className='text-foreground font-medium mb-2'>Representing power levels</p>
            <p className='text-muted-foreground leading-7'>
              Character power levels ranged from the low thousands to values beyond
              JavaScript's safe integer range — some characters even had unknown or
              googolplex-scale values in the API data. A linear progress bar became
              meaningless because almost every weaker character appeared as 0%.
              I ended up parsing these values into BigInt and applying logarithmic
              scaling, along with custom utilities to handle missing or malformed
              data gracefully, so the UI stayed useful across the entire roster.
            </p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection
        id='decisions'
        title='Technical decisions'
        description='Every major library solved a specific engineering problem.'
      >
        <div className='flex flex-col gap-6 max-w-2xl'>
          <div>
            <p className='text-foreground font-medium mb-2'>Radix UI</p>
            <p className='text-muted-foreground leading-7'>
              Rather than relying entirely on prebuilt component libraries,
              I chose Radix UI because it provides accessible primitives while still allowing complete control
              over styling. This made it possible to create a UI that matched the Dragon Ball aesthetic without
              sacrificing accessibility or reusability.
            </p>
          </div>
          <div>
            <p className='text-foreground font-medium mb-2'>Framer Motion</p>
            <p className='text-muted-foreground leading-7'>
              When building this project I realized that just showing characters and planet
              transformations without any animation wasn't engaging enough. Framer Motion helped bring
              the project to life with smooth, natural transitions between states.
            </p>
          </div>
          <div>
            <p className='text-foreground font-medium mb-2'>useReducer</p>
            <p className='text-muted-foreground leading-7'>
              The Arena feature contains multiple pieces of state that depend on one
              another. Modeling the game as reducer actions created a more predictable
              state machine than coordinating numerous independent useState hooks.
            </p>
          </div>
          <div>
            <p className='text-foreground font-medium mb-2'>Tailwind CSS, React Router, Netlify</p>
            <p className='text-muted-foreground leading-7'>
              Tailwind kept styling fast and consistent across a growing component set,
              React Router handled navigation between character, planet, and arena views,
              and Netlify gave me quick, zero-config deploys straight from GitHub.
            </p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection
        id='differently'
        title="What I'd change if I started over today"
        description='Testing would come first, not last.'
      >
        <p className='text-muted-foreground leading-7'>
          If I rebuilt the project today, I would introduce automated testing much
          earlier, particularly around utility functions responsible for parsing power
          levels and coordinating Arena game logic. I would also continue improving
          component organization and documentation as the project grows.
        </p>
      </CaseStudySection>

      <CaseStudySection
        id='future'
        title='Future work and improvements'
        description='Where the product goes next.'
      >
        <p className='text-muted-foreground leading-7 max-w-2xl'>
          Future iterations will focus on expanding automated test coverage with
          Vitest, documenting reusable components with Storybook, and continuing to
          refine the application's architecture. Longer term, I would also like to
          experiment with Three.js to create interactive visualizations that enhance
          the Dragon Ball experience.
        </p>
      </CaseStudySection>
    </div>
  )
}
