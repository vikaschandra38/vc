import { Github, Linkedin, Mail } from 'lucide-react'
import contactData from '../data/contact.json'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-netflix-black border-t border-netflix-mediumGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-netflix-red mb-2">VC</div>
            <p className="text-netflix-lightGray text-sm">
              Front-end Engineer & UI/UX Enthusiast
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-netflix-white font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-netflix-lightGray hover:text-netflix-red transition text-sm"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block text-netflix-lightGray hover:text-netflix-red transition text-sm"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('blogs')}
                className="block text-netflix-lightGray hover:text-netflix-red transition text-sm"
              >
                Blogs
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-netflix-lightGray hover:text-netflix-red transition text-sm"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-netflix-white font-semibold mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <a
                href={contactData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-netflix-lightGray hover:text-netflix-red transition"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={contactData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-netflix-lightGray hover:text-netflix-red transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${contactData.contact.email}`}
                className="text-netflix-lightGray hover:text-netflix-red transition"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-netflix-mediumGray mb-6"></div>

        {/* Copyright */}
        <div className="text-center text-netflix-lightGray text-sm">
          <p>
            © {currentYear} Vikas Chandra. All rights reserved. |{' '}
            <a
              href="#"
              className="hover:text-netflix-red transition"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
