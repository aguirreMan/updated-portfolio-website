import { GraduationCap, Code2, Briefcase, MapPin } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'

const frontendSkills = [
  'React', 'TypeScript', 'Next.js', 'React Router',
  'TanStack Query', 'Vite', 'Tailwind CSS', 'shadcn/ui',
]

const infraSkills = [
  'Node.js', 'Express', 'Supabase', 'Clerk',
  'Vercel', 'Netlify', 'Railway', 'Postman',
]

function Badge({ children }) {
  return (
    <span className="text-xs px-2.5 py-1 rounded-md border border-border bg-muted text-muted-foreground">
      {children}
    </span>
  )
}

export default function About() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-12 pb-10 border-b border-border">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
            About me
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frontend engineer focused on React & TypeScript
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
            I build responsive interfaces and maintainable frontend systems,
            focusing on performance, accessibility, and clean component architecture.
          </p>
        </div>

        {/* Education + Focus */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-3 pb-3">
              <GraduationCap className="text-muted-foreground" size={22} />
              <CardTitle className="text-base">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-foreground mb-1">
                A.A.S. Web Development
              </p>
              <p className="text-sm text-muted-foreground">Des Moines Area Community College</p>
              <p className="text-sm text-muted-foreground">2023 – 2025</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-3 pb-3">
              <Code2 className="text-muted-foreground" size={22} />
              <CardTitle className="text-base">Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Focused on scalable React applications, frontend architecture,
                and building polished developer experiences.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Skills */}
        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-center">Skills & tooling</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Frontend
              </p>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((s) => <Badge key={s}>{s}</Badge>)}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Backend & infrastructure
              </p>
              <div className="flex flex-wrap gap-2">
                {infraSkills.map((s) => <Badge key={s}>{s}</Badge>)}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Looking for */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-3 pb-3">
            <Briefcase className="text-primary" size={22} />
            <CardTitle className="text-base">What I'm looking for</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Seeking a collaborative frontend role where I can contribute
              immediately and keep growing. Currently based in Iowa and
              targeting opportunities in the LA area — open to relocation.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin size={13} />
              Iowa → Open to relocation
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
