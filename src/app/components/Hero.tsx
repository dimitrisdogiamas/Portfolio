export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Hi, I am Dimitrios Dogiamas
        </h1>
        <p className="text-xl md:text-2xl text-neutral-400 mb-8">
          A passionate web developer crafting beautiful and functional digital experiences
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.12)]"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
