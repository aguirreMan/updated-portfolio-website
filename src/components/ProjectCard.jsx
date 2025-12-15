import React from 'react'

export default function ProjectCard({title, description}){
    return (
    <div className='bg-blue-900 text-white p-4 rounded-lg w-64 h-64'>
      <h2 className='text-xl text-center'>{title}</h2>
      <p className='pt-6'>{description}</p>
    </div>
  )
}
