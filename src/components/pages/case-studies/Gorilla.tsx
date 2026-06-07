import CaseStudyHeader from '@/components/case-study/CaseStudyHeader'
import CaseStudySection from '@/components/case-study/CaseStudySection'

const stack = ['React', 'Next.js', 'Tailwind CSS', 'Shadcn UI', 'Mermaid.js', 'Vercel']

export default function Gorilla() {
  return (
    <div className='flex flex-col gap-14'>
      <CaseStudyHeader
        category='Frontend Architecture'
        title='Gorilla AI'
        description='An agentic AI tool that accelerates how users learn technical topics'
        stack={stack}
        githubLink='https://github.com/aguirreMan/gorilla-ai'
        liveLink='https://gorilla-ai-theta.vercel.app/'
      />

      <CaseStudySection
        id='overview'
        title='Overview'
        description='An AI-powered learning tool built for developers who want to understand technical topics without jumping between docs, articles, and Stack Overflow.'
      >
        <p className='text-muted-foreground leading-7 max-w-2xl'>
          Gorilla AI is a full-stack chat application that connects users with an AI model through
          a streaming interface designed for learning. Users can ask technical questions and get
          structured explanations — with Mermaid.js diagrams generated inline when a visual
          would help. Conversations are persisted per user so context isn't lost between sessions.
          The core thesis is simple: help devs learn technical concepts fast.
        </p>
      </CaseStudySection>

      <CaseStudySection
        id='origin'
        title='How it started'
        description='It started as an AI image generator. That idea died fast.'
      >
        <p className='text-muted-foreground leading-7 max-w-2xl'>
          The original concept was an agentic image generation platform built on top of OpenAI's API.
          About halfway through building it I realized the market had no room for another image generator —
          Midjourney, OpenAI, Google, Leonardo AI, and dozens of others already owned that space with
          no real way to differentiate. I scrapped the image generation code and reframed the product
          entirely around learning. The infrastructure I'd already built —
          auth, database schema, streaming architecture — carried over. The product idea was wrong,
          not the engineering.
        </p>
      </CaseStudySection>

      <CaseStudySection
        id='evolution'
        title='The pivot'
        description='Pivoting mid-build meant making deliberate architectural decisions, not just swapping APIs.'
      >
        <p className='text-muted-foreground leading-7 max-w-2xl'>
          Rebuilding the product around chat and learning required rethinking what the app actually needed
          to do. Image generation is stateless — you make a request, you get an image, save it to the
          database, and you're done. A chat product is fundamentally stateful. It needs to track
          conversations, stream responses in real time, persist history per user, and handle things like
          cancellation mid-stream. That meant the architecture had to evolve from a simple
          request/response model into something that could manage ongoing state across a session.
          Every major technical decision I made came out of that shift.
        </p>
      </CaseStudySection>

      <CaseStudySection
        id='challenges'
        title='Challenges encountered'
        description='The hardest problems were the ones that looked simple on the surface.'
      >
        <div className='flex flex-col gap-6 max-w-2xl'>
          <div>
            <p className='text-foreground font-medium mb-2'>Mermaid.js diagram rendering</p>
            <p className='text-muted-foreground leading-7'>
              Getting Mermaid diagrams to render reliably inside a React component was more painful than
              expected. Mermaid needs to run after the DOM is fully painted, but React's rendering cycle
              doesn't guarantee that timing. The diagrams would silently fail — no error, just nothing.
              The fix involved initializing Mermaid outside the component entirely, adding a setTimeout
              delay to ensure the DOM was ready, wrapping the render call in a parse validation step
              to catch malformed diagram syntax before it reached Mermaid, and adding ref checks to
              confirm the target element actually existed before trying to render into it. Each of those
              was a separate debugging session.
            </p>
          </div>
          <div>
            <p className='text-foreground font-medium mb-2'>Streaming and cancellation</p>
            <p className='text-muted-foreground leading-7'>
              Implementing real-time AI response streaming with Server-Sent Events meant managing
              an open connection for the duration of every response. The tricky part was cancellation —
              if a user starts a new chat or navigates away mid-stream, that connection needs to close
              cleanly. Wiring AbortController to cancel in-flight requests and updating state correctly
              on cancellation without leaving the UI in a broken state took more iteration than expected.
            </p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection
        id='decisions'
        title='Technical decisions'
        description='Every major technical choice had a specific reason behind it.'
      >
        <div className='flex flex-col gap-6 max-w-2xl'>
          <div>
            <p className='text-foreground font-medium mb-2'>OpenRouter over direct API access</p>
            <p className='text-muted-foreground leading-7'>
              Rather than locking into one AI provider directly, I routed requests through OpenRouter.
              Today Claude Sonnet is hardcoded because it performs best for the use case, but the
              architecture leaves the door open for model switching later without rewiring the integration.
            </p>
          </div>
          <div>
            <p className='text-foreground font-medium mb-2'>Clerk over Supabase Auth</p>
            <p className='text-muted-foreground leading-7'>
              Supabase has its own auth system and would have kept everything in one platform. I chose
              Clerk because it handles the full auth lifecycle out of the box — sessions, JWTs, and
              user management with minimal configuration. The tradeoff is an extra service dependency,
              but on a solo project that meant auth wasn't something I had to debug. Supabase stayed
              focused on what it's great at: the database.
            </p>
          </div>
          <div>
            <p className='text-foreground font-medium mb-2'>Upstash for rate limiting</p>
            <p className='text-muted-foreground leading-7'>
              Every request hits the OpenRouter API and costs money. Without rate limiting a single
              user or a bot could burn through credits fast. Upstash gave me Redis-based rate limiting
              on the API route without managing my own Redis instance.
            </p>
          </div>
          <div>
            <p className='text-foreground font-medium mb-2'>useReducer over external state libraries</p>
            <p className='text-muted-foreground leading-7'>
              As the chat workflow grew, managing conversations, message history, streaming updates,
              loading states, and selected chat state with multiple useState hooks became difficult to
              reason about. I chose React's built-in useReducer hook to centralize state transitions
              without introducing an additional dependency like Redux or Zustand. The tradeoff is more
              boilerplate compared to useState, but it provided a predictable way to manage the application's
              chat state while keeping the stack lightweight.
            </p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection
        id='differently'
        title="What I'd change if I started over today"
        description='Things I would do differently if I started over today.'
      >
        <p className='text-muted-foreground leading-7'>
          If I started over I'd spend more time defining the specific problem before writing any code.
          The image generator pivot cost real time not because the engineering was wrong, but because I built for a
          market that was already saturated. Even with Gorilla AI I'd push myself to go narrower earlier:
          who exactly is the user, what specific moment are they frustrated, and does this actually solve that problem?
          The infrastructure work carries over when you pivot.
          What doesn't carry over is the time spent pursuing a product direction that lacks a clear audience.
        </p>
      </CaseStudySection>

      <CaseStudySection
        id='future'
        title='Future work and improvements'
        description='Where the product goes next.'
      >
        <p className='text-muted-foreground leading-7 max-w-2xl'>
          The most immediate addition is model selection — letting users route to different models
          through OpenRouter rather than having Claude Sonnet hardcoded. The integration already
          helps me get there faster.
        </p>
        <p className='text-muted-foreground leading-7 max-w-2xl mt-4'>
          Beyond that, the longer term vision is agentic workflows — giving the AI the ability to
          generate code sandboxes where users can write and run code in real time with the AI
          helping them debug and iterate. Learning by doing rather than just reading explanations.
        </p>
        <p className='text-muted-foreground leading-7 max-w-2xl mt-4'>
          There's also an idea I keep coming back to — a mode where instead of just answering
          questions, the AI explains what problem a tool actually solves before showing you how
          to use it. Not every developer needs this — plenty of engineers reach for certain tools
          because they deeply understand the problem those tools solve. But for developers like me,
          especially earlier in the journey, the ecosystem is full of powerful technologies that get
          adopted from tutorials and job descriptions before the underlying problem is ever understood.
          That's a gap Gorilla AI could help bridge.
        </p>
      </CaseStudySection>
    </div>
  )
}
