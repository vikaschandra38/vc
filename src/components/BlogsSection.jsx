import { useState } from 'react'
import blogsData from '../data/blogs.json'
import { formatDate } from '../lib/utils'
import BlogModal from './BlogModal'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

export default function BlogsSection() {
  const [selectedBlog, setSelectedBlog] = useState(null)

  return (
    <section id="blogs" className="py-20 px-4 bg-netflix-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-slideUp">
          <h2 className="text-4xl md:text-5xl font-bold text-netflix-white mb-4">
            Latest Blogs
          </h2>
          <p className="text-netflix-lightGray text-lg">
            Insights on web development, performance, and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogsData.blogs.map((blog, index) => (
            <Card
              key={blog.id}
              className="hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden"
              onClick={() => setSelectedBlog(blog)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">{blog.title}</CardTitle>
                    <CardDescription>{formatDate(blog.date)}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-netflix-lightGray text-sm line-clamp-2 mb-4">
                  {blog.snippet}
                </p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-netflix-mediumGray text-netflix-white text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Blog Modal */}
      <BlogModal
        blog={selectedBlog}
        isOpen={!!selectedBlog}
        onClose={() => setSelectedBlog(null)}
      />
    </section>
  )
}
