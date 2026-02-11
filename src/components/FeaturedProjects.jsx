import { ExternalLink, Github } from 'lucide-react'
import projectsData from '../data/projects.json'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

export default function FeaturedProjects() {
  const featured = projectsData.projects.filter(p => p.featured).slice(0, 5)

  return (
    <section id="featured" className="py-20 px-4 bg-netflix-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-slideUp">
          <h2 className="text-4xl md:text-5xl font-bold text-netflix-white mb-4">
            Featured Projects
          </h2>
          <p className="text-netflix-lightGray text-lg">
            A selection of my most acclaimed and impactful projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project, index) => (
            <Card
              key={project.id}
              className="h-full flex flex-col hover:scale-105 transition-transform duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <CardHeader className="min-h-[7rem] flex flex-col justify-start py-4">
                <CardTitle className="">{project.title}</CardTitle>
                <CardDescription className="">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-between flex-grow">
                <div className="min-h-[5rem] mb-2">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-2 bg-netflix-mediumGray text-netflix-white text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline" className="gap-2">
                      <Github size={16} />
                      Code
                    </Button>
                  </a>
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="gap-2">
                      <ExternalLink size={16} />
                      Live Demo
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
