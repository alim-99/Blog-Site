import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <header className='flex items-center justify-between py-5 px-4'>
      <Link href="/">
        <Image 
          src="/logo.svg" 
          alt='logo'
          width={50}
          height={50} 
        />
      </Link>
      <nav className='flex items-center gap-6 text-2xl dark:text-gray-400 text-slate-700'>
        <Link className='hover:text-slate-500' href="/">Home</Link>
        <Link className='hover:text-slate-500' href="/blog">Blog</Link>
        <Link className='hover:text-slate-500' href="/posts">Posts</Link>
        <ModeToggle />
        {/* <span className='relative mr-2 top-1'>
        </span> */}
          <SignedIn>
            <UserButton />
          </SignedIn>
      </nav>
    </header>
  )
}

export default Navbar
