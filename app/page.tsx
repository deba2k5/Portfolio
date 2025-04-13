"use client"

import { useState } from "react"
import { Terminal } from "@/components/terminal"
import { Debugger } from "@/components/debugger"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Achievements } from "@/components/achievements"
import { Team } from "@/components/team"
import { Research } from "@/components/research"
import { Experience } from "@/components/experience"
import { Resume } from "@/components/resume"
import { Contact } from "@/components/contact"
import { CursorTrail } from "@/components/cursor-trail"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "Initializing system...",
    "Loading portfolio data...",
    "System ready. Type 'help' for available commands.",
  ])

  const handleCommand = (command: string) => {
    setTerminalHistory((prev) => [...prev, `> ${command}`])

    const cmd = command.toLowerCase().trim()

    if (cmd === "help") {
      setTerminalHistory((prev) => [
        ...prev,
        "Available commands:",
        "- about: View about section",
        "- skills: View skills & tech stack",
        "- projects: View projects",
        "- achievements: View achievements",
        "- team: View team & collaborations",
        "- research: View research & learning",
        "- experience: View experience & leadership",
        "- resume: View resume",
        "- contact: View contact information",
        "- clear: Clear terminal",
        "- home: Return to home page",
      ])
    } else if (cmd === "about") {
      setActiveSection("about")
      setTerminalHistory((prev) => [...prev, "Loading about section..."])
    } else if (cmd === "skills") {
      setActiveSection("skills")
      setTerminalHistory((prev) => [...prev, "Loading skills section..."])
    } else if (cmd === "projects") {
      setActiveSection("projects")
      setTerminalHistory((prev) => [...prev, "Loading projects section..."])
    } else if (cmd === "achievements") {
      setActiveSection("achievements")
      setTerminalHistory((prev) => [...prev, "Loading achievements section..."])
    } else if (cmd === "team") {
      setActiveSection("team")
      setTerminalHistory((prev) => [...prev, "Loading team section..."])
    } else if (cmd === "research") {
      setActiveSection("research")
      setTerminalHistory((prev) => [...prev, "Loading research section..."])
    } else if (cmd === "experience") {
      setActiveSection("experience")
      setTerminalHistory((prev) => [...prev, "Loading experience section..."])
    } else if (cmd === "resume") {
      setActiveSection("resume")
      setTerminalHistory((prev) => [...prev, "Loading resume section..."])
    } else if (cmd === "contact") {
      setActiveSection("contact")
      setTerminalHistory((prev) => [...prev, "Loading contact section..."])
    } else if (cmd === "clear") {
      setTerminalHistory([])
    } else if (cmd === "home") {
      setActiveSection("hero")
      setTerminalHistory((prev) => [...prev, "Returning to home page..."])
    } else {
      setTerminalHistory((prev) => [...prev, `Command not found: ${command}`])
    }
  }

  const renderActiveSection = () => {
    switch (activeSection) {
      case "hero":
        return <Hero />
      case "about":
        return <About />
      case "skills":
        return <Skills />
      case "projects":
        return <Projects />
      case "achievements":
        return <Achievements />
      case "team":
        return <Team />
      case "research":
        return <Research />
      case "experience":
        return <Experience />
      case "resume":
        return <Resume />
      case "contact":
        return <Contact />
      default:
        return <Hero />
    }
  }

  return (
    <main className="min-h-screen bg-black text-green-500 overflow-hidden relative" id="top">
      <CursorTrail />

      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="border border-green-500 rounded-md p-4 bg-black/90 h-[calc(100vh-4rem)] overflow-auto">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-mono text-green-400">
                  <span className="text-pink-500">~/</span>
                  <span className="text-cyan-400">portfolio</span>
                  <span className="text-yellow-400">/{activeSection}</span>
                </h2>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="animate-pulse-slow">{renderActiveSection()}</div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="grid grid-rows-2 gap-6 h-[calc(100vh-4rem)]">
              <div className="border border-green-500 rounded-md p-4 bg-black/90 overflow-auto">
                <h2 className="text-xl font-mono text-green-400 mb-4 flex items-center justify-between">
                  <span>Terminal</span>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </h2>
                <Terminal history={terminalHistory} onCommand={handleCommand} />
              </div>

              <div className="border border-green-500 rounded-md p-4 bg-black/90 overflow-auto">
                <h2 className="text-xl font-mono text-green-400 mb-4 flex items-center justify-between">
                  <span>Debugger</span>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </h2>
                <Debugger />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
