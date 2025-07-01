"use client"

import { Users, Target, Award, Globe, Heart, Zap, Shield, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"

function AboutPage() {
  const stats = [
    { label: "Active Businesses", value: "50,000+", icon: Users, color: "text-blue-600" },
    { label: "Happy Customers", value: "2M+", icon: Heart, color: "text-red-600" },
    { label: "Cities Covered", value: "500+", icon: Globe, color: "text-green-600" },
    { label: "Success Rate", value: "98%", icon: TrendingUp, color: "text-purple-600" },
  ]

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To connect local businesses with customers seamlessly, fostering community growth and economic prosperity through innovative technology solutions.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from our platform features to customer support, ensuring the highest quality experience.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description:
        "Building trust through transparent practices, secure technology, and verified business listings that customers can rely on.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Continuously innovating to provide cutting-edge tools and features that help businesses thrive in the digital marketplace.",
      color: "from-purple-500 to-indigo-500",
    },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former tech executive with 15+ years in marketplace platforms. Passionate about empowering local businesses.",
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Full-stack engineer and architect passionate about scalable systems and user experience optimization.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      bio: "UX expert focused on creating intuitive business solutions that drive growth and customer satisfaction.",
      color: "from-green-500 to-teal-500",
    },
    {
      name: "David Kim",
      role: "VP of Business Development",
      bio: "Strategic partnerships specialist with expertise in business growth and market expansion strategies.",
      color: "from-purple-500 to-violet-500",
    },
  ]

  const timeline = [
    {
      year: "2025",
      title: "Company Founded",
      description: "Started with a vision to digitize local business discovery and create meaningful connections.",
      milestone: "Founded",
    },
    {
      year: "2026",
      title: "Platform Launch",
      description: "Launched our first version with 1,000 businesses across 10 cities, focusing on user experience.",
      milestone: "Launch",
    },
    {
      year: "2027",
      title: "Rapid Growth",
      description: "Expanded to 50 cities with 10,000+ active businesses and introduced mobile applications.",
      milestone: "Growth",
    },
    {
      year: "2028",
      title: "Premium Features",
      description: "Introduced advanced analytics, premium subscriptions, and AI-powered business insights.",
      milestone: "Innovation",
    },
    {
      year: "2029",
      title: "Global Expansion",
      description: "Now serving 500+ cities with 50,000+ businesses and 2M+ satisfied customers worldwide.",
      milestone: "Global",
    },
  ]

  const features = [
    "Advanced Business Analytics",
    "Real-time Customer Insights",
    "Automated Booking System",
    "Multi-channel Marketing Tools",
    "24/7 Customer Support",
    "Mobile-first Platform",
    "Secure Payment Processing",
    "Review Management System",
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-3xl shadow-sm p-12 border border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-purple-600/5"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Empowering Local Businesses to
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Thrive
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            LocalFind is more than just a platform – we're your partner in building meaningful connections between
            businesses and customers, driving growth through innovation, trust, and community engagement.
          </p>
          <div className="flex items-center justify-center space-x-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">2020</div>
              <div className="text-sm text-gray-600 font-medium">Founded</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">50K+</div>
              <div className="text-sm text-gray-600 font-medium">Businesses</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">2M+</div>
              <div className="text-sm text-gray-600 font-medium">Customers</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">500+</div>
              <div className="text-sm text-gray-600 font-medium">Cities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-sm p-8 border border-gray-100 text-center group hover:shadow-lg transition-all duration-300"
          >
            <div
              className={`w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}
            >
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
            <div className="text-gray-600 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Values */}
      <div className="bg-white rounded-3xl shadow-sm p-12 border border-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These principles guide everything we do and shape how we serve our community of businesses and customers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="group">
              <div className="flex items-start space-x-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-3xl shadow-sm p-12 border border-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Goals</h2>
          <p className="text-xl text-gray-600">From startup vision to industry leader</p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="text-2xl font-bold text-indigo-600 mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    <div className="mt-3">
                      <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                        {item.milestone}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="bg-white rounded-3xl shadow-sm p-12 border border-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
          <p className="text-xl text-gray-600">The passionate people behind LocalFind's success</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div
                  className={`w-32 h-32 bg-gradient-to-br ${member.color} rounded-3xl mx-auto flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-lg`}
                >
                  <Users className="w-16 h-16 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-3xl shadow-sm p-12 border border-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Platform Features</h2>
          <p className="text-xl text-gray-600">Everything you need to grow your business</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-900 font-medium">{feature}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl shadow-lg p-12 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful businesses already using LocalFind to connect with customers and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
              <span>Get Started Today</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
