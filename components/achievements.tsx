export function Achievements() {
  const achievements = [
    {
      title: "2X AICTE IDE Bootcamp Winner",
      description: "IIM Sambalpur (2024) & Amity University Ranchi (2025)",
      icon: "🥇",
      color: "border-yellow-500",
    },
    {
      title: "Arduino Hackathon 2024",
      description: "Winner at IEM - Team Lead",
      icon: "🥈",
      color: "border-gray-400",
    },
    {
      title: "2nd Runner-Up – Tech Intella JU 2024",
      description: "Recognized for technical innovation - Team Lead",
      icon: "🥉",
      color: "border-amber-700",
    },
    {
      title: "Smart India Hackathon 2024 Finalist",
      description: "PSID 1528 - Team Lead",
      icon: "🏅",
      color: "border-cyan-500",
    },
    {
      title: "Top 10 – TiE Pitch Competition",
      description: "Intracollege - Team Lead",
      icon: "✅",
      color: "border-green-500",
    },
    {
      title: "Yukti Udaymahotsav 2025",
      description: "Eastern Zone Top 30 - Team Lead",
      icon: "✅",
      color: "border-green-500",
    },
    {
      title: "AICTE Inventor Challenge 2024",
      description: "Finalist Top 20 - Team Lead",
      icon: "🏆",
      color: "border-yellow-500",
    },
    {
      title: "DDC 2025",
      description: "Core Team Member AIR 29",
      icon: "🌍",
      color: "border-blue-500",
    },
    {
      title: "Aegis Graham Bell 2025 Nominee",
      description: "Recognized for innovation",
      icon: "🧠",
      color: "border-purple-500",
    },
    {
      title: "ICOE Hackathon",
      description: "Rank 53",
      icon: "💻",
      color: "border-orange-500",
    },
    {
      title: "Kshitij 2025 Bplan",
      description: "Finalist Top 10",
      icon: "🚀",
      color: "border-pink-500",
    },
    {
      title: "Eureka Innovacia IEM 2025",
      description: "Runners Up",
      icon: "🥈",
      color: "border-indigo-500",
    },
  ]

  return (
    <div className="py-8" id="achievements">
      <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
        Achievements
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className={`p-4 border ${achievement.color} rounded-md bg-black/50 hover:bg-black/80 transition-colors group`}
          >
            <div className="flex items-start">
              <div className="text-3xl mr-4 group-hover:animate-bounce">{achievement.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 group-hover:text-green-400 transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-400">{achievement.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 border border-green-500 rounded-md bg-black/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 to-cyan-900/10"></div>
        <div className="relative z-10">
          <h3 className="text-xl font-semibold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
            Achievement Timeline
          </h3>

          <div className="relative border-l-2 border-green-500 pl-6 ml-4 space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="relative">
                <div
                  className={`absolute -left-8 w-4 h-4 rounded-full ${achievement.color.replace("border", "bg")}`}
                ></div>
                <div className="absolute -left-7 w-2 h-2 rounded-full bg-black animate-ping"></div>
                <h4 className="text-lg font-medium text-cyan-400">{achievement.title}</h4>
                <p className="text-sm text-gray-400">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
