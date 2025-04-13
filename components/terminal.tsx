"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

interface TerminalProps {
  history: string[]
  onCommand: (command: string) => void
}

export function Terminal({ history, onCommand }: TerminalProps) {
  const [input, setInput] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      onCommand(input)
      setInput("")
    }
  }

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div ref={terminalRef} className="font-mono text-sm h-full overflow-auto" onClick={handleFocus}>
      {history.map((line, index) => (
        <div key={index} className="mb-1">
          {line.startsWith(">") ? (
            <div>
              <span className="text-cyan-400">user@portfolio</span>
              <span className="text-white">:</span>
              <span className="text-pink-500">~$</span>
              <span className="ml-2">{line.substring(2)}</span>
            </div>
          ) : (
            <div className={line.includes("Loading") ? "text-yellow-400" : ""}>{line}</div>
          )}
        </div>
      ))}

      <form onSubmit={handleSubmit} className="flex items-center">
        <span className="text-cyan-400">user@portfolio</span>
        <span className="text-white">:</span>
        <span className="text-pink-500">~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none ml-2 text-green-400"
          autoFocus
        />
        <span className={`h-4 w-2 bg-green-400 ml-0.5 ${cursorVisible ? "opacity-100" : "opacity-0"}`}></span>
      </form>
    </div>
  )
}
