'use client'

import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">
              Hello! I&apos;m <span className="text-blue-400">Dimitrios Dogiamas</span>
            </h3>
            
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                I&apos;m a passionate <strong className="text-white">Full-Stack Developer</strong> with a love for creating beautiful, functional, and user-friendly digital experiences. With expertise in modern web technologies, I enjoy turning complex problems into simple, elegant solutions.
              </p>
              
              <p>
                My journey in web development started with curiosity and has evolved into a passion for building applications that make a difference. I specialize in <strong className="text-blue-400">React, Next.js, Node.js, and modern database technologies</strong>.
              </p>
              
              <p>
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee while brainstorming the next big idea.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium"
              >
                <span className="flex items-center gap-2">
                  Download Resume
                  <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </a>
              
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl p-2">
                <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center shadow-inner overflow-hidden">
                  {/* Profile Image - Replace with your actual image */}
                  <div className="relative w-full h-full">
                    <Image
                      src="/profile.jpg" // Add your profile image here
                      alt="Dimitrios Dogiamas"
                      fill
                      className="object-cover rounded-full"
                      onError={(e) => {
                        // Fallback to emoji if image doesn't exist
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                    {/* Fallback content */}
                    <div className="absolute inset-0 flex items-center justify-center text-center" style={{ display: 'none' }}>
                      <div>
                        <span className="text-6xl mb-4 block">👨‍💻</span>
                        <p className="text-sm font-medium text-gray-400">Full-Stack Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-pink-500 rounded-full animate-pulse delay-500"></div>
              
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}