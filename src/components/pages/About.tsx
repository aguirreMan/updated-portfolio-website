
import { GraduationCap, Code2, Briefcase, MapPin } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const skillGroups = [
  {
    title: 'Frontend engineering',
    skills: [
      'React',
      'TypeScript',
      'Next.js',
      'React Router',
      'TanStack Query',
      'Tailwind CSS',
      'shadcn/ui',
      'Framer Motion',
    ],
  },
  {
    title: 'Backend & data',
    skills: [
      'Node.js',
      'Express.js',
      'PostgreSQL',
    ],
  },
  {
    title: 'Authentication & infrastructure',
    skills: [
      'Clerk',
      'Vercel',
      'Netlify',
      'Railway',
      'Supabase'
    ],
  },
  {
    title: 'Development tooling',
    skills: [
      'Vite',
      'Git',
      'GitHub',
      'ESLint',
      'Postman',
    ],
  },
]

export default function About() {
  return (
    <div className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="mb-4 text-4xl font-bold text-foreground">
            About me
          </h1>

          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            I'm a frontend engineer focused on React & TypeScript,
            building responsive interfaces and maintainable frontend
            systems with an emphasis on performance and accessibility.
          </p>
        </header>

        {/* Education + Focus */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-3 pb-3">
              <GraduationCap
                aria-hidden="true"
                className="text-muted-foreground"
                size={22}
              />
              <CardTitle className="text-base">
                <h2>Education</h2>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="font-medium text-foreground mb-1">
                A.A.S. Web Development
              </p>
              <p className="text-sm text-muted-foreground">
                Des Moines Area Community College
              </p>
              <p className="text-sm text-muted-foreground">
                2023 – 2025
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-3 pb-3">
              <Code2
                aria-hidden="true"
                className="text-muted-foreground"
                size={22}
              />
              <CardTitle className="text-base">
                <h2>Engineering focus</h2>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Interested in frontend architecture, reusable component systems,
                asynchronous state management, performance optimization,
                and accessible user interfaces.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Skills */}
        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-center">
              <h2>Skills & tooling</h2>
            </CardTitle>
          </CardHeader>

          <CardContent className="grid gap-6 sm:grid-cols-2">
            {skillGroups.map(({ title, skills }) => (
              <div key={title}>
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  {title}
                </h3>

                <ul className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <li key={skill}>
                      <Badge variant="secondary">
                        {skill}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Career interests */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-3 pb-3">
            <Briefcase
              aria-hidden="true"
              className="text-primary"
              size={22}
            />
            <CardTitle className="text-base">
              <h2>What I'm looking for</h2>
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Seeking a collaborative frontend engineering role where I can
              contribute to meaningful products, solve challenging technical
              problems, and grow alongside experienced engineers.
            </p>

            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin aria-hidden="true" size={13} />
              <span>Based in Iowa · Open to relocation</span>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
