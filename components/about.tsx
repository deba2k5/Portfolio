export function About() {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
        About Me
      </h2>

      <div className="mb-8 font-mono">
        <p className="text-lg mb-4 leading-relaxed">
          Tech innovator turning complex problems into elegant solutions through code, hardware, and creative thinking.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-cyan-400">Education</h3>
        <div className="border-l-2 border-green-500 pl-4">
          <div className="mb-4">
            <h4 className="text-lg font-medium text-white">B.Tech Computer Science Engineering</h4>
            <p className="text-gray-400">Institute of Engineering and Management</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-cyan-400">Highlighted Traits</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="border border-green-500 rounded-md p-3 bg-black/50 hover:bg-green-500/10 transition-colors">
            <p className="text-center">Tech Leader</p>
          </div>
          <div className="border border-cyan-500 rounded-md p-3 bg-black/50 hover:bg-cyan-500/10 transition-colors">
            <p className="text-center">Hackathon Participant</p>
          </div>
          <div className="border border-purple-500 rounded-md p-3 bg-black/50 hover:bg-purple-500/10 transition-colors">
            <p className="text-center">Startup Founder</p>
          </div>
          <div className="border border-yellow-500 rounded-md p-3 bg-black/50 hover:bg-yellow-500/10 transition-colors">
            <p className="text-center">Problem Solver</p>
          </div>
          <div className="border border-pink-500 rounded-md p-3 bg-black/50 hover:bg-pink-500/10 transition-colors">
            <p className="text-center">IoT Developer</p>
          </div>
          <div className="border border-blue-500 rounded-md p-3 bg-black/50 hover:bg-blue-500/10 transition-colors">
            <p className="text-center">ML Explorer</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4 text-cyan-400">Timeline</h3>
        <div className="border-l-2 border-green-500 pl-4 space-y-6">
          <div className="relative">
            <div className="absolute -left-6 w-4 h-4 rounded-full bg-green-500"></div>
            <h4 className="text-lg font-medium text-white">Tech Intella JU 2024</h4>
            <p className="text-gray-400">2nd Runner-Up with innovative project</p>
          </div>

          <div className="relative">
            <div className="absolute -left-6 w-4 h-4 rounded-full bg-cyan-500"></div>
            <h4 className="text-lg font-medium text-white">AICTE IDE Bootcamp 2024 Winner</h4>
            <p className="text-gray-400">IIM Sambalpur - Startup pitch competition winner</p>
          </div>

          <div className="relative">
            <div className="absolute -left-6 w-4 h-4 rounded-full bg-purple-500"></div>
            <h4 className="text-lg font-medium text-white">AICTE Inventor Challenge 2024</h4>
            <p className="text-gray-400">Top 20 Finalist</p>
          </div>

          <div className="relative">
            <div className="absolute -left-6 w-4 h-4 rounded-full bg-yellow-500"></div>
            <h4 className="text-lg font-medium text-white">Smart India Hackathon 2024</h4>
            <p className="text-gray-400">PSID 1528 Finalist</p>
          </div>

          <div className="relative">
            <div className="absolute -left-6 w-4 h-4 rounded-full bg-red-500"></div>
            <h4 className="text-lg font-medium text-white">Yukti Udaymahotsav 2025</h4>
            <p className="text-gray-400">Eastern Zone Top 30</p>
          </div>

          <div className="relative">
            <div className="absolute -left-6 w-4 h-4 rounded-full bg-blue-500"></div>
            <h4 className="text-lg font-medium text-white">AICTE IDE Bootcamp 2025 Winner</h4>
            <p className="text-gray-400">Amity University Ranchi</p>
          </div>

          <div className="relative">
            <div className="absolute -left-6 w-4 h-4 rounded-full bg-pink-500"></div>
            <h4 className="text-lg font-medium text-white">Eureka Innovacia IEM 2025</h4>
            <p className="text-gray-400">Runners Up</p>
          </div>
        </div>
      </div>
    </div>
  )
}
