"use client"

import { useState, useEffect } from "react"

export function Debugger() {
  const [variables, setVariables] = useState([
    { name: "skills", value: "['Python', 'C++', 'React', 'IoT']", type: "Array" },
    { name: "projects", value: "9", type: "Number" },
    { name: "achievements", value: "10", type: "Number" },
    { name: "isLoading", value: "false", type: "Boolean" },
    { name: "currentSection", value: "'hero'", type: "String" },
  ])

  const [breakpoints, setBreakpoints] = useState([
    { id: 1, file: "portfolio.js", line: 42, enabled: true },
    { id: 2, file: "projects.js", line: 17, enabled: false },
    { id: 3, file: "contact.js", line: 8, enabled: true },
  ])

  const [callStack, setCallStack] = useState([
    "renderPortfolio()",
    "loadProjects()",
    "fetchData()",
    "initializeSystem()",
  ])

  const [consoleOutput, setConsoleOutput] = useState<string[]>([
    "System initialized",
    "Loading portfolio data...",
    "Warning: Some projects may still be in development",
    "Portfolio rendered successfully",
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate changing debug values
      setVariables((prev) => {
        const newVars = [...prev]
        const randomIndex = Math.floor(Math.random() * newVars.length)
        if (newVars[randomIndex].name === "isLoading") {
          newVars[randomIndex] = { ...newVars[randomIndex], value: Math.random() > 0.5 ? "true" : "false" }
        }
        return newVars
      })

      // Add random console output occasionally
      if (Math.random() > 0.8) {
        const messages = [
          "Checking for updates...",
          "Memory usage: 42MB",
          "Network request completed",
          "Cache updated",
          "Event listener registered",
        ]
        const randomMessage = messages[Math.floor(Math.random() * messages.length)]
        setConsoleOutput((prev) => [...prev.slice(-4), randomMessage])
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="font-mono text-sm h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-cyan-400 mb-2">Variables</h3>
        <div className="pl-2 border-l border-gray-700">
          {variables.map((variable, index) => (
            <div key={index} className="mb-1 flex">
              <span className="text-yellow-400 mr-2">{variable.name}:</span>
              <span className="text-green-400 mr-2">{variable.value}</span>
              <span className="text-gray-500">({variable.type})</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-cyan-400 mb-2">Breakpoints</h3>
        <div className="pl-2 border-l border-gray-700">
          {breakpoints.map((bp) => (
            <div key={bp.id} className="mb-1 flex items-center">
              <div className={`w-2 h-2 rounded-full mr-2 ${bp.enabled ? "bg-red-500" : "bg-gray-500"}`}></div>
              <span className="text-pink-400 mr-2">{bp.file}:</span>
              <span className="text-white">line {bp.line}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-cyan-400 mb-2">Call Stack</h3>
        <div className="pl-2 border-l border-gray-700">
          {callStack.map((call, index) => (
            <div key={index} className="mb-1">
              <span className="text-magenta-400">{call}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-cyan-400 mb-2">Console</h3>
        <div className="pl-2 border-l border-gray-700 text-xs">
          {consoleOutput.map((line, index) => (
            <div key={index} className="mb-1">
              {line.includes("Warning") ? <span className="text-yellow-400">{line}</span> : <span>{line}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
