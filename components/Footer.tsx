import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-6 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
        {/* Brand & Copyright */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-semibold dark:text-white text-gray-800">
            Our Blog
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-gray-700 dark:text-gray-300 text-sm">
          <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </a>
          <a href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
            Blog
          </a>
          <a href="/posts" className="hover:text-blue-600 dark:hover:text-blue-400">
            Posts
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://x.com/alim16097side" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-[#1da1f2] dark:hover:text-[#1da0f2af]" />
          </a>
          <a href="https://github.com/alim-99" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-[#333] dark:hover:text-[#373636]" />
          </a>
          <a href="https://www.linkedin.com/in/ali-mohamed-96a768252/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-[#0a66c2] dark:hover:text-[#0a66c2b4]" />
          </a>
          <a href="https://www.instagram.com/a.l.i__66/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-[#c13584] dark:hover:text-[#c13584b6]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

