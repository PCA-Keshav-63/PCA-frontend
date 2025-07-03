// "use client"

// import { Users, Target, Award, Globe, Heart, Zap, Shield, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"

// function AboutPage() {
//   const stats = [
//     { label: "Active Businesses", value: "50,000+", icon: Users, color: "text-blue-600" },
//     { label: "Happy Customers", value: "2M+", icon: Heart, color: "text-red-600" },
//     { label: "Cities Covered", value: "500+", icon: Globe, color: "text-green-600" },
//     { label: "Success Rate", value: "98%", icon: TrendingUp, color: "text-purple-600" },
//   ]

//   const values = [
//     {
//       icon: Target,
//       title: "Our Mission",
//       description:
//         "To connect local businesses with customers seamlessly, fostering community growth and economic prosperity through innovative technology solutions.",
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       icon: Award,
//       title: "Excellence",
//       description:
//         "We strive for excellence in everything we do, from our platform features to customer support, ensuring the highest quality experience.",
//       color: "from-amber-500 to-orange-500",
//     },
//     {
//       icon: Shield,
//       title: "Trust & Security",
//       description:
//         "Building trust through transparent practices, secure technology, and verified business listings that customers can rely on.",
//       color: "from-green-500 to-emerald-500",
//     },
//     {
//       icon: Zap,
//       title: "Innovation",
//       description:
//         "Continuously innovating to provide cutting-edge tools and features that help businesses thrive in the digital marketplace.",
//       color: "from-purple-500 to-indigo-500",
//     },
//   ]

//   const team = [
//     {
//       name: "Sarah Johnson",
//       role: "CEO & Founder",
//       bio: "Former tech executive with 15+ years in marketplace platforms. Passionate about empowering local businesses.",
//       color: "from-pink-500 to-rose-500",
//     },
//     {
//       name: "Michael Chen",
//       role: "CTO",
//       bio: "Full-stack engineer and architect passionate about scalable systems and user experience optimization.",
//       color: "from-blue-500 to-indigo-500",
//     },
//     {
//       name: "Emily Rodriguez",
//       role: "Head of Product",
//       bio: "UX expert focused on creating intuitive business solutions that drive growth and customer satisfaction.",
//       color: "from-green-500 to-teal-500",
//     },
//     {
//       name: "David Kim",
//       role: "VP of Business Development",
//       bio: "Strategic partnerships specialist with expertise in business growth and market expansion strategies.",
//       color: "from-purple-500 to-violet-500",
//     },
//   ]

//   const timeline = [
//     {
//       year: "2025",
//       title: "Company Founded",
//       description: "Started with a vision to digitize local business discovery and create meaningful connections.",
//       milestone: "Founded",
//     },
//     {
//       year: "2026",
//       title: "Platform Launch",
//       description: "Launched our first version with 1,000 businesses across 10 cities, focusing on user experience.",
//       milestone: "Launch",
//     },
//     {
//       year: "2027",
//       title: "Rapid Growth",
//       description: "Expanded to 50 cities with 10,000+ active businesses and introduced mobile applications.",
//       milestone: "Growth",
//     },
//     {
//       year: "2028",
//       title: "Premium Features",
//       description: "Introduced advanced analytics, premium subscriptions, and AI-powered business insights.",
//       milestone: "Innovation",
//     },
//     {
//       year: "2029",
//       title: "Global Expansion",
//       description: "Now serving 500+ cities with 50,000+ businesses and 2M+ satisfied customers worldwide.",
//       milestone: "Global",
//     },
//   ]

//   const features = [
//     "Advanced Business Analytics",
//     "Real-time Customer Insights",
//     "Automated Booking System",
//     "Multi-channel Marketing Tools",
//     "24/7 Customer Support",
//     "Mobile-first Platform",
//     "Secure Payment Processing",
//     "Review Management System",
//   ]

//   return (
//     <div className="space-y-12">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-3xl shadow-sm p-12 border border-gray-100 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-purple-600/5"></div>
//         <div className="relative z-10 text-center max-w-4xl mx-auto">
//           <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
//             <Heart className="w-10 h-10 text-white" />
//           </div>
//           <h1 className="text-5xl font-bold text-gray-900 mb-6">
//             Empowering Local Businesses to
//             <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//               {" "}
//               Thrive
//             </span>
//           </h1>
//           <p className="text-xl text-gray-600 leading-relaxed mb-8">
//             LocalFind is more than just a platform – we're your partner in building meaningful connections between
//             businesses and customers, driving growth through innovation, trust, and community engagement.
//           </p>
//           <div className="flex items-center justify-center space-x-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//             <div className="text-center">
//               <div className="text-3xl font-bold text-indigo-600">2020</div>
//               <div className="text-sm text-gray-600 font-medium">Founded</div>
//             </div>
//             <div className="w-px h-12 bg-gray-300"></div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-purple-600">50K+</div>
//               <div className="text-sm text-gray-600 font-medium">Businesses</div>
//             </div>
//             <div className="w-px h-12 bg-gray-300"></div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-indigo-600">2M+</div>
//               <div className="text-sm text-gray-600 font-medium">Customers</div>
//             </div>
//             <div className="w-px h-12 bg-gray-300"></div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-green-600">500+</div>
//               <div className="text-sm text-gray-600 font-medium">Cities</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         {stats.map((stat, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-3xl shadow-sm p-8 border border-gray-100 text-center group hover:shadow-lg transition-all duration-300"
//           >
//             <div
//               className={`w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}
//             >
//               <stat.icon className={`w-8 h-8 ${stat.color}`} />
//             </div>
//             <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
//             <div className="text-gray-600 font-medium">{stat.label}</div>
//           </div>
//         ))}
//       </div>

//       {/* Values */}
//       <div className="bg-white rounded-3xl shadow-sm p-12 border border-gray-100">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             These principles guide everything we do and shape how we serve our community of businesses and customers
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {values.map((value, index) => (
//             <div key={index} className="group">
//               <div className="flex items-start space-x-6">
//                 <div
//                   className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}
//                 >
//                   <value.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
//                   <p className="text-gray-600 leading-relaxed">{value.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Timeline */}
//       <div className="bg-white rounded-3xl shadow-sm p-12 border border-gray-100">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Goals</h2>
//           <p className="text-xl text-gray-600">From startup vision to industry leader</p>
//         </div>
//         <div className="relative">
//           <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
//           <div className="space-y-12">
//             {timeline.map((item, index) => (
//               <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
//                 <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
//                   <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
//                     <div className="text-2xl font-bold text-indigo-600 mb-2">{item.year}</div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
//                     <p className="text-gray-600 leading-relaxed">{item.description}</p>
//                     <div className="mt-3">
//                       <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
//                         {item.milestone}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="relative z-10">
//                   <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
//                 </div>
//                 <div className="w-1/2"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Team */}
//       <div className="bg-white rounded-3xl shadow-sm p-12 border border-gray-100">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
//           <p className="text-xl text-gray-600">The passionate people behind LocalFind's success</p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {team.map((member, index) => (
//             <div key={index} className="text-center group">
//               <div className="relative mb-6">
//                 <div
//                   className={`w-32 h-32 bg-gradient-to-br ${member.color} rounded-3xl mx-auto flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-lg`}
//                 >
//                   <Users className="w-16 h-16 text-white" />
//                 </div>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
//               <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
//               <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Features */}
//       <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-3xl shadow-sm p-12 border border-gray-100">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Platform Features</h2>
//           <p className="text-xl text-gray-600">Everything you need to grow your business</p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
//             >
//               <div className="flex items-center space-x-3">
//                 <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
//                 <span className="text-gray-900 font-medium">{feature}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CTA */}
//       <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl shadow-lg p-12 text-center text-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-black bg-opacity-10"></div>
//         <div className="relative z-10">
//           <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
//           <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
//             Join thousands of successful businesses already using LocalFind to connect with customers and drive growth.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
//             <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
//               <span>Get Started Today</span>
//               <ArrowRight className="w-4 h-4" />
//             </button>
//             <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-200">
//               Contact Sales
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AboutPage
"use client";

import React, { useMemo } from "react";
import {
  Heart,
  Target,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function AboutPage() {
  // Original team data
  const team = [
    {
      name: "Drivyansh Yadav",
      role: "Full-Stack developer",
      bio: "Drivyaansh is a curious and committed Computer Engineering student with a keen interest in software development and system design.",
      color: "from-purple-500 to-violet-500",
      img: "../../Drivyaansh.png",
    },
    {
      name: "Keshav Suthar",
      role: "Full-Stack developer",
      bio: "Keshav is a Computer Engineering intern with practical experience in MERN stack and Spring Boot, focused on building clean and efficient web applications.",
      color: "from-purple-500 to-violet-500",
      img: "../../Keshav.png",
    },
    {
      name: "Shreeyansh Singh",
      role: "Full-Stack developer",
      bio: "Shreeyansh is a Computer Engineering student with strong expertise in frontend development and a growing passion for full-stack engineering.",
      color: "from-purple-500 to-violet-500",
      img: "../../Shreeyansh.png",
    },
    {
      name: "Keith Fernandes",
      role: "Data Analytics & ML",
      bio: "Keith is an Electronics and Telecommunications Engineering student passionate about data science, machine learning, and AI.",
      color: "from-purple-500 to-violet-500",
      img: "../../Keith.png",
    },
    {
      name: "Saumya Shah",
      role: "Full-Stack developer",
      bio: "Saumya is a focused and passionate Computer Engineering student with a strong interest in full-stack development.",
      color: "from-green-500 to-teal-500",
      img: "../../Saumya.png",
    },
    {
      name: "Shubham Pashte",
      role: "Full-Stack developer",
      bio: "Shubham is a dedicated Electronics Engineering student with a strong passion for web development and software systems.",
      color: "from-purple-500 to-violet-500",
      img: "../../Shubham.png",
    },
    {
      name: "Lubdhie Dagade",
      role: "Full-Stack developer",
      bio: "Lubdhie is a passionate Computer Engineering intern with a strong interest in frontend development and UI/UX design.",
      color: "from-purple-500 to-violet-500",
      img: "../../Lubdhie.png",
    },
    {
      name: "Kruti Dagade",
      role: "Full-Stack developer",
      bio: "Kruti is a Computer Engineering intern who thrives on designing smooth, user-centric web experiences with a keen interest in frontend development.",
      color: "from-purple-500 to-violet-500",
      img: "../../Kruti.png",
    },
    {
      name: "Tanhaa Mehta",
      role: "Full-Stack developer",
      bio: "Tanhaa is a Computer Engineering student and intern with a strong passion for web development, AI-driven solutions, and software engineering.",
      color: "from-purple-500 to-violet-500",
      img: "../../Tanhaa.png",
    },
  ];

  // Shuffle team randomly on each render using useMemo, to preserve order during the same render
  const shuffledTeam = useMemo(() => {
    const array = [...team];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }, [team]);

  const features = [
    "Advanced Business Analytics",
    "Real-time Customer Insights",
    "Automated Booking System",
    "Multi-channel Marketing Tools",
    "24/7 Customer Support",
    "Mobile-first Platform",
    "Secure Payment Processing",
    "Review Management System",
  ];

  const statsData = [
    { name: "Businesses", value: 50000 },
    { name: "Customers", value: 20000 },
    { name: "Cities", value: 4000 },
  ];

  const COLORS = ["#6366F1", "#9333EA", "#10B981"];

  return (
    <div className="space-y-12 ">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50  shadow-sm p-8 sm:p-12 border border-gray-100 overflow-hidden"
        aria-label="Hero"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-purple-600/5"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-white" aria-hidden="true" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Connecting Local India to{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Opportunities
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            At PincodeAds, we’re building a digital bridge between local
            businesses and their nearby customers, making discovery, trust,
            and transactions faster, smarter, and more personal.
          </p>
          <div className="flex flex-wrap items-center justify-center space-x-6 space-y-4 sm:space-y-0 bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 text-gray-700 font-medium text-center">
            <div className="w-24">
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600">2020</div>
              <div className="text-xs sm:text-sm font-semibold">Founded</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
            <div className="w-24">
              <div className="text-2xl sm:text-3xl font-extrabold text-purple-600">50K+</div>
              <div className="text-xs sm:text-sm font-semibold">Businesses</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
            <div className="w-24">
              <div className="text-2xl sm:text-3xl font-extrabold text-green-600">500+</div>
              <div className="text-xs sm:text-sm font-semibold">Cities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pie Chart Section */}
      <section
        className="bg-white  shadow-sm p-6 sm:p-10 border border-gray-100"
        aria-label="Business reach distribution chart"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2">
          Business Reach Distribution
        </h2>
        <p className="text-center text-gray-500 mb-6 max-w-xl mx-auto">
          A visual snapshot of how we’re empowering India's local ecosystem
        </p>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={statsData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={130}
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
              labelLine={false}
            >
              {statsData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </section>

      {/* What Powers PincodeAds */}
      <section
        className="py-16 bg-gray-50"
        aria-label="Platform principles"
      >
        <div className="text-center mb-14 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Powers PincodeAds
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Beyond technology — our principles that keep local India connected,
            trusted, and growing.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8 px-4 sm:px-6">
          {[
            {
              icon: Target,
              title: "Vision",
              desc: `To build the most trusted and intelligent hyperlocal platform that bridges the digital gap between local businesses and communities empowering every user in India to discover, connect, and engage with nearby services seamlessly, in their preferred language and neighborhood.
              We envision a future where digital access to local services is not a luxury but a default convenience—available to all, regardless of tech-savviness or location.`,
              color: "from-blue-500 to-cyan-500",
            },
            {
              icon: Heart,
              title: "Mission",
              desc: `Our mission is to democratize digital discovery for local commerce by enabling hyper-targeted search through pin code-level data, empowering vendors with tools for digital visibility, ensuring seamless real-time user experiences, building trust through verified listings and community feedback, and driving inclusive growth across Tier II, Tier III, and rural areas with multilingual and offline support.`,
              color: "from-pink-500 to-red-500",
            },
            {
              icon: Shield,
              title: "Impact & Benefits",
              desc: `PincodeAds empowers users with faster, smarter local discovery, seamless bookings, and verified data. It boosts local businesses through enhanced visibility, direct engagement, and digital tools, while the platform thrives on scalable tech, real-time insights, and a trusted community ecosystem.`,
              color: "from-green-500 to-emerald-500",
            },
          ].map(({ icon: Icon, title, desc, color }, i) => (
            <article
              key={i}
              className="flex flex-col sm:flex-row items-start gap-5 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div
                className={`w-14 h-14 rounded-full bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}
                aria-hidden="true"
              >
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 whitespace-pre-line leading-relaxed">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Founders Section */}
      <section
        className="bg-white  shadow-sm p-8 sm:p-12 border border-gray-100"
        aria-label="Founding team"
      >
        <div className="text-center mb-12 px-4 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Founding Team
          </h2>
          <p className="text-lg text-gray-600">
            Visionaries behind PincodeAds
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 max-w-5xl mx-auto flex-wrap">
          {[
            {
              name: "ShitalKumar Dagade",
              role: "CO-FOUNDER & COO",
              bio: "Electronics Engineer with 25+ years of IT experience and certifications from IBM, Linux, and Sun. A serial entrepreneur, he leads technical operations and oversees HR and finance. He has worked successfully in Hong Kong and Japan. In his free time, he enjoys reading with tea.",
              img: "../../Shital Sir.png",
            },
            {
              name: "ChanchalKumar Dagade",
              role: "CO-FOUNDER & CEO",
              bio: "Electronics Engineer with a Master’s in Information Management and 22+ years of IT experience. He brings expertise in marketing, quality control, finance, and public relations driving business growth with strategic insight. He enjoys playing chess in his free time.",
              img: "../../Chanchal Sir.png",
            },
          ].map((founder, i) => (
            <article
              key={i}
              className="text-center group max-w-xs sm:max-w-sm"
            >
              <img
                src={founder.img}
                alt={founder.name}
                className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300 object-cover"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-1">{founder.name}</h3>
              <p className="text-indigo-600 font-medium mb-2">{founder.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{founder.bio}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section
        className="bg-white shadow-sm p-8 sm:p-12 border border-gray-100 mt-10"
        aria-label="Team members"
      >
        <div className="text-center mb-12 px-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Amazing Team</h2>
          <p className="text-xl text-gray-600">
            The backbone behind PincodeAds' execution
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 max-w-6xl mx-auto">
          {shuffledTeam
            .filter((member) => !member.role.toLowerCase().includes("founder")) // exclude founders
            .map((member, i) => (
              <article
                key={member.name + i}
                className="text-center group"
                tabIndex={0} // Make cards focusable for accessibility
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300 object-cover"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-indigo-600 font-medium mb-2">
                  {member.role || "Team Member"}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </article>
            ))}
        </div>
      </section>

      {/* Features */}
      <section
        className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 shadow-sm p-8 sm:p-12 border border-gray-100"
        aria-label="Platform features"
      >
        <div className="text-center mb-12 px-4 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Platform Features
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to grow your business
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3">
                <CheckCircle
                  className="w-5 h-5 text-green-500 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-gray-900 font-medium">{feature}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg p-8 sm:p-12 text-center text-white overflow-hidden"
        aria-label="Call to action"
      >
        <div className="absolute inset-0 bg-black bg-opacity-10 pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg sm:text-xl text-indigo-100 mb-8 leading-relaxed px-4">
            Join thousands of successful businesses already using LocalFind to
            connect with customers and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto px-4">
            <button
              type="button"
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-200"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;