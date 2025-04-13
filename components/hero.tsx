"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { FileDown, Code, MessageSquare } from "lucide-react"

export function Hero() {
  const [text, setText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Turning real-world problems into smart solutions through code, circuits, and creativity."
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index])
        setIndex(index + 1)
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [index])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-500 to-purple-600 animate-pulse-slow">
          Debangshu Chatterjee
        </h1>

        <h2 className="text-xl md:text-2xl font-mono mb-6 text-cyan-400">
          Developer | Innovator | IoT Enthusiast | ML Explorer
        </h2>

        <div className="h-16 mb-8">
          <p className="text-lg md:text-xl font-mono">
            {text}
            <span
              className={`inline-block w-2 h-5 bg-green-500 ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}
            ></span>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all duration-300 group"
            onClick={() => (window.location.href = "#resume")}
          >
            <FileDown className="mr-2 h-4 w-4 group-hover:animate-bounce" />
            View Resume
          </Button>

          <Button
            className="bg-transparent border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black transition-all duration-300 group"
            onClick={() => (window.location.href = "#projects")}
          >
            <Code className="mr-2 h-4 w-4 group-hover:animate-pulse" />
            Explore Projects
          </Button>

          <Button
            className="bg-transparent border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-black transition-all duration-300 group"
            onClick={() => (window.location.href = "#contact")}
          >
            <MessageSquare className="mr-2 h-4 w-4 group-hover:animate-spin" />
            Let's Connect
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  )
}
