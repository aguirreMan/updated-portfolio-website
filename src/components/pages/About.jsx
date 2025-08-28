import React from 'react'
import Skills from '../Skills'


export default function About() {
    return (
            <div className='pt-30 bg-custom-background-color min-h-screen '>
                <h1 className='text-center text-white text-4xl'>I am a web developer and tech creator</h1>
                <p className='max-w-prose mx-auto text-2xl my-8 text-center'>
                   I am passionate about solving problems using modern technologies and 
                   continuously expanding my knowledge of the latest web frameworks and 
                   techniques. I am open to relocation for the right opportunity. In my spare time i do enjoy
                   excercising, and would love to have the oppurtunity to be traveling to different cities
                   here in the USA and eventually try and visit international cities
                </p>
                <Skills />
            </div>
    
    )
}

