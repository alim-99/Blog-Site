import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <section className='py-20'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='dark:text-blue-600 text-blue-700 text-4xl font-extrabold mb-3'>Share Your Stories with the World</h1>
        <p className='leading-6 dark:text-gray-300 max-w-2xl mb-6'>Welcome to your blogging platform! 
          Whether you're here to share knowledge, inspire readers, or express your creativity, this is the place to make your voice heard. Start writing, 
          connect with a community, and leave your mark.</p>
          <button className='bg-purple-700 hover:bg-purple-800 transition-all shadow-md p-3 rounded-md'>Get Started</button>
      </div>
    </section>
  )
}

export default Hero
