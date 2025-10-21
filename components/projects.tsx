"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Github, ExternalLink, Code, Cpu, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  description: string
  role: string
  tech: string[]
  github?: string
  image: string
  category: "iot" | "ml" | "web" | "hardware"
}

export function Projects() {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "MindPal",
      description:
        "VR Headset with inbuilt massager and auditory and visual therapy to treat anxiety, stress, and depression.",
      role: "Lead Developer & Hardware Designer",
      tech: ["Arduino", "Python", "TensorFlow", "React", "Firebase"],
      github: "https://github.com/predator2k5/mindpal",
      image: "https://www.vrs.org.uk/wp-content/uploads/2015/12/vr-headset.jpg",
      category: "iot",
    },
    {
      id: 2,
      title: "SteadyStride Anti-Tremor Band",
      description:
        "Patented wearable device for tremor reduction in patients with Parkinson's disease and essential tremor, using haptic feedback and machine learning.",
      role: "Inventor & Lead Engineer",
      tech: ["Arduino", "C++", "Sensors", "ML Algorithms", "3D Printing"],
      github: "https://github.com/predator2k5/anti-tremor",
      image: "htt-01765/article_deploy/html/images/sensors-20-01765-g001.png",
      category: "hardware",
    },
    {
      id: 3,
      title: "Criminal Record Management System",
      description:
        "Role-based secure web application for managing criminal records with advanced search, analytics, and reporting features.",
      role: "Full Stack Developer",
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      github: "https://github.com/predator2k5/crms",
      image: "https://cdn.dribbble.com/users/2234430/screenshots/8587843/media/5a7b6b3ad3d7bca66ab13cb9fb5bb6c1.png",
      category: "web",
    },
    {
      id: 4,
      title: "GeoGrow - ML-based Crop Advisory Platform and loan facilitation",
      description:
        "An omnichannel platform providing personalized agricultural advice to farmers using ML and data analytics.",
      tech: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "GenAI"],
      github: "https://github.com/predator2k5/parkinson-prediction",
      image: "Portfolio\public\geogrow.png",
      category: "ml",
    },
    {
      id: 5,
      title: "Loitering Munition Suicidal Drone",
      description: "Autonomous drone using sugar candy rocket technology for surveillance and precision operations.",
      role: "Hardware Designer & IoT Developer",
      tech: ["NodeMCU", "MQTT", "React", "Firebase", "Sensors"],
      github: "https://github.com/predator2k5/sugar-candy",
      image:
        "https://www.armyrecognition.com/images/stories/news/2021/august/New_picture_of_Chinese-made_loitering_munition_suicide_drone_925_001.jpg",
      category: "iot",
    },
    {
      id: 6,
      title: "Resume Parser with ATS Score Checker",
      description: "Web application that parses resumes, checks ATS compatibility, and matches with job descriptions.",
      role: "Frontend Developer & ML Engineer",
      tech: ["React", "Next.js", "Tailwind CSS", "NLP", "Firebase"],
      github: "https://github.com/predator2k5/resume-parser",
      image: "https://cdn.dribbble.com/users/2579950/screenshots/15392073/media/2bbcbab8b827f9c8f5c3c837c3e1f3e5.png",
      category: "web",
    },
    {
      id: 7,
      title: "Smart Waste Bot",
      description:
        "Smart Cities project featuring IoT-enabled waste collection robot that optimizes collection routes and monitors fill levels.",
      role: "IoT Developer & System Architect",
      tech: ["Arduino", "LoRaWAN", "React", "Node.js", "MongoDB"],
      github: "https://github.com/predator2k5/smart-bot",
      image: "https://www.therobotreport.com/wp-content/uploads/2019/06/volvo-renova-robot.jpg",
      category: "iot",
    },
    {
      id: 8,
      title: "Fixed Wing UAV for Disaster Management",
      description:
        "Delivery UAV designed for disaster management scenarios, capable of delivering essential supplies to remote areas.",
      role: "UAV Designer & Developer",
      tech: ["Arduino", "Gyroscope", "GPS", "Telemetry", "3D Printing"],
      github: "https://github.com/predator2k5/fixed-wing-uav",
      image:
        "https://www.unmannedsystemstechnology.com/wp-content/uploads/2018/10/Elbit-Systems-Hermes-45-Small-Tactical-UAS.jpg",
      category: "hardware",
    },
    {
      id: 9,
      title: "Quadcopter for Surveillance",
      description: "Autonomous quadcopter with real-time video streaming capabilities for surveillance applications.",
      role: "Drone Engineer & Software Developer",
      tech: ["Arduino", "Raspberry Pi", "Computer Vision", "React", "WebRTC"],
      github: "https://github.com/predator2k5/surveillance-drone",
      image: "https://www.securitymagazine.com/ext/resources/images/2020/0720-Drones-GettyImages-1127238296.jpg",
      category: "hardware",
    },
    {
      id: 10,
      title: "IEMSCHOLAR - Semantic Search Engine",
      description:
        "Semantic search engine for academic papers and study materials, designed specifically for students.",
      role: "Full Stack Developer & NLP Engineer",
      tech: ["Python", "NLP", "React", "ElasticSearch", "Node.js"],
      github: "https://github.com/predator2k5/iemscholar",
      image: "https://cdn.dribbble.com/users/1615584/screenshots/15571949/media/7e95e5797bd23f4396b50b7a0148b31c.jpg",
      category: "web",
    },
  ])

  const [filter, setFilter] = useState<string>("all")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div className="py-8" id="projects">
      <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
        Projects
      </h2>

      <div className="flex flex-wrap gap-2 mb-8">
        <Button
          variant="outline"
          className={`border-green-500 ${filter === "all" ? "bg-green-500/20" : "bg-transparent"}`}
          onClick={() => setFilter("all")}
        >
          All Projects
        </Button>
        <Button
          variant="outline"
          className={`border-cyan-500 ${filter === "iot" ? "bg-cyan-500/20" : "bg-transparent"}`}
          onClick={() => setFilter("iot")}
        >
          <Cpu className="mr-2 h-4 w-4" />
          IoT
        </Button>
        <Button
          variant="outline"
          className={`border-purple-500 ${filter === "ml" ? "bg-purple-500/20" : "bg-transparent"}`}
          onClick={() => setFilter("ml")}
        >
          <Brain className="mr-2 h-4 w-4" />
          ML/AI
        </Button>
        <Button
          variant="outline"
          className={`border-yellow-500 ${filter === "web" ? "bg-yellow-500/20" : "bg-transparent"}`}
          onClick={() => setFilter("web")}
        >
          <Code className="mr-2 h-4 w-4" />
          Web
        </Button>
        <Button
          variant="outline"
          className={`border-pink-500 ${filter === "hardware" ? "bg-pink-500/20" : "bg-transparent"}`}
          onClick={() => setFilter("hardware")}
        >
          <Cpu className="mr-2 h-4 w-4" />
          Hardware
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className="bg-black/50 border border-green-500 overflow-hidden hover:border-cyan-500 transition-all duration-300 group"
          >
            <div className="relative">
              <div className="h-48 bg-gradient-to-r from-green-900/30 to-cyan-900/30 flex items-center justify-center overflow-hidden">
                {!isLoaded ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
                  </div>
                ) : (
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=300&width=500"
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              </div>

              <div className="absolute top-2 right-2 flex gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black/70 p-2 rounded-full text-green-500 hover:text-white hover:bg-green-500 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
                <a
                  href="#"
                  className="bg-black/70 p-2 rounded-full text-cyan-500 hover:text-white hover:bg-cyan-500 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 text-cyan-400 group-hover:text-green-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-sm mb-4 text-gray-300">{project.description}</p>

              <div className="mb-4">
                <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-1">Role</h4>
                <p className="text-sm font-medium text-green-500">{project.role}</p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-black border border-green-500 text-green-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
