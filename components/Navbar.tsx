import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle'

const Navbar = () => {
  return (
    <header className='flex py-5'>
      <Image 
      src="/logo.svg" 
      alt='logo'
      width={50}
      height={50} 
      className='ml-2 mb-3'
      />
      <nav className='flex-end justify-between flex-col ml-auto text-2xl dark:text-gray-400 text-slate-700'>
        <Link className='mr-2 dark:hover:text-gray-500 hover:text-slate-900' href="/">Home</Link>
        <Link className='mr-2 dark:hover:text-gray-500 hover:text-slate-900' href="/blog">Blog</Link>
        <Link className='mr-5 dark:hover:text-gray-500 hover:text-slate-900' href="/posts">Posts</Link>
        <ModeToggle />
      </nav>
    </header>
  )
}

export default Navbar
