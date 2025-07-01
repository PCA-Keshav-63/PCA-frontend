import { User, Store } from "lucide-react"

function RoleFeatures() {
  const roles = [
    {
      icon: User,
      title: "For Customers",
      subtitle: "Discover & Book",
      description: "Find the perfect local services and book appointments with ease",
      features: [
        "Search & discover local businesses",
        "Book appointments instantly",
        "Read and write authentic reviews",
        "Track your booking history",
        "Get personalized recommendations",
        "Secure payment processing",
      ],
      gradient: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
    },
    {
      icon: Store,
      title: "For Businesses",
      subtitle: "Grow & Manage",
      description: "Expand your reach and manage your business efficiently",
      features: [
        "Create stunning business profiles",
        "Manage bookings and appointments",
        "Respond to customer reviews",
        "Access detailed analytics",
        "Promote your services",
        "Build customer relationships",
      ],
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built for
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Everyone
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're looking for services or providing them, we've got the perfect tools for your needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {roles.map((role, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${role.bgGradient} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/50`}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <div className={`w-full h-full bg-gradient-to-br ${role.gradient} rounded-full blur-2xl`}></div>
              </div>

              <div className="relative">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${role.gradient} rounded-2xl mb-6 shadow-lg`}
                >
                  <role.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{role.title}</h3>
                  <p
                    className={`text-lg font-semibold bg-gradient-to-r ${role.gradient} bg-clip-text text-transparent mb-3`}
                  >
                    {role.subtitle}
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">{role.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {role.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${role.gradient} rounded-full mt-2 flex-shrink-0`}
                      ></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-8">
                  <button
                    className={`w-full bg-gradient-to-r ${role.gradient} text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
                  >
                    {index === 0 ? "Start Exploring" : "List Your Business"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RoleFeatures
