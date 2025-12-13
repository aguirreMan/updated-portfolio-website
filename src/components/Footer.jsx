import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className='fixed bottom-0 flex flex-col justify-end w-full h-24 pb-4 text-white text-center items-center z-20'>
            <span className='text-2xl'>© {new Date().getFullYear()} Manuel Aguirre</span>
            <div className='flex justify-center items-center gap-6 text-4xl'>
                <a
                    href="https://github.com/aguirreMan"
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='GitHub'
                    className='hover:text-gray-500 transition-transform duration-300 hover:scale-110'
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/manuel-aguirre-05a030198/"
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='LinkedIn'
                    className='hover:text-blue-500 transition-transform duration-300 hover:scale-110'
                >
                    <FaLinkedin />
                </a>
            </div>
        </footer>
    )
}
