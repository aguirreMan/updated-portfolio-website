import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

export default function Home() {
  const name = 'Manuel Aguirre'
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <img
        src="/assets/hero.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-[1]"
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <motion.p
          className="text-sm uppercase tracking-widest text-blue-400 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Frontend Engineer
        </motion.p>
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider drop-shadow-md">
          {name.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.07 }}
            >
              {char}
            </motion.span>
          ))}
        </h1>
        <p className="text-white/70 text-xl mt-4 font-medium pb-6 tracking-wide max-w-xl">
          Building scalable, polished web applications with React, TypeScript, and modern tooling.
        </p>
        <Link to="/projects">
          <Button size="lg">View my work</Button>
        </Link>
      </div>
    </div>
  )
}
