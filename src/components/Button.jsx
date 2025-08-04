import React from 'react'
import { Link } from 'react-router-dom'

export default function Button() {
  return (
    <Link to='/Contact'>
    <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded cursor-pointer">
      Button
    </button>
    </Link >
  )
}
