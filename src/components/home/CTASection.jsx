import { Link } from "react-router-dom"
import { ArrowRight, Sparkles } from "lucide-react"

function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8">
          <Sparkles className="w-5 h-5 text-yellow-300" />
          <span className="text-white font-medium">Join Thousands of Happy Users</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Ready to Get
          <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
            Started?
          </span>
        </h2>

        <p className="text-xl text-indigo-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join our community of customers and businesses. Start discovering amazing local services today.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
          <Link
            to="/login"
            className="group bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <span>Find Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/login"
            className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <span>List Your Business</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            "Trusted by 50K+ Businesses",
            "200K+ Happy Customers",
            "99.9% Uptime Guarantee",
            "24/7 Customer Support",
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-indigo-200 font-medium">{feature}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CTASection
