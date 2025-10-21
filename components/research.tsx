export function Research() {
  const researchAreas = [
    {
      title: "Real-time ML in Biosciences/Biomedical",
      description: "Exploring applications of machine learning for real-time health monitoring and diagnostics",
      icon: "🧬",
      color: "border-purple-500",
    },
    {
      title: "Binary Search & DSA",
      description: "Studying advanced data structures and algorithms for efficient problem-solving",
      icon: "🔍",
      color: "border-cyan-500",
    },
    {
      title: "ML Model Training and Analytics",
      description: "Researching efficient training methods and analytics for machine learning models",
      icon: "📊",
      color: "border-green-500",
    },
    {
      title: "Gen AI Techniques",
      description: "Investigating generative AI models and their applications across various domains",
      icon: "📱",
      color: "border-yellow-500",
    },
    {
      title: "IoT for Healthcare",
      description: "Investigating Internet of Things applications in healthcare monitoring and treatment",
      icon: "🏥",
      color: "border-red-500",
    },
    {
      title: "Embedded Systems Programming",
      description: "Exploring efficient programming techniques for resource-constrained embedded systems",
      icon: "💻",
      color: "border-blue-500",
    },
  ]

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
        Research & Learning
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {researchAreas.map((area, index) => (
          <div
            key={index}
            className={`p-4 border ${area.color} rounded-md bg-black/50 hover:bg-black/80 transition-colors group`}
          >
            <div className="flex items-start">
              <div className="text-3xl mr-4 group-hover:animate-pulse">{area.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 group-hover:text-green-400 transition-colors">
                  {area.title}
                </h3>
                <p className="text-sm text-gray-400">{area.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 border border-green-500 rounded-md bg-black/50">
        <h3 className="text-xl font-semibold mb-4 text-cyan-400">Current Learning Path</h3>

        <div className="space-y-4">
          <div className="relative">
            <div className="flex items-center mb-2">
              <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
              <h4 className="text-lg font-medium text-green-400">Fundamentals</h4>
            </div>
            <div className="ml-6 pl-4 border-l border-green-500">
              <p className="text-sm text-gray-400 mb-2">
                Strengthening core concepts in data structures, algorithms, and system design
              </p>
              <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-green-500 to-green-400"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="flex items-center mb-2">
              <div className="w-4 h-4 rounded-full bg-cyan-500 mr-2"></div>
              <h4 className="text-lg font-medium text-cyan-400">Machine Learning</h4>
            </div>
            <div className="ml-6 pl-4 border-l border-cyan-500">
              <p className="text-sm text-gray-400 mb-2">
                Exploring advanced ML techniques, model optimization, and deployment strategies
              </p>
              <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="flex items-center mb-2">
              <div className="w-4 h-4 rounded-full bg-purple-500 mr-2"></div>
              <h4 className="text-lg font-medium text-purple-400">IoT & Hardware</h4>
            </div>
            <div className="ml-6 pl-4 border-l border-purple-500">
              <p className="text-sm text-gray-400 mb-2">
                Developing expertise in sensor integration, embedded systems, and IoT architecture
              </p>
              <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-400"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="flex items-center mb-2">
              <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
              <h4 className="text-lg font-medium text-yellow-400">Healthcare Applications</h4>
            </div>
            <div className="ml-6 pl-4 border-l border-yellow-500">
              <p className="text-sm text-gray-400 mb-2">
                Applying technical skills to solve healthcare challenges and improve patient outcomes
              </p>
              <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
