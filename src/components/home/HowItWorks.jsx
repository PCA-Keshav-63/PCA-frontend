import { Search, Star, Calendar, Award } from "lucide-react"

function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Search & Discover",
      description: "Find the perfect local businesses and services near you",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: Star,
      title: "Compare & Choose",
      description: "Read authentic reviews and compare your options",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Calendar,
      title: "Book Instantly",
      description: "Schedule appointments with just a few clicks",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Share Experience",
      description: "Rate and review to help others make better choices",
      gradient: "from-pink-500 to-red-500",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Get started in just four simple steps</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Step Number */}
              <div className="relative mb-6">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}
                >
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
                  <span className="text-sm font-bold text-gray-600">{index + 1}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-gray-200 to-gray-300 transform translate-x-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
