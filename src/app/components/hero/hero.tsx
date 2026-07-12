'use client'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Hi, I&apos;m Dimitrios Dogiamas
          </h1>
          <div className="h-1 w-32 bg-white/40 mx-auto rounded-full mb-8"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-neutral-400 mb-12 leading-relaxed max-w-3xl mx-auto">
          A passionate <span className="text-white font-semibold">Full-Stack Developer</span> crafting beautiful and functional digital experiences with modern technologies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="group px-8 py-4 bg-white text-black rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] transform hover:-translate-y-1 font-medium"
          >
            <span className="flex items-center gap-2">
              View My Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          <a
            href="#contact"
            className="group px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.08)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] transform hover:-translate-y-1 font-medium"
          >
            <span className="flex items-center gap-2">
              Contact Me
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
