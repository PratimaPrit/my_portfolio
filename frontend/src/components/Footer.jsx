import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaEnvelope />, href: 'mailto:pratimaprit11@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-dark-card border-t border-dark-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Social Links */}
          <div className="flex gap-6 mb-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-primary-400 transition-colors hover:scale-110 transform"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
            <a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">
              About
            </a>
            <a href="#experience" className="text-gray-400 hover:text-primary-400 transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-gray-400 hover:text-primary-400 transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            <p className="flex items-center gap-2 justify-center">
              Made with <FaHeart className="text-red-500 animate-pulse" /> by Pratima Prit
            </p>
            <p className="mt-2">© {currentYear} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
