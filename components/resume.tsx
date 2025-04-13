"use client"

import { Button } from "@/components/ui/button"
import { FileDown, Printer, ExternalLink } from "lucide-react"

export function Resume() {
  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Institute of Engineering and Management",
      period: "2023 - 2027",
      description: "Focused on IoT, Machine Learning, and Web Development",
    },
  ]

  const experience = [
    {
      title: "Founder",
      company: "SteadyStride",
      period: "2024 - Present",
      description: "Leading a HealthTech startup focused on wearable health monitoring solutions",
    },
    {
      title: "Frontend Lead",
      company: "ASME IEM Student Chapter",
      period: "2024 - Present",
      description: "Leading frontend development for the ASME IEM website",
    },
  ]

  const skills = [
    { category: "Programming", items: ["Python", "C++", "HTML", "CSS", "JavaScript", "TypeScript", "React.js"] },
    { category: "ML/AI", items: ["NumPy", "Pandas", "Keras", "Theano", "Hugging Face"] },
    { category: "IoT/Hardware", items: ["Arduino", "NodeMCU", "ATmega328P", "HC-05", "Sensors"] },
    { category: "Tools", items: ["Firebase", "Figma", "Git", "Framer Motion", "Tailwind CSS", "Streamlit", "Vercel"] },
  ]

  const projects = [
    {
      title: "MindPal",
      description: "VR Headset with inbuilt massager for mental health",
    },
    {
      title: "SteadyStride Anti-Tremor Band",
      description: "Patented wearable for tremor reduction",
    },
    {
      title: "Criminal Record Management System",
      description: "Role-based secure web app",
    },
  ]

  const downloadResume = () => {
    // Create a dummy PDF download
    const link = document.createElement("a")
    link.href = "#"
    link.download = "Debangshu_Chatterjee_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Show alert for demo purposes
    alert("Resume download functionality would be implemented here with a real PDF file.")
  }

  return (
    <div className="py-8" id="resume">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
          Resume
        </h2>

        <div className="flex gap-2">
          <Button
            variant="outline"
            className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
            onClick={downloadResume}
          >
            <FileDown className="mr-2 h-4 w-4" />
            Download PDF
          </Button>

          <Button
            variant="outline"
            className="border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black"
            onClick={() => window.print()}
          >
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
        </div>
      </div>

      <div className="border border-green-500 rounded-md bg-black/50 p-6 font-mono">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-cyan-400 mb-2">Debangshu Chatterjee</h1>
          <p className="text-gray-400">Developer | Innovator | IoT Enthusiast | ML Explorer</p>
          <div className="flex justify-center gap-4 mt-2 text-sm">
            <a
              href="mailto:debangshuchatterjee2005@gmail.com"
              className="text-green-500 hover:underline flex items-center"
            >
              <span className="mr-1">✉️</span> debangshuchatterjee2005@gmail.com
            </a>
            <a href="tel:+916290277345" className="text-green-500 hover:underline flex items-center">
              <span className="mr-1">📱</span> +91 6290277345
            </a>
            <a
              href="https://github.com/predator2k5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline flex items-center"
            >
              <span className="mr-1">💻</span> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/debangshu-chatterjee-858859282/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline flex items-center"
            >
              <span className="mr-1">🔗</span> LinkedIn
            </a>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold text-cyan-400 mb-3 border-b border-green-500 pb-1">EDUCATION</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-bold text-white">{edu.degree}</h3>
                <span className="text-gray-400">{edu.period}</span>
              </div>
              <p className="text-green-500">{edu.institution}</p>
              <p className="text-sm text-gray-400">{edu.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold text-cyan-400 mb-3 border-b border-green-500 pb-1">EXPERIENCE</h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-bold text-white">
                  {exp.title} - {exp.company}
                </h3>
                <span className="text-gray-400">{exp.period}</span>
              </div>
              <p className="text-sm text-gray-400">{exp.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold text-cyan-400 mb-3 border-b border-green-500 pb-1">SKILLS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skillGroup, index) => (
              <div key={index}>
                <h3 className="font-bold text-white mb-1">{skillGroup.category}</h3>
                <p className="text-sm text-gray-400">{skillGroup.items.join(", ")}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold text-cyan-400 mb-3 border-b border-green-500 pb-1">PROJECTS</h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-3">
              <h3 className="font-bold text-white">{project.title}</h3>
              <p className="text-sm text-gray-400">{project.description}</p>
            </div>
          ))}
          <p className="text-sm text-green-500 flex items-center mt-2">
            <ExternalLink className="h-3 w-3 mr-1" />
            <a href="#projects" className="hover:underline">
              View all projects
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-cyan-400 mb-3 border-b border-green-500 pb-1">ACHIEVEMENTS</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-400">
            <li>2X AICTE IDE Bootcamp Winner 2024 (IIM Sambalpur), 2025 (Amity University Ranchi) - Team Lead</li>
            <li>Arduino Hackathon Winner 2024 IEM - Team Lead</li>
            <li>2nd Runners Up Tech Intella Jadavpur University - Team Lead</li>
            <li>Smart India Hackathon 2024 Finalist PSID 1528 - Team Lead</li>
            <li>Top 10 TiE Pitch Deck Intracollege - Team Lead</li>
            <li>Yukti Udaymahotsav Eastern Zone Top 30 - Team Lead</li>
            <li>AICTE Inventor Challenge 2024 Finalist Top 20 - Team Lead</li>
            <li>DDC 2025 - Core Team Member AIR 29</li>
            <li>Aegis Graham Bell 2025 Nominee</li>
            <li>ICOE Hackathon Rank 53</li>
            <li>Kshitij 2025 Bplan Finalist Top 10</li>
            <li>Eureka Innovacia IEM 2025 - Runners Up</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
