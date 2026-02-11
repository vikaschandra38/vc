import { ExternalLink, Github } from 'lucide-react'
import { Button } from './ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from './ui/dialog'

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Images */}
          <div className="grid grid-cols-1 gap-4">
            {project.images.map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt={`${project.title} screenshot ${idx + 1}`}
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            ))}
          </div>

          {/* Full Description */}
          <div>
            <h3 className="text-lg font-semibold text-netflix-white mb-3">
              About this project
            </h3>
            <p className="text-netflix-lightGray leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-netflix-white mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-netflix-mediumGray text-netflix-white rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3 flex-wrap">
            <a href={project.links.github} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <Github size={18} />
                View on GitHub
              </Button>
            </a>
            <a href={project.links.live} target="_blank" rel="noopener noreferrer">
              <Button className="gap-2">
                <ExternalLink size={18} />
                Live Demo
              </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
