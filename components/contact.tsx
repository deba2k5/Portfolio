"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Calendar, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    // In a real implementation, this would send an email to debangshuchatterjee2005@gmail.com
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="py-8" id="contact">
      <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-black/50 border-green-500 text-white placeholder:text-gray-500 focus:border-cyan-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="bg-black/50 border-green-500 text-white placeholder:text-gray-500 focus:border-cyan-500"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this regarding?"
                required
                className="bg-black/50 border-green-500 text-white placeholder:text-gray-500 focus:border-cyan-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                required
                className="min-h-[120px] bg-black/50 border-green-500 text-white placeholder:text-gray-500 focus:border-cyan-500"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-black font-medium"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </span>
              )}
            </Button>

            {submitted && (
              <div className="p-3 bg-green-500/20 border border-green-500 rounded-md text-green-400 text-sm">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>

        <div className="space-y-6">
          <div className="p-4 border border-green-500 rounded-md bg-black/50">
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">Connect With Me</h3>

            <div className="space-y-4">
              <a
                href="https://github.com/predator2k5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-green-500 transition-colors"
              >
                <Github className="h-5 w-5 mr-3" />
                <span>github.com/predator2k5</span>
              </a>

              <a
                href="https://www.linkedin.com/in/debangshu-chatterjee-858859282/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-green-500 transition-colors"
              >
                <Linkedin className="h-5 w-5 mr-3" />
                <span>linkedin.com/in/debangshu-chatterjee-858859282</span>
              </a>

              <a
                href="mailto:debangshuchatterjee2005@gmail.com"
                className="flex items-center text-gray-300 hover:text-green-500 transition-colors"
              >
                <Mail className="h-5 w-5 mr-3" />
                <span>debangshuchatterjee2005@gmail.com</span>
              </a>

              <a
                href="tel:+916290277345"
                className="flex items-center text-gray-300 hover:text-green-500 transition-colors"
              >
                <span className="mr-3">📱</span>
                <span>+91 6290277345</span>
              </a>

              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-green-500 transition-colors"
              >
                <Calendar className="h-5 w-5 mr-3" />
                <span>Schedule a meeting</span>
              </a>
            </div>
          </div>

          <div className="p-4 border border-cyan-500 rounded-md bg-black/50">
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">Location</h3>
            <div className="aspect-video bg-gray-800 rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29479.97723266242!2d88.35004724553767!3d22.49969425636225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271237f28d9c3%3A0x8de4757da5e1e1a7!2sJadavpur%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1649769012345!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jadavpur, Kolkata Map"
              ></iframe>
            </div>
            <p className="mt-2 text-sm text-gray-400">Jadavpur, Kolkata, West Bengal, India</p>
          </div>
        </div>
      </div>
    </div>
  )
}
