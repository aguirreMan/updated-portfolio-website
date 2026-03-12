import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

export default function Home() {
  const name = 'Manuel Aguirre'
  return (
    <div className="h-screen w-full absolute inset-0 bg-background/60">
      <img
        src="/assets/hero.png"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-muted-foreground tracking-wider">
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
        <p
          className="text-foreground text-3xl mt-4 font-medium pb-6
        tracking-wide"
        >
          Frontend Engineer building scalable, polished Web applications
        </p>
        <Link to="/contact">
          <Button size="lg">Lets have a cup of Coffee and talk!</Button>
        </Link>
      </div>
    </div>
  )
}
