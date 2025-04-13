export function Experience() {
  const experiences = [
    {
      title: "Founder",
      company: "SteadyStride",
      period: "2024 - Present",
      description:
        "Leading a HealthTech startup focused on wearable health monitoring solutions for patients with movement disorders.",
      achievements: [
        "Developed patented anti-tremor wearable technology",
        "Built a team of 5 engineers and designers",
        "Secured initial funding through pitch competitions",
      ],
      color: "border-green-500",
    },
    {
      title: "Frontend Lead",
      company: "ASME IEM Student Chapter",
      period: "2024 - Present",
      description:
        "Leading frontend development for the ASME IEM website, implementing modern design principles and responsive layouts.",
      achievements: [
        "Redesigned the chapter website increasing user engagement by 40%",
        "Implemented responsive design for all devices",
        "Integrated event management system",
      ],
      color: "border-cyan-500",
    },
    {
      title: "IoT Workshop Instructor",
      company: "Smart Makers Festival 2024 at IEM",
      period: "2024",
      description:
        "Conducted workshops on IoT development, Arduino programming, and sensor integration for students and enthusiasts.",
      achievements: [
        "Trained over 100 students in IoT fundamentals",
        "Developed comprehensive workshop materials",
        "Received 4.8/5 average feedback rating",
      ],
      color: "border-purple-500",
    },
    {
      title: "Smart India Hackathon Finalist",
      company: "SIH 2024",
      period: "2024",
      description: "Led a team of 6 developers to the finals of Smart India Hackathon 2024 with PSID 1528 project.",
      achievements: [
        "Developed innovative solution for the given problem statement",
        "Coordinated team efforts across different domains",
        "Presented solution to industry experts and government officials",
      ],
      color: "border-yellow-500",
    },
    {
      title: "2X AICTE IDE BOOTCAMP Winner",
      company: "IIM Sambalpur & Amity University Ranchi",
      period: "2024 - 2025",
      description:
        "Led teams to victory in two consecutive AICTE IDE Bootcamp competitions with innovative startup ideas.",
      achievements: [
        "Developed business models and pitch decks",
        "Coordinated prototype development",
        "Successfully pitched to investors and industry experts",
      ],
      color: "border-red-500",
    },
  ]

  const leadershipSkills = [
    { name: "Team Management", level: 90 },
    { name: "Public Speaking", level: 90 },
    { name: "Project Planning", level: 85 },
    { name: "Conflict Resolution", level: 80 },
    { name: "Strategic Thinking", level: 85 },
    { name: "Mentoring", level: 85 },
    { name: "Decision Making", level: 90 },
  ]

  return (
    <div className="py-8" id="experience">
      <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
        Experience & Leadership
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`p-4 border ${exp.color} rounded-md bg-black/50 hover:bg-black/80 transition-colors`}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400">
                  {exp.title} at {exp.company}
                </h3>
                <p className="text-sm text-gray-400">{exp.period}</p>
              </div>
              <div className="mt-2 md:mt-0 px-3 py-1 rounded-full bg-black border border-green-500 text-green-400 text-sm inline-block">
                {exp.company}
              </div>
            </div>

            <p className="text-sm text-gray-300 mb-4">{exp.description}</p>

            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-2">Key Achievements:</h4>
              <ul className="list-disc pl-5 space-y-1">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-sm text-gray-300">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 border border-green-500 rounded-md bg-black/50">
        <h3 className="text-xl font-semibold mb-4 text-cyan-400">Leadership Skills</h3>

        <div className="space-y-4">
          {leadershipSkills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="font-mono text-sm">{skill.name}</span>
                <span className="font-mono text-xs opacity-70">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2.5 mb-4">
                <div
                  className="h-2.5 rounded-full bg-gradient-to-r from-green-500 to-cyan-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
