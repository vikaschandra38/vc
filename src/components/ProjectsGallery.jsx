import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import projectsData from '../data/projects.json'
import ProjectModal from './ProjectModal'
import { Button } from './ui/button'

export default function ProjectsGallery() {
  const scrollContainerRef = useRef(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    const container = scrollContainerRef.current
    container?.addEventListener('scroll', checkScroll)
    window.addEventListener('resize', checkScroll)
    return () => {
      container?.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [])

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="projects" className="py-20 px-4 bg-netflix-darkGray">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 animate-slideUp">
          <h2 className="text-4xl md:text-5xl font-bold text-netflix-white mb-4">
            All Projects
          </h2>
          <p className="text-netflix-lightGray text-lg">
            Explore my complete collection of projects
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Scroll Button */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 bg-netflix-red hover:bg-netflix-darkRed rounded-full p-2 transition md:flex hidden"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} className="text-netflix-white" />
            </button>
          )}

          {/* Right Scroll Button */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 bg-netflix-red hover:bg-netflix-darkRed rounded-full p-2 transition md:flex hidden"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} className="text-netflix-white" />
            </button>
          )}

          {/* Scrollable Projects */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide flex gap-6 pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {projectsData.projects.map((project) => (
              <div
                key={project.id}
                className="flex-shrink-0 w-full sm:w-96 group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-netflix-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button>View Details</Button>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-netflix-white group-hover:text-netflix-red transition">
                    {project.title}
                  </h3>
                  <p className="text-netflix-lightGray text-sm mt-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
