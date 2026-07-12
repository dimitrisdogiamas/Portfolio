'use client'

import { useState } from "react"



export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: '',
    message: '',
  })



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //Handle form submission here
    console.log('Form submitted:', formData);

  }


  return (
    <section id="contact" className="py-20 px-4 bg-neutral-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl  md:text-5xl font-bold text-center mb-16 text-white">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Let&apos;s Connect</h3>
            <p className="text-neutral-400 mb-8">
              I&apos;m always looking for new opportunities and exciting projects.
              Wheather you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                  <span className="text-black text-2xl">📧</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a href="mailto:dimdog03@gmail.com" className="text-neutral-300 hover:text-white hover:underline">dimdog03@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                  <span className="text-black text-2xl">💼</span>
                </div>
                <div>
                  <p className="font-semibold text-white">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/dimitrios-dogiamas-0665ba23a/" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white hover:underline">
                    https://www.linkedin.com/in/dimitrios-dogiamas-0665ba23a/
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                  <span className="text-black text-xl">💻</span>
                </div>
                <div>
                  <p className="font-semibold text-white">GitHub</p>
                  <a href="https://github.com/dimitrisdogiamas" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white hover:underline">
                    https://github.com/dimitrisdogiamas
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              className="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/40 focus:border-white/40 bg-black text-white" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/40 focus:border-white/40 bg-black text-white" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/40 focus:border-white/40 bg-black text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.12)] hover:shadow-[0_0_50px_rgba(255,255,255,0.22)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
