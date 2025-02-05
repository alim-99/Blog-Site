import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <header className='flex py-5'>
      <Link href="/">
        <Image 
          src="/logo.svg" 
          alt='logo'
          width={50}
          height={50} 
          className='ml-3 mb-4'
        />
      </Link>
      <nav className='flex-end justify-between flex-col ml-auto text-2xl dark:text-gray-400 text-slate-700'>
        <Link className='mr-2 dark:hover:text-gray-500 hover:text-slate-900' href="/">Home</Link>
        <Link className='mr-2 dark:hover:text-gray-500 hover:text-slate-900' href="/blog">Blog</Link>
        <Link className='mr-5 dark:hover:text-gray-500 hover:text-slate-900' href="/posts">Posts</Link>
        <ModeToggle />
        <span className='relative mr-2 top-1'>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </span>
      </nav>
    </header>
  )
}

export default Navbar
