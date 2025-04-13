"use client"

import { useState, useEffect } from "react"

interface Point {
  x: number
  y: number
  alpha: number
}

export function CursorTrail() {
  const [points, setPoints] = useState<Point[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const trailLength = 10

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const updateTrail = () => {
      setPoints((prevPoints) => {
        const newPoints = [
          { x: mousePosition.x, y: mousePosition.y, alpha: 1 },
          ...prevPoints.slice(0, trailLength - 1).map((point) => ({
            ...point,
            alpha: point.alpha * 0.8,
          })),
        ]
        return newPoints
      })
    }

    const interval = setInterval(updateTrail, 20)
    return () => clearInterval(interval)
  }, [mousePosition])

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      {points.map((point, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: point.alpha,
            transform: `scale(${1 - index * 0.08})`,
          }}
        />
      ))}
    </div>
  )
}
