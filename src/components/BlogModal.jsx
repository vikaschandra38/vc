import { ExternalLink, Share2 } from 'lucide-react'
import { useState } from 'react'
import { formatDate } from '../lib/utils'
import { Button } from './ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from './ui/dialog'

export default function BlogModal({ blog, isOpen, onClose }) {
  const [showShareMenu, setShowShareMenu] = useState(false)

  if (!blog) return null

  const shareUrl = blog.links.read
  const shareTitle = blog.title

  const handleShare = (platform) => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    }
    if (urls[platform]) {
      window.open(urls[platform], '_blank')
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{blog.title}</DialogTitle>
          <DialogDescription>
            Published on {formatDate(blog.date)}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Thumbnail */}
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className="w-full h-96 object-cover rounded-lg"
            loading="lazy"
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-netflix-mediumGray text-netflix-white text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Content Preview */}
          <div>
            <h3 className="text-lg font-semibold text-netflix-white mb-3">
              Overview
            </h3>
            <p className="text-netflix-lightGray leading-relaxed">
              {blog.content}
            </p>
          </div>

          {/* Read & Share Buttons */}
          <div className="flex gap-3 flex-wrap">
            <a href={blog.links.read} target="_blank" rel="noopener noreferrer">
              <Button className="gap-2">
                <ExternalLink size={18} />
                Read Full Article
              </Button>
            </a>

            <div className="relative">
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => setShowShareMenu(!showShareMenu)}
              >
                <Share2 size={18} />
                Share
              </Button>
              {showShareMenu && (
                <div className="absolute top-full mt-2 right-0 bg-netflix-mediumGray rounded-lg shadow-lg overflow-hidden z-10">
                  <button
                    onClick={() => {
                      handleShare('twitter')
                      setShowShareMenu(false)
                    }}
                    className="block w-full text-left px-4 py-2 text-netflix-white hover:bg-netflix-darkGray transition text-sm"
                  >
                    Share on Twitter
                  </button>
                  <button
                    onClick={() => {
                      handleShare('linkedin')
                      setShowShareMenu(false)
                    }}
                    className="block w-full text-left px-4 py-2 text-netflix-white hover:bg-netflix-darkGray transition text-sm"
                  >
                    Share on LinkedIn
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
