import { ExternalLink, Github } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
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

      <CaseStudySection title='overview' description='An updated portfolio website'>
        <p className='text-muted-foreground leading-7 max-w-2xl'>
          A multi-page developer portfolio thatfocuses on long-form project case studies,
          reusable UI patterns, and scalable
          frontend architecture. The application was designed to present projects with
          more technical depth while maintaining a clean and responsive user experience.
        </p>
      </CaseStudySection>

      <CaseStudySection title='origin' description='Why I rebuilt it'>
        <p className='text-muted-foreground leading-7 max-w-2xl'>
          The original version of my portfolio was built during college and primarily
          focused on listing technologies and presenting projects with limited depth.
          As I gained more experience building applications, I realized that portfolios
          are more effective when they communicate engineering decisions, technical
          tradeoffs, and project evolution rather than simply acting as technology showcases.
          This redesign was created to better reflect that shift in thinking.
        </p>
      </CaseStudySection>

      <CaseStudySection title='evolution' description='How the project evolved'>
        <p className='text-muted-foreground leading-7 max-w-2xl'>
          While the original portfolio also used a multi-page structure, this rebuild
          focused on improving scalability, consistency, and project storytelling.
          Reusable layouts and shared UI components were introduced to create a more
          maintainable architecture, while long-form case studies replaced shorter
          project summaries to better communicate engineering decisions and technical
          tradeoffs.
        </p>

        <p className='text-muted-foreground leading-7 max-w-2xl mt-6'>
          The transition to Tailwind CSS streamlined responsive styling and improved
          development workflow compared to maintaining larger standalone CSS files.
          While utility-first styling introduced longer className patterns, it also
          made iteration and component-level styling significantly easier to manage
          across the application.
        </p>
      </CaseStudySection>

      <CaseStudySection title='challenges' description='The challenges I faced during development'>
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

      <CaseStudySection title='decisions' description='The decisions I made during development'>
        <ul className='space-y-4 text-muted-foreground leading-7 max-w-2xl'>
          <li>
            <strong>React Router:</strong> Introduced dedicated routes and nested layouts
            to improve scalability, navigation, and future expansion of case studies.
          </li>

          <li>
            <strong>Tailwind CSS:</strong> Simplified responsive styling and improved
            development workflow compared to maintaining larger standalone CSS files.
          </li>

          <li>
            <strong>shadcn/ui:</strong> Provided reusable UI primitives that could be
            extended and customized while keeping the design system consistent.
          </li>

          <li>
            <strong>Framer Motion:</strong> Added subtle animations and transitions to
            improve polish without overwhelming the content of the portfolio.
          </li>

          <li>
            <strong>Navigation Architecture:</strong> Navigation was rebuilt around
            reusable route-driven components to improve scalability, consistency,
            and responsive behavior across the application.
          </li>

          <li>
            <strong>Reusable Component Architecture:</strong> Shared layouts,
            navigation components, and reusable UI patterns were introduced to
            improve consistency and simplify future expansion of the portfolio.
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudySection title='differently' description='What I would change if I rebuilt the project today'>
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

      <CaseStudySection title='future' description='Future improvements and expansion'>
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
