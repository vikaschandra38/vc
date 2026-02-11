import { Calendar, Github, Linkedin, Mail } from 'lucide-react'
import contactData from '../data/contact.json'
import { Button } from './ui/button'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-netflix-darkGray">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl md:text-5xl font-bold text-netflix-white mb-4">
            Connect with Me
          </h2>
          <p className="text-netflix-lightGray text-lg">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out!
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Email */}
          <a href={`mailto:${contactData.contact.email}`}>
            <div className="bg-netflix-mediumGray hover:bg-netflix-lightGray/20 transition p-6 rounded-lg text-center group h-full">
              <div className="flex justify-center mb-4">
                <div className="bg-netflix-red rounded-full p-4 group-hover:scale-110 transition">
                  <Mail size={28} className="text-netflix-white" />
                </div>
              </div>
              <h3 className="text-netflix-white font-semibold mb-2">Email</h3>
              <p className="text-netflix-lightGray text-sm break-all">
                {contactData.contact.email}
              </p>
            </div>
          </a>

          {/* GitHub */}
          <a href={contactData.contact.github} target="_blank" rel="noopener noreferrer">
            <div className="bg-netflix-mediumGray hover:bg-netflix-lightGray/20 transition p-6 rounded-lg text-center group h-full">
              <div className="flex justify-center mb-4">
                <div className="bg-netflix-red rounded-full p-4 group-hover:scale-110 transition">
                  <Github size={28} className="text-netflix-white" />
                </div>
              </div>
              <h3 className="text-netflix-white font-semibold mb-2">GitHub</h3>
              <p className="text-netflix-lightGray text-sm">View my projects</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a href={contactData.contact.linkedin} target="_blank" rel="noopener noreferrer">
            <div className="bg-netflix-mediumGray hover:bg-netflix-lightGray/20 transition p-6 rounded-lg text-center group h-full">
              <div className="flex justify-center mb-4">
                <div className="bg-netflix-red rounded-full p-4 group-hover:scale-110 transition">
                  <Linkedin size={28} className="text-netflix-white" />
                </div>
              </div>
              <h3 className="text-netflix-white font-semibold mb-2">LinkedIn</h3>
              <p className="text-netflix-lightGray text-sm">Connect with me</p>
            </div>
          </a>

          {/* Calendar */}
          <a href={contactData.contact.cal} target="_blank" rel="noopener noreferrer">
            <div className="bg-netflix-mediumGray hover:bg-netflix-lightGray/20 transition p-6 rounded-lg text-center group h-full">
              <div className="flex justify-center mb-4">
                <div className="bg-netflix-red rounded-full p-4 group-hover:scale-110 transition">
                  <Calendar size={28} className="text-netflix-white" />
                </div>
              </div>
              <h3 className="text-netflix-white font-semibold mb-2">Schedule</h3>
              <p className="text-netflix-lightGray text-sm">Book a meeting</p>
            </div>
          </a>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href={`mailto:${contactData.contact.email}`}>
            <Button size="lg" className="gap-2">
              <Mail size={18} />
              Send me an Email
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
