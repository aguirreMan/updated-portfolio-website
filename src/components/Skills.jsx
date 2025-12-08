import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiVite, SiNodedotjs, SiExpress, SiPostman } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

export default function Skills() {
    return (
        <div className="mt-10 pb-24 px-5 text-white">
            <h2 className="text-center text-3xl font-semibold mb-10">Tech Stack</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                {/* Frontend Tech stack */}
                <div>
                    <h3 className="text-xl text-sky-300 mb-4 border-b border-sky-700 pb-1">Frontend</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2"><FaHtml5 /> HTML</li>
                        <li className="flex items-center gap-2"><FaCss3Alt /> CSS</li>
                        <li className="flex items-center gap-2"><IoLogoJavascript /> JavaScript ES6+</li>
                        <li className="flex items-center gap-2"><FaReact /> React</li>
                        <li className="flex items-center gap-2"><RiTailwindCssFill /> Tailwind CSS</li>
                    </ul>
                </div>

                {/* Backend tech stack*/}
                <div>
                    <h3 className="text-xl text-sky-300 mb-4 border-b border-sky-700 pb-1">Backend</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2"><SiNodedotjs /> Node.js</li>
                        <li className="flex items-center gap-2"><SiExpress /> Express.js</li>
                    </ul>
                </div>

                {/* Tools I use to work with */}
                <div>
                    <h3 className="text-xl text-sky-300 mb-4 border-b border-sky-700 pb-1">Tools & Workflow</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2"><FaGitAlt /> Git</li>
                        <li className="flex items-center gap-2"><FaGithub /> GitHub</li>
                        <li className="flex items-center gap-2"><VscVscode /> VS Code</li>
                        <li className="flex items-center gap-2"><SiVite /> Vite</li>
                        <li className="flex items-center gap-2"><SiPostman /> Postman</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}