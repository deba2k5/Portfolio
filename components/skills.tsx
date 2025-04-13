"use client"

import { useState } from "react"

interface SkillCategory {
  name: string
  skills: {
    name: string
    level: number
    color: string
  }[]
}

export function Skills() {
  const [categories] = useState<SkillCategory[]>([
    {
      name: "Programming",
      skills: [
        { name: "Python", level: 90, color: "from-blue-500 to-cyan-500" },
        { name: "C++", level: 85, color: "from-blue-600 to-indigo-600" },
        { name: "HTML", level: 95, color: "from-orange-500 to-red-500" },
        { name: "CSS", level: 90, color: "from-blue-400 to-blue-600" },
        { name: "JavaScript", level: 85, color: "from-yellow-400 to-yellow-600" },
        { name: "TypeScript", level: 80, color: "from-blue-500 to-blue-700" },
        { name: "React.js", level: 80, color: "from-cyan-400 to-blue-500" },
      ],
    },
    {
      name: "ML/AI",
      skills: [
        { name: "NumPy", level: 85, color: "from-blue-500 to-indigo-500" },
        { name: "Pandas", level: 80, color: "from-purple-500 to-indigo-500" },
        { name: "Keras", level: 75, color: "from-red-500 to-red-700" },
        { name: "Theano", level: 70, color: "from-yellow-500 to-orange-500" },
        { name: "Hugging Face", level: 65, color: "from-yellow-400 to-yellow-600" },
      ],
    },
    {
      name: "IoT/Hardware",
      skills: [
        { name: "Arduino", level: 95, color: "from-teal-500 to-green-500" },
        { name: "NodeMCU", level: 90, color: "from-blue-500 to-cyan-500" },
        { name: "ATmega328P", level: 85, color: "from-green-500 to-emerald-500" },
        { name: "HC-05", level: 80, color: "from-blue-400 to-blue-600" },
        { name: "Sensors", level: 90, color: "from-purple-500 to-pink-500" },
      ],
    },
    {
      name: "Tools",
      skills: [
        { name: "Firebase", level: 85, color: "from-yellow-500 to-orange-500" },
        { name: "Figma", level: 80, color: "from-purple-500 to-pink-500" },
        { name: "Git", level: 90, color: "from-orange-500 to-red-500" },
        { name: "Framer Motion", level: 75, color: "from-purple-400 to-indigo-500" },
        { name: "Tailwind CSS", level: 85, color: "from-cyan-500 to-blue-500" },
        { name: "Streamlit", level: 80, color: "from-red-500 to-red-700" },
        { name: "Vercel", level: 85, color: "from-black to-gray-800" },
      ],
    },
    {
      name: "Soft Skills",
      skills: [
        { name: "Leadership", level: 90, color: "from-green-500 to-emerald-500" },
        { name: "Pitching", level: 85, color: "from-orange-500 to-red-500" },
        { name: "Teamwork", level: 95, color: "from-blue-500 to-indigo-500" },
        { name: "Problem-solving", level: 90, color: "from-purple-500 to-pink-500" },
      ],
    },
  ])

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
        Skills & Tech Stack
      </h2>

      <div className="space-y-10">
        {categories.map((category, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400 border-b border-green-500 pb-2">{category.name}</h3>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="group">
                  <div className="flex justify-between mb-1">
                    <span className="font-mono text-sm">{skill.name}</span>
                    <span className="font-mono text-xs opacity-70">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5 mb-4 overflow-hidden">
                    <div
                      className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color} group-hover:animate-pulse`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-4 border border-green-500 rounded-md bg-black/50">
        <h3 className="text-xl font-semibold mb-4 text-cyan-400">Tech Stack Visualization</h3>
        <div className="flex flex-wrap gap-2">
          {categories.flatMap((category) =>
            category.skills.map((skill, index) => (
              <div
                key={`${category.name}-${index}`}
                className="px-3 py-1 rounded-full text-sm font-mono border border-green-500 hover:border-cyan-500 hover:bg-black/80 transition-colors cursor-pointer"
                style={{
                  fontSize: `${0.8 + (skill.level / 100) * 0.4}rem`,
                  opacity: 0.7 + (skill.level / 100) * 0.3,
                }}
              >
                {skill.name}
              </div>
            )),
          )}
        </div>
      </div>
    </div>
  )
}
