import React from 'react'
import Button from '../Button'
import { motion } from 'framer-motion'

export default function Home() {
  const name = 'Manuel Aguirre'
  return (
    <div className='relative h-screen w-full'>
      <img src="/assets/hero-image.jpeg" alt="Hero"
        className='absolute inset-0 w-full h-full object-cover z-0' />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-neutral-500 tracking-wider">
          {name.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2.5, delay: index * 0.2 }} >
              {char}
            </motion.span>
          ))}
        </h1>
        <p className="text-2xl mt-4 font-medium pb-6 tracking-wide">Aspiring Front-End Developer</p>
        <Button />
      </div>
    </div>
  )
}
