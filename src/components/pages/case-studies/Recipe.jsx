import { ExternalLink, Github } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import CaseStudyHeader from '@/components/case-study/CaseStudyHeader'
import CaseStudySection from '@/components/case-study/CaseStudySection'

const stack = [
  'React', 'TypeScript', 'React Router',
  'Node.js', 'Express', 'Tailwind CSS', 'Vercel', 'Railway',
]

export default function Recipe() {
  return (
    <div className='flex flex-col gap-14'>
      <CaseStudyHeader
        category='Full Stack Application'
        title='Recipe App'
        description='Recipe discovery app using React, Express, and Spoonacular'
        stack={stack}
        githubLink='https://github.com/aguirreMan/react-recipe'
        liveLink='https://react-recipe-blush.vercel.app/'
      />


      <CaseStudySection id='overview' title='Overview'>
        <p className='text-muted-foreground leading-7 max-w-2xl'>
          Recipe discovery application built with React and TypeScript using the
          Spoonacular API for recipe search, category filtering, and ingredient
          scaling. The project evolved from a simple college assignment into a
          full-stack application with an Express proxy server and some basic caching of recipes.
        </p>
      </CaseStudySection>

      <CaseStudySection id='origin' title='Project evolution'>
        <p className='text-muted-foreground leading-7 max-w-2xl'>
          This project originally started as a community college assignment focused on
          building a small recipe application using hardcoded data. That approach was
          completely reasonable for the requirments of the class, but it became limiting once
          I wanted to browse a larger variety of recipes, search dynamically, and work
          with real recipe data like ingredients and cooking instructions.
        </p>

        <p className='text-muted-foreground leading-7 max-w-2xl mt-4'>
          After finishing college, I revisited the project on my own and rebuilt it
          around the Spoonacular API so recipes could be fetched dynamically instead of
          maintained manually. Over time the project went through multiple rebuilds as
          I learned more about frontend architecture, API design, and maintainable state
          management.
        </p>
      </CaseStudySection>

      <CaseStudySection id='evolution' title='Refactors'>
        <p className='text-muted-foreground leading-7 max-w-2xl'>
          The second version of the project also used vanilla javascript but this time i did implement
          Spoonacular API and spoonacular solved the problem of having an abundance of recipe data.
        </p>

        <p className='text-muted-foreground leading-7 max-w-2xl mt-4'>
          As the application expanded, new frontend challenges started appearing. Recipe
          details were rendered inside modals, which became limiting once ingredient scaling,
          instructions, and larger recipe content needed more space and better navigation.
          Shared state like pagination and search queries also became harder to coordinate
          across multiple functions as more API endpoints and UI interactions were added.
        </p>

        <p className='text-muted-foreground leading-7 max-w-2xl mt-4'>
          Managing DOM updates and reattaching event listeners manually after rerenders also
          added complexity over time. While these patterns work in vanilla JavaScript, I found
          myself recreating problems that React solves elegantly.
        </p>

        <p className='text-muted-foreground leading-7 max-w-2xl mt-4'>
          Rebuilding the project again in React and React Router gave me dedicated routing,
          reusable components, more predictable state management, and a cleaner structure for
          working with API-driven frontend applications as the project continued to grow.  Adding Typescript
          helped me type data contracts across the entire application
        </p>
      </CaseStudySection>

      <CaseStudySection id='challenges' title='Challenges encountered'>
        <ul className='space-y-6 text-muted-foreground leading-7 max-w-2xl'>
          <li>
            <strong className='text-foreground'>Adding a backend changed the project scope</strong>
            <p>
              Moving from a frontend-only app to an Express server solves API key exposure problem,
              but it also introduced new responsibilities like routing,
              CORS, environment variables, response formatting, and deploying a separate
              backend service.
            </p>
          </li>

          <li>
            <strong className='text-foreground'>Learning React Router changed how I thought about UI</strong>
            <p>
              The vanilla JavaScript version used modals for recipe details, but that became
              limiting as the content grew. Learning React Router helped me move recipe
              details into dedicated pages with cleaner navigation and shareable URLs.
            </p>
          </li>

          <li>
            <strong className='text-foreground'>Deployment became more complex</strong>
            <p>
              Hosting the frontend on Vercel came with its own challenges, but the Express
              backend required a separate deployment flow entirely. Using Railway taught me
              how frontend and backend deployments differ, especially when working with
              environment variables and API URLs across local and production environments.
            </p>
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudySection id='decisions' title='Technical decisions'>
        <ul>
          <li>
            <strong className='text-foreground'>
              Formatting API data on the backend
            </strong>

            <p>
              While testing Spoonacular endpoints in Postman, I noticed the API returned
              significantly more data than the frontend actually needed, including nutrition
              details and cooking equipment that were outside the scope of data i needed.
            </p>

            <p className='mt-4'>
              Instead of passing raw API responses directly into the frontend, I chose to
              format recipe data like instructions and ingredients inside the Express server before returning it
              to the frontend. This reduced frontend complexity and kept React components more
              focused on rendering UI instead of transforming nested API responses.
            </p>
          </li>
          <li>
            <strong className='text-foreground'>
              TypeScript for ingredient scaling and API contracts
            </strong>

            <p>
              The vanilla JavaScript version parsed ingredient amounts out of formatted
              strings using <code>split</code> and <code>parseFloat</code>. If the API
              response format changed or a value was missing, the scaling logic could
              silently return <code>NaN</code> and break calculations without obvious
              errors.
            </p>

            <div className='bg-muted rounded-lg p-4 mt-4 overflow-x-auto'>
              <pre>
                {`const parts = currentDataString.split(':')[1].trim().split(' ')
                  const originalAmount = parseFloat(parts[0])`}
              </pre>
            </div>

            <p className='mt-4'>
              After rebuilding the project in TypeScript, ingredient measurements were
              modeled as explicit numeric values instead of parsed strings.
            </p>

            <div className='bg-muted rounded-lg p-4 mt-4 overflow-x-auto'>
              <pre>
                {`export interface MeasureUnit {
                    amount: number
                    unitShort: string
                }`}
              </pre>
            </div>

            <p className='mt-4'>
              That allowed the scaling logic to become simple arithmetic instead of
              defensive string parsing:
            </p>

            <div className='bg-muted rounded-lg p-4 mt-4 overflow-x-auto'>
              <pre>
                {`const scaledAmountUS =
                  ingredient.measures.us.amount * scaleFormula`}
              </pre>
            </div>

            <p className='mt-4'>
              Typing the API contracts up front made the scaling logic easier to reason
              about and removed an entire category of parsing edge cases from the frontend.
            </p>
          </li>
          <li>
            <strong className='text-foreground'>
              SQLite caching for repeated recipe requests
            </strong>

            <p>
              Recipe instructions and ingredient data were fetched from multiple Spoonacular
              endpoints, which introduced redundant API requests when the same recipe was
              viewed repeatedly.
            </p>

            <p className='mt-4'>
              To reduce unnecessary external API calls, I added a lightweight SQLite caching
              layer inside the Express server. Cached recipe data could be returned directly
              from the backend instead of requesting the same data from Spoonacular again.
            </p>

            <p className='mt-4'>
              The application did not strictly require caching at its current scale, but it
              was a useful way to learn how backend caching changes request flow and reduces
              dependency on third-party APIs.
            </p>
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudySection id='differently' title='Differently'>
        <ul>
          <li>
            <strong className='text-foreground'>
              Using Mock Data for testing while developing in many points of working on my application
              I burned all of spoonaculars data making fetch calls there what i would change again is create some Mock
              recipes instead of using the real API.
            </strong>
          </li>
          <li>
            <strong className='text-foreground'>
              I would implement abort controllers from the beginning especially for a quota based API
            </strong>
          </li>
          <li>
            <strong className='text-foreground'>
              I would create a design token system to define consistent UI components and styles across the project.
              The issue i did was re create different buttons for each component, leading to inconsistent
              styling.
            </strong>
          </li>
          <li>
            <strong className='text-foreground'>
              For working on projects that grow in complexity, I would implement a stronger folder structure to make
              my workflow more efficient.
            </strong>
          </li>
        </ul>
      </CaseStudySection>

    </div>
  )
}
