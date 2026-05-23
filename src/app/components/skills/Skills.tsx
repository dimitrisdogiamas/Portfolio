'use client'

export function Skills() {
  const skills = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "Next.js", level: 88, icon: "▲" },
        { name: "TypeScript", level: 85, icon: "📘" },
        { name: "JavaScript", level: 92, icon: "🟨" },
        { name: "Tailwind CSS", level: 90, icon: "🎨" },
        { name: "HTML/CSS", level: 95, icon: "🌐" }
      ]
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "NestJS", level: 88, icon: "🔴" },
        { name: "Express.js", level: 80, icon: "⚡" },
        { name: "Prisma ORM", level: 85, icon: "🔷" },
        { name: "MySQL", level: 82, icon: "🐬" },
        { name: "REST APIs", level: 90, icon: "🔗" }
      ]
    },
    {
      category: "Tools & DevOps",
      technologies: [
        { name: "Git", level: 90, icon: "📚" },
        { name: "Docker", level: 75, icon: "🐳" },
        { name: "Vercel", level: 85, icon: "▲" },
        { name: "VS Code", level: 95, icon: "💙" },
        { name: "Postman", level: 88, icon: "📮" },
        { name: "npm/yarn", level: 90, icon: "📦" }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are the technologies I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className="group bg-gray-800 border border-gray-700 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-blue-500/50 hover:-translate-y-2"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {skillGroup.category}
                </h3>
                <div className="h-0.5 w-16 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                {skillGroup.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="group/item">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{tech.icon}</span>
                        <span className="text-gray-200 font-medium group-hover/item:text-white transition-colors">
                          {tech.name}
                        </span>
                      </div>
                      <span className="text-blue-400 font-semibold text-sm">
                        {tech.level}%
                      </span>
                    </div>
                    
                    <div className="relative">
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-out shadow-lg"
                          style={{ 
                            width: `${tech.level}%`,
                            boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
                          }}
                        ></div>
                      </div>
                      
                      {/* Animated glow effect */}
                      <div 
                        className="absolute top-0 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover/item:opacity-30 transition-opacity duration-300"
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
        
        {/* Additional info section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m constantly exploring new technologies and improving my skills. Currently diving deeper into 
              <span className="text-blue-400 font-semibold"> cloud technologies</span>, 
              <span className="text-purple-400 font-semibold"> microservices architecture</span>, and 
              <span className="text-pink-400 font-semibold"> advanced React patterns</span>.
            </p>
            
            <div className="flex justify-center gap-4 mt-6">
              <div className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg">
                <span className="text-green-400">●</span>
                <span className="text-gray-300 text-sm">Currently Learning: AWS</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg">
                <span className="text-blue-400">●</span>
                <span className="text-gray-300 text-sm">Next: GraphQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}