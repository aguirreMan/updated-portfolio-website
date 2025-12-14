import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Button() {
  return (
    <Link to='/Contact'>
      <motion.button className="bg-[#707276] text-white font-bold py-2 px-4 border-b-4 border-b-gray-600 rounded cursor-pointer"
        initial={{ opacity: 0.8, y: 20 }}
        animate={{ opacity: 0.88, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.8 }}
      >
        Lets have a cup of Coffee and talk!
      </motion.button>
    </Link >
  )
}
