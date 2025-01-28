import React from 'react'
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import Link from 'next/link';


const Hero = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-20">
      <div className="flex flex-col items-center justify-center text-center px-4 sm:px-8 lg:px-16">
        <h1 className="dark:text-blue-600 text-gray-800 text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
          Share Your Stories with the World
        </h1>
        <p className="leading-6 dark:text-gray-300 text-gray-700 max-w-lg sm:max-w-xl lg:max-w-2xl mb-6 text-md sm:text-base lg:text-lg">
          Welcome to your blogging platform! Whether you're here to share knowledge, inspire readers, or express your creativity, this is the place to make your voice heard. Start writing, connect with a community, and leave your mark.
        </p>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-purple-900 text-gray-300 dark:text-black dark:bg-purple-700 dark:hover:bg-purple-800 transition-all shadow-md px-6 py-3 rounded-md text-sm sm:text-base lg:text-lg">
              Get Started
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </section>
  )
}

export default Hero
