import Button from '../Button'
import { motion } from 'framer-motion'

export default function Home() {
  const name = 'Manuel Aguirre'
  return (
    <div className='relative h-screen w-full'>
      <img src='/assets/hero-image.jpg' alt='Hero'
        className='absolute inset-0 w-full h-full object-cover z-0' />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#5883ff] tracking-wider">
          {name.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.8, delay: index * 0.2 }} >
              {char}
            </motion.span>
          ))}
        </h1>
        <p className='text-[#0f0f0f] text-3xl mt-4 font-medium pb-6 
        tracking-wide'>Front-End Web Developer</p>
        <Button />
      </div>
    </div>
  )
}