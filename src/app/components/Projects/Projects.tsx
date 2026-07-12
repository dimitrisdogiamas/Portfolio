'use client'

export function Projects() {
  const projects = [
    {
      title: "NextBuy - E-Commerce Platform",
      description: "A full-featured e-commerce platform with modern UI/UX, authentication, RESTful API, Stripe payment integration, inventory management, and admin panel.",
      technologies: ["NestJS", "Prisma ORM", "MySQL", "TypeScript", "JWT", "Stripe"],
      image: "/images/nextbuy.png",
      liveUrl: "https://e-com-peach-mu.vercel.app/",
      githubUrl: "https://github.com/dimitrisdogiamas/E-com",
      isFeatured: true,
      category: "Full Stack",
    },
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio showcasing projects and skills with dark mode support, smooth animations, and optimized performance.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      image: "/api/placeholder/400/250",
      liveUrl: "https://portfolio-seven-liart-70.vercel.app/",
      githubUrl: "https://github.com/dimitrisdogiamas/Portfolio",
      isFeatured: true,
      category: "Frontend",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <p className="text-xl text-neutral-400">
            Here are some of my recent works
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-neutral-950 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.04)] hover:shadow-[0_0_50px_rgba(255,255,255,0.12)] transition-all duration-300 overflow-hidden border border-white/10 hover:border-white/25"
            >
              <div className="relative h-64 bg-neutral-900 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-lg font-semibold">Project Preview</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-neutral-200 transition-colors">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-white/10 text-neutral-200 text-sm rounded-full font-medium border border-white/10">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-neutral-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-neutral-900 text-neutral-300 text-sm rounded-lg font-medium border border-white/10 hover:border-white/30 hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-white text-black rounded-lg hover:bg-neutral-200 transition-all duration-300 text-center font-medium shadow-[0_0_30px_rgba(255,255,255,0.12)] hover:shadow-[0_0_50px_rgba(255,255,255,0.22)]"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border border-white/20 text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 text-center font-medium"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
