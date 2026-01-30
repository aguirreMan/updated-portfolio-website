import { GraduationCap, Code2, Briefcase } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent, } from '../ui/card'

export default function About() {
    return (
        <div className='min-h-screen py-20 px-6'>
            <div className='max-w-4xl mx-auto'>
                {/* Hero Section */}
                <div className='text-center mb-16'>
                    <h1 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>
                        Front-end web engineer
                    </h1>
                    <p className='text-xl text-foreground max-w-2xl mx-auto'>
                        Building modern, responsive web applications with React, TypeScript and Next JS
                    </p>
                </div>
                {/* About Content */}

                <div className='grid md:grid-cols-2 gap-8 mb-16'>
                    {/* Education */}
                    <Card>
                        <CardHeader className='flex items-center'>
                            <GraduationCap className='text-muted-foreground' size={28} />
                            <CardTitle>Education</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className='text-muted-foreground'>
                                <h3 className='font-medium text-lg text-foreground mb-3'>
                                    Associate Degree in Web Development
                                </h3>
                                <p className='text-muted-foreground mb-3'>Des Moines Area Community College</p>
                                <p className='text-muted-foreground'>2023 - 2025</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Experience/Focus */}
                    <Card>
                        <CardHeader className='flex items-center mb-2'>
                            <Code2 className='text-foreground' size={28} />
                            <CardTitle>Focus</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-muted-foreground leading-relaxed'>
                                Specializing in building dynamic, user-friendly web applications
                                using React, TypeScript, and modern CSS frameworks. Passionate about
                                clean code, responsive design, and creating seamless user experiences.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/*Tech and tooling */}
                <section className='mt-10'>
                    <h2 className='mb-10 text-center font-semibold text-foreground'>
                        Skills & Tooling
                    </h2>
                    {/*Cards for skills */}
                    <div className='grid gap-8 md:grid-cols-2'>
                        <Card>
                            <CardHeader>
                                <CardTitle>Frontend tooling</CardTitle>
                            </CardHeader>
                            <CardContent className='text-muted-foreground space-y-2'>
                                <p>React, Next.JS, Typescript</p>
                                <p>React router, Tanstack Query, Vite</p>
                                <p>Tailwind CSS, Shadcn/ui, responsive designs</p>
                            </CardContent>
                        </Card>
                        {/*Card for backend tooling */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Backend & infrastructure tooling</CardTitle>
                            </CardHeader>
                            <CardContent className='text-muted-foreground space-y-2'>
                                <p>Node JS, Express JS</p>
                                <p>Supabase, Clerk</p>
                                <p>Railway, Postman, Vercel, Netlify</p>
                            </CardContent>
                        </Card>
                        {/* Finding work */}
                        <Card className='md:col-span-2'>
                            <CardHeader className='flex flex-row items-center gap-3'>
                                <Briefcase className='text-primary' size={28} />
                                <CardTitle>What I am Looking For</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className='text-muted-foreground leading-relaxed'>
                                    I'm seeking opportunities to join a collaborative development team where
                                    I can contribute my front-end skills and continue growing as a developer.
                                    Open to relocation for the right opportunity.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>
        </div>
    )
}