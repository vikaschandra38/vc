import BlogsSection from './components/BlogsSection'
import ContactSection from './components/ContactSection'
import FeaturedProjects from './components/FeaturedProjects'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectsGallery from './components/ProjectsGallery'

export default function App() {
  return (
    <div className="bg-netflix-black min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedProjects />
        <ProjectsGallery />
        <BlogsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
