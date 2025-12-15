import Skills from '../Skills'
import { GraduationCap, Code2, Briefcase } from 'lucide-react'

export default function About() {
    return (
        <div className='min-h-screen bg-gradient-to-b from-[#00215b] via-[#131c29] to-[#101018] py-20 px-6'>
            <div className='max-w-4xl mx-auto'>
                {/* Hero Section */}
                <div className='text-center mb-16'>
                    <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
                        Front-End Developer
                    </h1>
                    <p className='text-xl text-white/80 max-w-2xl mx-auto'>
                        Building modern, responsive web applications with React, Tailwind CSS and TypeScript
                    </p>
                </div>

                {/* About Content */}
                <div className='grid md:grid-cols-2 gap-8 mb-16'>
                    {/* Education */}
                    <div className='bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm'>
                        <div className='flex items-center gap-3 mb-4'>
                            <GraduationCap className='text-[#005de2]' size={28} />
                            <h2 className='text-2xl font-semibold text-white'>Education</h2>
                        </div>
                        <div className='text-white/80'>
                            <p className='font-medium text-lg text-white mb-1'>
                                Associate Degree in Web Development
                            </p>
                            <p className='text-white/60'>Des Moines Area Community College</p>
                            <p className='text-white/60'>2023 - 2025</p>
                        </div>
                    </div>

                    {/* Experience/Focus */}
                    <div className='bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm'>
                        <div className='flex items-center gap-3 mb-4'>
                            <Code2 className='text-[#005de2]' size={28} />
                            <h2 className='text-2xl font-semibold text-white'>Focus</h2>
                        </div>
                        <p className='text-white/80 leading-relaxed'>
                            Specializing in building dynamic, user-friendly web applications
                            using React, TypeScript, and modern CSS frameworks. Passionate about
                            clean code, responsive design, and creating seamless user experiences.
                        </p>
                    </div>
                </div>

                {/* Finding work */}
                <div className='bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm mb-16'>
                    <div className='flex items-center gap-3 mb-4'>
                        <Briefcase className='text-[#005de2]' size={28} />
                        <h2 className='text-2xl font-semibold text-white'>What I'm Looking For</h2>
                    </div>
                    <p className='text-white/80 leading-relaxed'>
                        I'm seeking opportunities to join a collaborative development team where
                        I can contribute my front-end skills and continue growing as a developer.
                        Open to relocation for the right opportunity.
                    </p>
                </div>

                {/* Skills Section */}
                <Skills />
            </div>
        </div>
    )
}