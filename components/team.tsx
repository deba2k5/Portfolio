export function Team() {
  const teams = [
    {
      name: "EFFICYCLE 2025 (SAE India)",
      role: "Core Team Member",
      description: "Working on sustainable electric vehicle design and implementation",
      color: "border-green-500",
    },
    {
      name: "Drone Development Challenge 2025 (SAE India)",
      role: "Core Team Member",
      description: "Developing autonomous drone systems for various applications",
      color: "border-cyan-500",
    },
    {
      name: "SteadyStride",
      role: "Founder",
      description: "Leading a team developing wearable health monitoring solutions",
      color: "border-purple-500",
    },
    {
      name: "ASME IEM STUDENT CHAPTER",
      role: "FRONTEND LEAD",
      description: "Leading frontend development for the ASME IEM website",
      color: "border-yellow-500",
    },
    {
      name: "Arduino Hackathon 2024",
      role: "Team Lead",
      description: "Led a team of 4 developers to create an IoT-based solution",
      color: "border-pink-500",
    },
    {
      name: "IDE Bootcamp",
      role: "Team Lead",
      description: "Led winning teams at IIM Sambalpur and Amity University Ranchi",
      color: "border-blue-500",
    },
    {
      name: "Smart India Hackathon 2024",
      role: "Team Lead",
      description: "Led team to finals with PSID 1528 project",
      color: "border-red-500",
    },
    {
      name: "GDG Kolkata",
      role: "Member",
      description: "Active participant in Google Developer Group events and workshops",
      color: "border-indigo-500",
    },
  ]

  const collaborationNetworks = [
    "EFFICYCLE",
    "Drone Development Challenge",
    "SAE",
    "GDG",
    "ASME",
    "Tech",
    "IoT",
    "ML",
    "Website Development",
    "Fullstack",
    "Dronetech",
  ]

  return (
    <div className="py-8" id="team">
      <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
        Team & Collaborations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teams.map((team, index) => (
          <div
            key={index}
            className={`p-4 border ${team.color} rounded-md bg-black/50 hover:bg-black/80 transition-colors`}
          >
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">{team.name}</h3>
            <div className="mb-2 inline-block px-3 py-1 rounded-full bg-black border border-green-500 text-green-400 text-sm">
              {team.role}
            </div>
            <p className="text-sm text-gray-400">{team.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4 text-cyan-400">Collaboration Network</h3>

        <div className="relative h-80 border border-green-500 rounded-md bg-black/50 p-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center text-center z-10">
              <span className="text-sm font-mono">Debangshu Chatterjee</span>
            </div>

            {collaborationNetworks.map((network, index) => {
              const angle = index * (360 / collaborationNetworks.length) * (Math.PI / 180)
              const radius = 120
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius

              return (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    transition: "all 0.5s ease",
                  }}
                >
                  <div
                    className={`w-16 h-16 rounded-full border ${index % 5 === 0 ? "border-green-500" : index % 5 === 1 ? "border-cyan-500" : index % 5 === 2 ? "border-purple-500" : index % 5 === 3 ? "border-yellow-500" : "border-pink-500"} bg-black/80 flex items-center justify-center text-center`}
                  >
                    <span className="text-xs font-mono">{network}</span>
                  </div>
                  <div
                    className="absolute top-1/2 left-1/2 w-[120px] h-[1px] bg-green-500/30"
                    style={{
                      transform: `rotate(${angle + Math.PI}rad)`,
                      transformOrigin: "left center",
                    }}
                  ></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
