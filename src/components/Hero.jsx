import { Calendar, Download, Github, Linkedin, Mail } from 'lucide-react';
import contactData from '../data/contact.json';
import { Button } from './ui/button';
import heroImg from '/hero.png';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          poster={heroImg}
          className="w-full h-full object-cover"
        >
          <source
            src="https://www.pexels.com/download/video/5827784/"
            type="video/mp4"
          />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-netflix-black/60 via-netflix-black/50 to-netflix-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-slideUp">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-netflix-white mb-4">
            Vikas Chandra
          </h1>
          <p className="text-xl sm:text-2xl text-netflix-white mb-8">
            Front-end Engineer & UI/UX Enthusiast
          </p>
          <p className="text-base sm:text-lg text-netflix-white mb-12 max-w-2xl mx-auto">
            Building beautiful, responsive web experiences with modern technologies. Specializing in React, Tailwind CSS, and interactive design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
            <a href={`mailto:${contactData.contact.email}`}>
              <Button size="lg" className="gap-2 w-full sm:w-auto">
                <Mail size={18} />
                Contact Me
              </Button>
            </a>
            <a href={contactData.contact.github} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                <Github size={18} />
                GitHub
              </Button>
            </a>
            <a href={contactData.contact.linkedin} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                <Linkedin size={18} />
                LinkedIn
              </Button>
            </a>
            <a href={contactData.contact.resume} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                <Download size={18} />
                Resume
              </Button>
            </a>
            <a href={contactData.contact.cal} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                <Calendar size={18} />
                Cal.com
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
        onClick={() => {
          const nextSection = document.getElementById('featured')
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' })
          }
        }}
      >
        <div className="animate-bounce text-netflix-red hover:scale-110 transition-transform">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
