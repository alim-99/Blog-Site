import React from 'react'

const About = () => {
  return (
<section className="py-10 px-4">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6 dark:text-blue-600 text-gray-900">About Our Blog</h2>
    <p className="text-lg leading-relaxed dark:text-gray-300 text-gray-700 mb-6">
      Welcome to our innovative blogging platform—a space designed for writers, creators, and thought leaders to share their stories with the world. 
      Whether you're an aspiring blogger, an expert in your field, or someone looking to express creativity, our platform provides the perfect environment 
      to bring your ideas to life.
    </p>
    <div className="text-left space-y-4">
      <p className="flex items-center gap-2 text-lg dark:text-gray-300 text-gray-700">
        ✅ <span> <strong>Rich Text Editing</strong> – Craft beautifully formatted posts with ease using our powerful, intuitive editor.</span>
      </p>
      <p className="flex items-center gap-2 text-lg dark:text-gray-300 text-gray-700">
        ✅ <span> <strong>Dark & Light Mode</strong> – Enjoy a seamless reading and writing experience with theme options that suit your preference.</span>
      </p>
      <p className="flex items-center gap-2 text-lg dark:text-gray-300 text-gray-700">
        ✅ <span> <strong>Full-Screen Reading Mode</strong> – Dive into distraction-free content consumption for an immersive experience.</span>
      </p>
      <p className="flex items-center gap-2 text-lg dark:text-gray-300 text-gray-700">
        ✅ <span> <strong>Seamless Authentication</strong> – Securely sign in and manage your blogs using Clerk authentication.</span>
      </p>
      <p className="flex items-center gap-2 text-lg dark:text-gray-300 text-gray-700">
        ✅ <span> <strong>Media Integration</strong> – Enhance your posts with images, videos, and embeds for dynamic storytelling.</span>
      </p>
      <p className="flex items-center gap-2 text-lg dark:text-gray-300 text-gray-700">
        ✅ <span> <strong>SEO-Friendly Blogs</strong> – Get discovered with optimized metadata and clean URLs.</span>
      </p>
      <p className="flex items-center gap-2 text-lg dark:text-gray-300 text-gray-700">
        ✅ <span> <strong>Community Engagement</strong> – Connect with readers through comments, likes, and social sharing.</span>
      </p>
    </div>
    <p className="text-lg mt-6 dark:text-gray-300 text-gray-700">
      Start your journey today—write, publish, and inspire! 🚀
    </p>
  </div>
</section>

  )
}

export default About
