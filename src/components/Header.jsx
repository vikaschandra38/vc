import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 w-full z-40 bg-netflix-black/95 backdrop-blur border-b border-netflix-mediumGray">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-netflix-red">VC</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <button onClick={() => scrollToSection('home')} className="text-netflix-lightGray hover:text-netflix-white transition">
            Home
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-netflix-lightGray hover:text-netflix-white transition">
            Projects
          </button>
          <button onClick={() => scrollToSection('blogs')} className="text-netflix-lightGray hover:text-netflix-white transition">
            Blogs
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-netflix-lightGray hover:text-netflix-white transition">
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-netflix-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-netflix-darkGray border-t border-netflix-mediumGray">
          <div className="px-4 py-3 space-y-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-netflix-lightGray hover:text-netflix-white transition py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left text-netflix-lightGray hover:text-netflix-white transition py-2"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('blogs')}
              className="block w-full text-left text-netflix-lightGray hover:text-netflix-white transition py-2"
            >
              Blogs
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-netflix-lightGray hover:text-netflix-white transition py-2"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
