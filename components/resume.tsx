"use client"

import { Button } from "@/components/ui/button"
import { FileDown, Printer, ExternalLink } from "lucide-react"

export function Resume() {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering (IoT & CSBT)",
      institution: "Institute of Engineering and Management, Kolkata",
      period: "2023 - 2027",
      description: "Focused on IoT, AI/ML, and Full Stack Development",
    },
    {
      degree: "Higher Secondary (Class 12)",
      institution: "South Point High School, Kolkata",
      period: "2021 - 2023",
      description: "CBSE Curriculum",
    },
    {
      degree: "Secondary (Class 10)",
      institution: "South Point High School, Kolkata",
      period: "2008 - 2021",
      description: "CBSE Curriculum",
    },
  ]

  const experience = [
    {
      title: "Founder",
      company: "Aizenera",
      period: "July 2025 - Present",
      description: "Started an AI-based startup offering automation services and AIML-based product solutions.",
    },
    {
      title: "Research Intern",
      company: "JU NLP Lab (Jadavpur University)",
      period: "July 2025 - Sept 2025",
      description:
        "Worked with Prof. Dr. Dipanjan Das on information retrieval using RAG pipelines, rerankers, and transformers.",
    },
    {
      title: "Project Intern",
      company: "IIC IEM",
      period: "Aug 2023 - Sept 2025",
      description:
        "Developed IoT-based Anti-Tremor Band, KrishakSure AI-powered farming platform, and MindPal AR/VR therapy system.",
    },
  ] // <-- fixed: closed the experience array

  const skills = [
    {
      category: "Programming & Tools",
      items: ["Python", "C++", "Java", "SQL", "JavaScript", "TypeScript", "React.js", "Tailwind CSS", "Git", "Figma"],
    },
    {
      category: "AI/ML & Research",
      items: ["NumPy", "Pandas", "Keras", "Transformers", "RAG Pipelines", "Theano", "Hugging Face", "GenAI"],
    },
    {
      category: "IoT & Hardware",
      items: ["Arduino", "NodeMCU", "ATmega328P", "HC-05", "Sensors", "Embedded Systems"],
    },
    {
      category: "Tools & Deployment",
      items: ["Firebase", "Vercel", "Streamlit", "Framer Motion", "Next.js", "MATLAB"],
    },
  ]

  const projects = [
    {
      title: "SteadyStride Anti-Tremor Band",
      description: "Patented IoT wearable designed to monitor and reduce hand tremors using ML-driven vibration control.",
    },
    {
      title: "MindPal",
      description: "AI/ML-powered AR/VR headset for cognitive engagement and therapy for individuals with autism.",
    },
    {
      title: "KrishakSure",
      description: "AI-powered crop insight and loan advisory platform for farmers.",
    },
    {
      title: "Recruitix (XenCruit)",
      description: "Intelligent interview preparation and proctoring system with chatbot and gaze tracking.",
    },
    {
      title: "Criminal Record Management System",
      description: "Role-based secure web platform for criminal record management.",
    },
  ]

  const achievements = [
    "Smart India Hackathon 2024 National Finalist – Team Lead",
    "AICTE IDE Bootcamp Phase I Winner – 2024",
    "AICTE IDE Bootcamp Phase II Winner – 2025",
    "AICTE Inventor Challenge Finalist – 2024",
    "AICTE Yukti Udaymahotsav Top 30 – 2025",
    "IEEE YESIST12 Malaysia 2025 – Top 3",
    "Infosys Global Hackathon 2025 – AIR 8 (Hyderabad)",
    "Tata Social Enterprise Challenge Winner – 2025",
    "ICYIM 2025 – 1st Runners Up (Kolkata)",
    "Hexafalls 2025 – Winner (Prepverse Track)",
    "Tech Intella 2024 – 2nd Runners Up",
    "DDC 2025 – AIR 29 Core Team",
    "Eureka Innovacia IEM 2025 – Runners Up",
    "Aegis Graham Bell Award Nominee – 2025",
  ]

  const publications = [
    {
      title: "ResumeAnalyzer: An AI Powered Approach to Job Matching and ATS Optimization",
      description: "In press (2025)",
    },
    {
      title: "A Unified Framework for Emotion and Behavioral Modelling in Digital Mental Health Therapy",
      description: "Taylor & Francis Book Chapter, 2025",
    },
  ]

  const patents = [
    {
      title: "Beyond the Bin: Smart Waste Disposable Bin",
      description: "@Patent ID - 202431004110",
    },
    {
      title: "SteadyStride: IoT based Anti Tremor Wearable Device",
      description: "@Patent ID - 202331004231",
    },
  ]

  const downloadResume = () => {
    const link = document.createElement("a")
    // use public root path for Next.js public files and forward slashes
    link.href = "Portfolio\public\Debangshu CV  (1).pdf"
    link.download = "Portfolio\public\Debangshu CV  (1).pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    alert("Resume download triggered.")
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
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-cyan-400 mb-2">Debangshu Chatterjee</h1>
          <p className="text-gray-400">Developer | Innovator | IoT Enthusiast | AI/ML Explorer</p>
          <div className="flex justify-center gap-4 mt-2 text-sm">
            <a
              href="mailto:debangshuchatterjee2005@gmail.com"
              className="text-green-500 hover:underline flex items-center"
            >
              ✉️ debangshuchatterjee2005@gmail.com
            </a>
            <a href="tel:+916290277345" className="text-green-500 hover:underline flex items-center">
              📱 +91 6290277345
            </a>
            <a
              href="https://github.com/deba2k5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline flex items-center"
            >
              💻 GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/debangshu-chatterjee-858859282/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline flex items-center"
            >
              🔗 LinkedIn
            </a>
          </div>
        </div>

        {/* Education */}
        <Section title="EDUCATION" data={education} type="edu" />

        {/* Experience */}
        <Section title="EXPERIENCE" data={experience} type="exp" />

        {/* Skills */}
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

        {/* Projects */}
        <Section title="PROJECTS" data={projects} type="proj" />

        {/* Publications */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-cyan-400 mb-3 border-b border-green-500 pb-1">PUBLICATIONS</h2>
          {publications.map((pub, index) => (
            <div key={index} className="mb-2">
              <p className="text-white font-semibold">{pub.title}</p>
              <p className="text-sm text-gray-400">{pub.description}</p>
            </div>
          ))}
        </div>

        {/* Patents */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-cyan-400 mb-3 border-b border-green-500 pb-1">PATENTS</h2>
          {patents.map((pat, index) => (
            <div key={index}>
              <p className="text-white font-semibold">{pat.title}</p>
              <p className="text-sm text-gray-400">{pat.description}</p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-lg font-bold text-cyan-400 mb-3 border-b border-green-500 pb-1">ACHIEVEMENTS</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-400">
            {achievements.map((ach, index) => (
              <li key={index}>{ach}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

// Helper subcomponent
function Section({ title, data, type }) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold text-cyan-400 mb-3 border-b border-green-500 pb-1">{title}</h2>
      {data.map((item, index) => (
        <div key={index} className="mb-4">
          {type === "edu" && (
            <>
              <div className="flex justify-between">
                <h3 className="font-bold text-white">{item.degree}</h3>
                <span className="text-gray-400">{item.period}</span>
              </div>
              <p className="text-green-500">{item.institution}</p>
              <p className="text-sm text-gray-400">{item.description}</p>
            </>
          )}
          {type === "exp" && (
            <>
              <div className="flex justify-between">
                <h3 className="font-bold text-white">
                  {item.title} - {item.company}
                </h3>
                <span className="text-gray-400">{item.period}</span>
              </div>
              <p className="text-sm text-gray-400">{item.description}</p>
            </>
          )}
          {type === "proj" && (
            <>
              <h3 className="font-bold text-white">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
            </>
          )}
        </div>
      ))}
      {type === "proj" && (
        <p className="text-sm text-green-500 flex items-center mt-2">
          <ExternalLink className="h-3 w-3 mr-1" />
          <a href="#projects" className="hover:underline">
            View all projects
          </a>
        </p>
      )}
    </div>
  )
}
