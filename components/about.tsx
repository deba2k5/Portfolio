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
            <p className="text-center">Full-stack Developer</p>
          </div>
          <div className="border border-blue-500 rounded-md p-3 bg-black/50 hover:bg-blue-500/10 transition-colors">
            <p className="text-center">GenAI and ML Explorer</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4 text-cyan-400">Timeline</h3>
        <div className="border-l-2 border-green-500 pl-4 space-y-6">
          <div className="relative">
            <div className="absolute -left-6 w-4 h-4 rounded-full bg-green-500"></div>
            <h4 className="text-lg font-medium text-white">Tech Intella JU 2024</h4>
            <p className="text-gray-400">2nd Runner-Up at Jadavpur University</p>
          </div>

          <div className="relative">
            <div className="absolute -left-6 w-4 h-4 rounded-full bg-cyan-500"></div>
            <h4 className="text-lg font-medium text-white">ICOE HACKATHON</h4>
            <p className="text-gray-400">Rank-Top 50</p>
          </div>

          <div className="relative">
            <div className="absolute -left-6 w-4 h-4 rounded-full bg-cyan-500"></div>
            <h4 className="text-lg font-medium text-white">Sustain-A-Thon Indian Oil</h4>
            <p className="text-gray-400">Rank-Top 120</p>
          </div>

          <div className="relative">
            <div className="absolute -left-6 w-4 h-4 rounded-full bg-cyan-500"></div>
            <h4 className="text-lg font-medium text-white">AICTE IDE Bootcamp Phase 1 Winner</h4>
            <p className="text-gray-400">IIM Sambalpur - Startup pitch competition winner</p>
          </div>

          <div className="relative">
            <div className="absolute -left-6 w-4 h-4 rounded-full bg-purple-500"></div>
            <h4 className="text-lg font-medium text-white">AICTE Inventor Challenge 2024</h4>
            <p className="text-gray-400">Top 20 Finalist</p>
          </div>

          <div className="relative">
            <div className="absolute -left-6 w-4 h-4 rounded-full bg-cyan-500"></div>
            <h4 className="text-lg font-medium text-white">DevFest AI 2024</h4>
            <p className="text-gray-400">Rank-34</p>
          </div>

          <div className="relative">
            <div className="absolute -left-6 w-4 h-4 rounded-full bg-yellow-500"></div>
            <h4 className="text-lg font-medium text-white">Smart India Hackathon 2024</h4>
            <p className="text-gray-400">PSID 1528 Finalist AIR - Top 5</p>
          </div>

          <div className="relative">
            <div className="absolute -left-6 w-4 h-4 rounded-full bg-red-500"></div>
            <h4 className="text-lg font-medium text-white">AICTE Yukti Udaymahotsav 2025</h4>
            <p className="text-gray-400">Eastern Zone Top 30 Startups</p>
          </div>

          <div className="relative">
            <div className="absolute -left-6 w-4 h-4 rounded-full bg-blue-500"></div>
            <h4 className="text-lg font-medium text-white">AICTE IDE Bootcamp Phase 2 Winner</h4>
            <p className="text-gray-400">Winner at Amity University Ranchi</p>
          </div>

          <div className="relative">
            <div className="absolute -left-6 w-4 h-4 rounded-full bg-cyan-500"></div>
            <h4 className="text-lg font-medium text-white">Kshitij B-Plan IIT KGP</h4>
            <p className="text-gray-400">Rank-Top 10</p>
          </div>

          <div className="relative">
            <div className="absolute -left-6 w-4 h-4 rounded-full bg-pink-500"></div>
            <h4 className="text-lg font-medium text-white">Eureka Innovacia IEM 2025</h4>
            <p className="text-gray-400">Runners Up</p>
          </div>

          <div className="relative">
            <div className="absolute -left-6 w-4 h-4 rounded-full bg-cyan-500"></div>
            <h4 className="text-lg font-medium text-white">ICYIM 2025</h4>
            <p className="text-gray-400">Runners Up</p>
          </div>

          <div className="relative">
            <div className="absolute -left-6 w-4 h-4 rounded-full bg-cyan-500"></div>
            <h4 className="text-lg font-medium text-white">Hexafalls 2025</h4>
            <p className="text-gray-400">PrepVerse Track Winner</p>
          </div>

          <div className="relative">
            <div className="absolute -left-6 w-4 h-4 rounded-full bg-cyan-500"></div>
            <h4 className="text-lg font-medium text-white">Infosys Global Hackathon 2025</h4>
            <p className="text-gray-400">State Winner</p>
          </div>

          <div className="relative">
            <div className="absolute -left-6 w-4 h-4 rounded-full bg-cyan-500"></div>
            <h4 className="text-lg font-medium text-white">Infosys Global Hackathon 2025</h4>
            <p className="text-gray-400">AIR-8</p>
          </div>

          <div className="relative">
            <div className="absolute -left-6 w-4 h-4 rounded-full bg-cyan-500"></div>
            <h4 className="text-lg font-medium text-white">IEEE YESIST12 2025, Malaysia</h4>
            <p className="text-gray-400">Recognised Top 3 Globally</p>
          </div>

          <div className="relative">
            <div className="absolute -left-6 w-4 h-4 rounded-full bg-cyan-500"></div>
            <h4 className="text-lg font-medium text-white">Tata Social Enterprise Challenge 2025</h4>
            <p className="text-gray-400">Winner at TSEC 2025</p>
          </div>

          <div className="relative">
            <div className="absolute -left-6 w-4 h-4 rounded-full bg-cyan-500"></div>
            <h4 className="text-lg font-medium text-white">AISC 2025</h4>
            <p className="text-gray-400">Paper accepted and presented</p>
          </div>

          <div className="relative">
            <div className="absolute -left-6 w-4 h-4 rounded-full bg-cyan-500"></div>
            <h4 className="text-lg font-medium text-white">Taylor and Francis 2025</h4>
            <p className="text-gray-400">Book Chapter Accepted</p>
          </div>

          <div className="relative">
            <div className="absolute -left-6 w-4 h-4 rounded-full bg-cyan-500"></div>
            <h4 className="text-lg font-medium text-white">Nova Publications Springer</h4>
            <p className="text-gray-400">Paper Accepted for presentation</p>
          </div>
        </div>
      </div>
    </div>
  )
}
