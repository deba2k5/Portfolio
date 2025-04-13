"use client"

import { useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isAnimating, setIsAnimating] = useState(false)

  const toggleTheme = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark")
      setIsAnimating(false)
    }, 300)
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className={`relative overflow-hidden border-green-500 bg-black text-green-500 hover:bg-black/80 hover:text-cyan-400 ${
        isAnimating ? "animate-pulse" : ""
      }`}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
