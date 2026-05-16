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


      <CaseStudySection id='overview' title ='Overview'>
        <p className='text-muted-foreground leading-7 max-w-2xl'>
          Built in Express to Proxy Spoonacular api calls
        </p>
      </CaseStudySection>


      <section id='why' className='scroll-mt-24'>
        <h2 className='text-2xl font-semibold mb-4'>Why I rebuilt it</h2>
        <p className='text-muted-foreground leading-7 max-w-2xl'>
          After college I rebuilt it in vanilla JS with the Spoonacular API so I
          could actually search and browse recipes by category. That version worked
          but had a real problem — I was exposing the API key directly on the
          frontend. Once I caught that I added a small Express server to proxy the
          requests and keep the key server-side.
        </p>
        <p className='text-muted-foreground leading-7 max-w-2xl mt-4'>
          The third rebuild came when I started learning React and TypeScript. The
          vanilla JS version was getting hard to manage and I wanted to do it right.
          Same app, better foundation.
        </p>
      </section>

      <section id='decisions' className='scroll-mt-24'>
        <h2 className='text-2xl font-semibold mb-4'>Technical decisions</h2>
        <ul className='space-y-6 text-muted-foreground leading-7 max-w-2xl'>
          <li>
            <strong className='text-foreground'>Spoonacular over a custom dataset</strong>
            <p>I needed real recipes at scale. Spoonacular gives me search, category
            browsing, and hundreds of recipes without me maintaining any data myself.
            For an app built around discovery that was the obvious call.</p>
          </li>
          <li>
            <strong className='text-foreground'>Express proxy for the API key</strong>
            <p>The vanilla JS version exposed the Spoonacular key directly in the
            frontend. That's a real security problem — anyone reading the network
            tab could grab it. A lightweight Express server keeps the key
            server-side and the frontend never touches it.</p>
          </li>
          <li>
            <strong className='text-foreground'>TypeScript for servings scaling</strong>
            <p>In vanilla JS I was parsing ingredient amounts as strings and doing
            math on them manually. TypeScript meant ingredient amounts were typed
            as numbers from the start — scaling just works and the compiler catches
            mistakes before they ever hit the browser.</p>
          </li>
          <li>
            <strong className='text-foreground'>SQLite for caching</strong>
            <p>Added basic caching to reduce redundant Spoonacular API hits. Honestly
            this was more about trying something new than a hard requirement — the
            app would run fine without it. But it was a good excuse to learn how
            a simple caching layer works in practice.</p>
          </li>
        </ul>
      </section>

      <section id='differently' className='scroll-mt-24'>
        <h2 className='text-2xl font-semibold mb-4'>What I'd change</h2>
        <p className='text-muted-foreground leading-7 max-w-2xl'>
          The Express server is minimal by design but if I started over I'd
          think harder about the API layer earlier instead of adding it as a
          patch. I'd also be more deliberate about component reuse from the
          start — I had duplicate button components with the same styles before
          I consolidated them, which is exactly the kind of thing a shared
          component system solves.
        </p>
      </section>

      <section id='future' className='scroll-mt-24'>
        <h2 className='text-2xl font-semibold mb-4'>Future work</h2>
        <p className='text-muted-foreground leading-7 max-w-2xl'>
          This app is in maintenance mode. It does what I built it to do.
          If I came back to it the most useful addition would be saved recipes
          with a real database instead of local storage, so the list persists
          across devices. That's the one thing that would make it more useful
          day to day.
        </p>
      </section>

    </div>
  )
}
