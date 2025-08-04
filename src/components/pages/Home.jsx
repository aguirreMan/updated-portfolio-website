import React from 'react'
import Button from '../Button'

export default function Home() {
  return (
    <div className='relative h-screen w-full'>
      <img src="/assets/hero-image.jpeg" alt="Hero"
        className='absolute inset-0 w-full h-full object-cover z-0' />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Manuel Aguirre</h1>
        <p className="text-xl mt-4 font-medium pb-5">Aspiring Front-End Developer</p>
        <Button />
      </div>
    </div>
  )
}
