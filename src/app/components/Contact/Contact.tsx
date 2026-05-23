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
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl  md:text-5xl font-bold text-center mb-16">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let&apos;s Connect</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I&apos;m always looking for new opportunities and exciting projects.
              Wheather you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">📧</span>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:dimdog03@gmail.com" className="text-blue-600 hover:underline">dimdog03@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">💼</span>
                </div>
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/dimitrios-dogiamas-0665ba23a/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://www.linkedin.com/in/dimitrios-dogiamas-0665ba23a/
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">💻</span>
                </div>
                <div>
                  <p className="font-semibold">GitHub</p>
                  <a href="https://github.com/dimitrisdogiamas" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
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
              <label htmlFor="name" className="block text-sm font-medium  mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}