# Copilot Instructions: Netflix-Themed Portfolio Website

## Project Overview

Building a modern portfolio website for **Mahesh Babu** (Front-end Engineer) inspired by Netflix's design language, theme, and interaction patterns. The portfolio showcases projects, blogs, and provides multiple ways to connect with recruiters and collaborators.

## Tech Stack

- **Framework**: React 19 with Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Build Tool**: Vite
- **Data Management**: JSON files (no external APIs)
- **Hosting**: GitHub Pages
- **Carousel**: Embla Carousel or shadcn/ui carousel component
- **Modal/Dialog**: shadcn/ui Dialog component (built on Radix UI)

## Design Language

- **Color Palette**: 
  - Primary: Dark backgrounds (#0f0f0f, #1a1a1a)
  - Accent: Netflix red (#E50914) or vibrant red alternatives
  - Text: White (#ffffff) and light grays (#b3b3b3)
  - Hover/Interactive: Subtle gradients and brightness shifts

- **Typography**:
  - Heading font: Bold, sans-serif (e.g., Inter, Outfit, or similar)
  - Body font: Clean, readable sans-serif (e.g., Inter)
  - Use Google Fonts or system fonts

- **Interaction Patterns**:
  - Smooth fade-ins and scale transitions
  - Hover effects on cards and buttons (brightness, scale)
  - Smooth scroll behavior
  - Netflix-style modals for project/blog details

## Project Requirements

### 1. Hero Section
- **Background**: Muted autoplaying video with poster/thumbnail fallback
  - Video must be `muted` (both desktop and mobile)
  - Use `autoplay`, `loop`, `muted` attributes
  - Poster image displays while video loads
  - Video stored in `public/assets/` folder

- **Overlay Content**:
  - Name: "Mahesh Babu"
  - Title: "Front-end Engineer"
  - Dark gradient overlay on video (rgba(0,0,0,0.6) or similar)

- **CTA Buttons**:
  - Contact Me (link to contact section or email modal)
  - GitHub (link to GitHub profile)
  - LinkedIn (link to LinkedIn profile)
  - Resume (link to downloadable PDF)
  - Cal.com (link to calendar scheduling)
  - Styled using shadcn/ui Button components

### 2. Featured Projects Section
- Display 2–3 most acclaimed or highly visited projects
- Grid layout (responsive: 1 column mobile, 2–3 columns desktop)
- Each project shows:
  - Project image/thumbnail
  - Project title
  - Brief description
  - Technology tags
  - "View Project" button
- Data sourced from `src/data/projects.json`
- Use shadcn/ui Card components

### 3. All Projects Section (Horizontally Scrollable Gallery)
- Display all projects in a horizontally scrollable carousel
- Use Embla Carousel or shadcn/ui carousel component
- Each project card shows:
  - Project image
  - Project title
- **Click interaction**:
  - Opens a modal/dialog (shadcn/ui Dialog) with:
    - Full project title
    - Project description
    - Technologies used
    - Project images/screenshots
    - Links: GitHub repo, Live demo, Project details
    - Close button

### 4. Blogs Section
- Display blog posts in a responsive grid (similar to Featured Projects)
- Each blog card shows:
  - Blog thumbnail/cover image
  - Blog title
  - Blog snippet (first 100–150 characters)
  - Date posted
  - Tags/categories
- Data sourced from `src/data/blogs.json`
- **Click interaction**:
  - Opens a modal showing:
    - Full blog title
    - Blog content preview or summary
    - Publication date
    - "Read on Blog" button (links to external blog or internal blog page)
    - "Share" options (social sharing links)

### 5. Connect with Me Section
- Display all contact methods in an organized layout:
  - Email (with mailto link or contact form modal)
  - GitHub (link to GitHub profile)
  - LinkedIn (link to LinkedIn profile)
  - Cal.com (embedded widget or direct link to calendar)
- Use shadcn/ui Button or Badge components with icons
- Responsive layout (stack on mobile, spread on desktop)
- Optional: Embedded Cal.com availability widget

### 6. Footer Section
- Footer content:
  - "© 2026 Mahesh Babu. All rights reserved."
  - Quick navigation links to sections (Home, Projects, Blogs, Contact)
  - Social links (GitHub, LinkedIn, Email)
  - Light text on dark background (Netflix style)
- Sticky or standard footer (TBD based on design preference)

## Data Structure (JSON)

### `src/data/projects.json`
```json
{
  "projects": [
    {
      "id": "project-1",
      "title": "Project Title",
      "description": "Brief description",
      "fullDescription": "Longer detailed description",
      "image": "/assets/projects/project-1.jpg",
      "images": ["/assets/projects/project-1-1.jpg", "/assets/projects/project-1-2.jpg"],
      "technologies": ["React", "Tailwind CSS", "Node.js"],
      "featured": true,
      "links": {
        "github": "https://github.com/...",
        "live": "https://...",
        "details": "https://..."
      }
    }
  ]
}
```

### `src/data/blogs.json`
```json
{
  "blogs": [
    {
      "id": "blog-1",
      "title": "Blog Title",
      "snippet": "Brief preview text...",
      "content": "Full blog content or link to external blog",
      "thumbnail": "/assets/blogs/blog-1.jpg",
      "date": "2026-02-11",
      "tags": ["React", "Performance"],
      "links": {
        "read": "https://...",
        "share": {}
      }
    }
  ]
}
```

### `src/data/contact.json`
```json
{
  "contact": {
    "email": "mahesh@example.com",
    "github": "https://github.com/...",
    "linkedin": "https://linkedin.com/in/...",
    "cal": "https://cal.com/...",
    "resume": "/assets/resume.pdf"
  }
}
```

## Component Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── FeaturedProjects.jsx
│   ├── ProjectsGallery.jsx
│   ├── ProjectModal.jsx
│   ├── BlogsSection.jsx
│   ├── BlogModal.jsx
│   ├── ContactSection.jsx
│   ├── Footer.jsx
│   └── ui/ (shadcn/ui components)
│       ├── button.jsx
│       ├── card.jsx
│       ├── dialog.jsx
│       └── ... (other shadcn components)
├── data/
│   ├── projects.json
│   ├── blogs.json
│   └── contact.json
├── styles/
│   └── global.css (if needed for custom animations)
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Implementation Steps (In Order)

1. Install and configure Tailwind CSS
2. Initialize shadcn/ui and add necessary components (Button, Card, Dialog, Carousel)
3. Create JSON data files with sample project and blog data
4. Build Header component with navigation
5. Implement Hero section with muted video and CTAs
6. Create Featured Projects section with grid layout
7. Build horizontally scrollable Projects Gallery with modal
8. Develop Blogs section with grid and modal
9. Create Contact section with links/buttons
10. Build Footer with navigation and social links
11. Configure Tailwind color palette (Netflix dark theme + red accent)
12. Add responsive design for mobile, tablet, and desktop
13. Add smooth animations and transitions (fade-ins, hover effects)
14. Configure GitHub Pages deployment in `vite.config.js` and `package.json`
15. Optimize video and images for performance
16. Final testing and polish

## Key Considerations

### Video Background
- Video file stored in `public/assets/hero-video.mp4`
- Use HTML5 `<video>` element with `muted` and `autoplay` attributes
- Poster image: `public/assets/hero-poster.jpg` (displays while video loads)
- Fallback: If video fails to load, display poster image and continue
- Dimensions: High quality for desktop, optimize file size for performance

### Carousel Library
- **Embla Carousel**: Zero-dependency, lightweight, Tailwind-compatible
  - Install: `npm install embla-carousel embla-carousel-react`
  - Scroll-snap CSS for smooth scrolling
- Alternative: Check shadcn/ui carousel component availability
- Horizontal scroll on desktop, swipe on mobile

### Modal/Dialog
- Use **shadcn/ui Dialog** component (built on Radix UI)
- For project details modal: Full project info, images, links
- For blog details modal: Blog title, content preview, read link
- Smooth animations and backdrop blur

### GitHub Pages Setup
- Repository name: `my-portfolio`
- Base path in `vite.config.js`: `base: '/my-portfolio/'`
- Deploy script in `package.json`: `"deploy": "npm run build && gh-pages -d dist"`
- Enable GitHub Pages in repository settings (Pages > Source: GitHub Actions or gh-pages branch)

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: < 640px (single column layouts)
  - Tablet: 640px – 1024px (2-column layouts where appropriate)
  - Desktop: > 1024px (full multi-column layouts)
- Use Tailwind's responsive utilities (`md:`, `lg:`, etc.)

### Performance Optimization
- Lazy load project and blog images
- Optimize video file size (H.264 codec, MP4 format)
- Minify and compress assets
- Code splitting for components (Vite handles this)
- Use `loading="lazy"` for images

### Accessibility
- Alt text for all images
- Semantic HTML (use `<main>`, `<section>`, `<article>`)
- Keyboard navigation for modals and carousels
- ARIA labels for buttons and interactive elements
- Sufficient color contrast (dark theme + white text meets WCAG standards)

## Additional Features (Optional/Future)

1. **Search or filter projects** by technology
2. **Dark/Light theme toggle** (keep dark as default, Netflix style)
3. **Blog search and categories**
4. **Analytics** (Google Analytics or similar)
5. **Contact form** instead of just links
6. **Reading time estimate** for blogs
7. **Newsletter signup**
8. **Testimonials or endorsements section**
9. **Skills section** with visual representation
10. **Timeline of experience** or career path

## Notes

- Keep the design clean and minimal, following Netflix's aesthetic
- Prioritize performance and fast load times
- Test on real devices (mobile, tablet, desktop)
- Ensure smooth video playback (with poster fallback)
- Test all modal interactions and navigation
- Validate all external links before deployment
