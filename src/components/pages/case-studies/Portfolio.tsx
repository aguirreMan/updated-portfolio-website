import CaseStudyHeader from '@/components/case-study/CaseStudyHeader'
import CaseStudySection from '@/components/case-study/CaseStudySection'

const stack = ['React', 'React Router', 'Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Netlify']

export default function Portfolio() {
  return (
    <div className='flex flex-col gap-14'>
      <CaseStudyHeader
        category='Frontend Architecture'
        title='Portfolio website'
        description='Multi-page developer portfolio focused on long-form case studies, reusable UI architecture, and documenting project evolution through engineering decisions and technical tradeoffs.'
        stack={stack}
        githubLink='https://github.com/aguirreMan/updated-portfolio-website'
        liveLink='https://manuelaguirre.dev/'
      />

      <CaseStudySection
        id='overview'
        title='Overview'
        description='A multi-page developer portfolio built around long-form case studies and reusable UI architecture.'
      >
        <p className='text-muted-foreground leading-7 max-w-2xl'>
          A multi-page developer portfolio thatfocuses on long-form project case studies,
          reusable UI patterns, and scalable
          frontend architecture. The application was designed to present projects with
          more technical depth while maintaining a clean and responsive user experience.
        </p>
      </CaseStudySection>

      <CaseStudySection
        id='origin'
        title='How it started'
        description='The first version was built in college under tight constraints. This is why I rebuilt it.'
      >
        <p className='text-muted-foreground leading-7 max-w-2xl'>
          The original version of my portfolio was built during college and was heavily
          shaped by the constraints of college. The focus at the time was learning
          core frontend fundamentals, completing projects within the given timelines, and
          shipping a functional website.
        </p>

        <p className='text-muted-foreground leading-7 max-w-2xl mt-6'>
          One of the biggest lessons I learned during that process was the importance of
          building an MVP first before expanding scope. Rather than attempting to overbuild
          projects early on, the priority was creating working solutions that could be shipped and later
          be iterated upon.
        </p>

        <p className='text-muted-foreground leading-7 max-w-2xl mt-6'>
          As I gained more experience building applications outside of school, my thinking
          and problem solving skills began improving.  These skills were then applied to the portfolio project,
          allowing me to build a portfolio that not only showcases my technical skills but also
          communicates my problem-solving approach and project evolution.
        </p>
      </CaseStudySection>

      <CaseStudySection
        id='evolution'
        title='How the project evolved'
        description='From short project summaries to long-form case studies and a more scalable architecture.'
      >
        <p className='text-muted-foreground leading-7 max-w-2xl'>
          While the original portfolio already used a multi-page structure, this rebuild
          focused on improving scalability, consistency, and long-term maintainability.
          Reusable layouts and shared UI components were introduced to reduce duplication
          and create a more structured architecture as the amount of content continued to grow.
        </p>

         <p className='text-muted-foreground leading-7 max-w-2xl mt-6'>
          The project also evolved from shorter project summaries into long-form case studies
          focused on documenting technical decisions, tradeoffs, and architectural reasoning.
          Instead of treating projects as static showcases, the portfolio was redesigned to
          better reflect the iterative nature of software development and how applications
          evolve over time.
        </p>
      </CaseStudySection>

      <CaseStudySection
        id='challenges'
        title='Challenges encountered'
        description='Scaling navigation and balancing visual polish with readable, structured content.'
      >
        <p className='text-muted-foreground leading-7 max-w-2xl'>
          One of the main architectural limitations in the original portfolio was
          handling navigation through component state and conditional rendering
          instead of a dedicated routing solution. While this approach worked for a
          smaller project, it became increasingly difficult to scale as the portfolio
          expanded into long-form case studies and more structured content.
        </p>

        <p className='text-muted-foreground leading-7 max-w-2xl mt-6'>
          Another challenge was balancing visual polish with readability and content
          structure. As more animations and UI patterns were introduced, maintaining
          consistency across layouts and ensuring the portfolio remained focused on
          technical storytelling became increasingly important. Migrating to React
          Router and introducing reusable UI patterns helped simplify navigation and
          improve long-term maintainability.
        </p>
      </CaseStudySection>

      <CaseStudySection
        id='decisions'
        title='Technical decisions'
        description='Every major technical choice had a specific reason behind it.'
      >
        <ul className='space-y-4 text-muted-foreground leading-7 max-w-2xl'>

          <li>
            <strong>Route-Driven Architecture:</strong> As the portfolio evolved into
            larger case studies with more structured content, navigation built around
            dedicated routes and nested layouts became easier to scale and maintain than
            relying on component state and conditional rendering.
          </li>

          <li>
            <strong>Reusable UI Patterns:</strong> Shared layouts, reusable components,
            and UI primitives were introduced to reduce duplication and maintain visual
            consistency as the application continued to grow.
          </li>

          <li>
            <strong>Tailwind CSS:</strong> Utility-first styling improved iteration speed
            and simplified responsive development compared to maintaining larger standalone
            CSS files across multiple pages and layouts.
          </li>

          <li>
            <strong>Framer Motion:</strong> Motion was used selectively to improve visual
            polish and user experience without distracting from the technical content and
            case studies themselves.
          </li>

        </ul>
      </CaseStudySection>

      <CaseStudySection
        id='differently'
        title="What I'd change if I started over today"
        description='Lessons on content, structure, and design systems I would apply from day one.'
      >
        <p className='text-muted-foreground leading-7 max-w-2xl'>
          If I rebuilt the portfolio today, I would place even greater emphasis on
          content and technical storytelling rather than focusing too heavily on
          technologies or visual polish early in development. One of the lessons I
          learned was that strong project structure and communication matter more
          than adding animations before the underlying content is finalized.
        </p>

        <p className='text-muted-foreground leading-7 max-w-2xl mt-6'>
          I would also simplify some visual elements and avoid relying too heavily on
          decorative hero imagery that does not meaningfully support the content of
          the portfolio. In addition, I would introduce a more formal token-based
          design system earlier in development to improve consistency and scalability
          across components and layouts.
        </p>
      </CaseStudySection>

      <CaseStudySection
        id='future'
        title='Future work and improvements'
        description='Where the portfolio goes next.'
      >
        <p className='text-muted-foreground leading-7 max-w-2xl'>
          Future iterations of the portfolio will continue focusing on deeper project
          documentation, engineering case studies, and improving the overall user
          experience.  I plan on migrating the project fully to Typescript and the reason
          is not that Typescript really will magically change my portfolio but it improves maintainability
          and helps strengthen my Typescript workflow.
          I am also interested in experimenting further with interactive
          UI patterns, motion design, and selective use of 3D elements where they
          support the content rather than distract from it.
        </p>

        <p className='text-muted-foreground leading-7 max-w-2xl mt-6'>
          As the amount of content grows, I would also consider introducing a CMS or
          structured content system if the complexity becomes justified by the scale
          of the portfolio.
        </p>
      </CaseStudySection>
    </div>
  )
}
