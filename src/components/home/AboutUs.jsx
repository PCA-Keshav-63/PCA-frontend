import { Link } from "react-router-dom"
import { ArrowRight, Sparkles } from "lucide-react"

function AboutUs() {
  return (
   
   <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

    <section className="mt-50 px-10 sm:px-15 lg:px-20">
  <div className="max-w-7xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8 text-white text-center shadow-md hover:shadow-lg transition">
    <div className="inline-flex items-center justify-center gap-2 mb-6"> 
    </div> 
  
  <h2 className="text-2xl sm:text-1xl font-bold text-white mb-4">
  <span className="text-yellow-300 animate-pulse drop-shadow-[0_0_6px_rgba(255,255,0,0.6)]">PincodeAds</span> isn’t just a <span className="text-yellow-300">Platform</span> — 
  it’s a <span className="text-pink-400 font-semibold">hyperlocal revolution</span>.
</h2>


    <p className="text-indigo-100 text-base leading-relaxed text-justify sm:text-s">
      PincodeAds (PCA) is a hyperlocal discovery and engagement platform designed to transform how people connect with their nearby services—whether it's gyms, tuition classes, shops, or home businesses. In today’s crowded digital space, users struggle to find trusted, relevant services nearby.
      <br /><br />
      PCA bridges this gap with real-time verified listings, precise pincode filtering, and seamless interaction tools. Our mission is to empower local businesses and build connected communities—where discovery becomes effortless and local growth becomes digital.
      <br /><br />
      From Tier I cities to remote towns, we’re building a platform that’s inclusive, multilingual, and purpose-driven—because we believe the power of local should be in everyone’s hands.
    </p>
  </div>
</section>

{/*<section className="mt-20 px-4 sm:px-6 lg:px-12">
  <h2 className="text-3xl font-bold text-white text-center mb-12">Why PincodeAds (PCA)?</h2>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
    
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-white hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-yellow-300 mb-4">Problems Users Face</h3>
      <ul className="list-disc ml-6 text-indigo-100 space-y-2 text-sm">
        <li>Scattered, outdated, and untrustworthy platforms</li>
        <li>Irrelevant or distant search results</li>
        <li>Fake or inactive listings</li>
        <li>No real-time offers or service booking options</li>
      </ul>
    </div>

    
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-white hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-yellow-300 mb-4">How PCA Solves It</h3>
      <ul className="list-disc ml-6 text-indigo-100 space-y-2 text-sm">
        <li>Pincode-level filtering for ultra-precise results</li>
        <li>Verified onboarding of local businesses</li>
        <li>Push-based real-time offers and alerts</li>
        <li>Built-in booking and secure payment options</li>
        <li>Gamification features to keep users engaged</li>
        <li>Multi-language support for every Indian user</li>
      </ul>
    </div>
  </div>
</section>



       <section className="mt-20 px-4 sm:px-6 lg:px-12">
  <h2 className="text-3xl font-bold text-white text-center mb-12">Our Vision</h2>
  <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-white max-w-4xl mx-auto text-justify">
    <p className="text-indigo-100 text-base leading-relaxed">
      To build the most trusted and intelligent hyperlocal platform that bridges the digital gap between local businesses and communities—
      empowering every user in India to discover, connect, and engage with nearby services seamlessly, in their preferred language and neighborhood.
    </p>
    <p className="text-indigo-100 text-base leading-relaxed mt-4">
      We envision a future where digital access to local services is not a luxury but a default convenience—available to all, regardless of tech-savviness or location.
    </p>
  </div>
</section>

       <section className="mt-20 px-4 sm:px-6 lg:px-12">
  <h2 className="text-3xl font-bold text-white text-center mb-12">Our Mission</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      "Providing hyper-targeted search and discovery based on precise pin code-level data",
      "Onboarding and empowering local vendors with tools for digital visibility and engagement",
      "Offering a seamless experience to browse, book, and benefit from services in real time",
      "Creating a reliable ecosystem of verified listings, community feedback, and transparent data",
      "Driving inclusive growth in Tier II, Tier III cities and rural areas through multilingual and offline capabilities"
    ].map((missionPoint, idx) => (
      <div
        key={idx}
        className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-white hover:shadow-xl transition text-sm"
      >
        <h3 className="text-yellow-300 font-semibold mb-2">Mission Point {idx + 1}</h3>
        <p className="text-indigo-100">{missionPoint}</p>
      </div>
    ))}
  </div>
</section>

       

<section className="mt-20 px-4 sm:px-6 lg:px-12">
  <h2 className="text-3xl font-bold text-white text-center mb-12">Explore Our Services</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        title: "Hyperlocal Discovery",
        description: "Find shops and services by location, category, and pincode."
      },
      {
        title: "Verified Listings",
        description: "All businesses are verified and regularly updated."
      },
      {
        title: "Real-Time Offers",
        description: "See limited-time deals from local vendors near you."
      },
      {
        title: "Booking & Payments",
        description: "Book appointments or orders directly with secure payments."
      },
      {
        title: "Multilingual Support",
        description: "Use the app in your preferred language with auto-detection."
      },
      {
        title: "Gamified Engagement",
        description: "Earn rewards and points while engaging with services."
      }
    ].map((service, idx) => (
      <div
        key={idx}
        className="bg-white/10 backdrop-blur-md text-white p-6 rounded-xl hover:shadow-xl transition"
      >
        <h3 className="text-xl font-semibold mb-2 text-yellow-300">{service.title}</h3>
        <p className="text-indigo-100 text-sm">{service.description}</p>
      </div>
    ))}
  </div>
</section>



 

<section className="mt-20 px-4 sm:px-6 lg:px-12">
  <h2 className="text-3xl font-bold text-white text-center mb-12">Impact & Benefits</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        category: "For Users",
        bullets: [
          "Faster and smarter local service discovery",
          "Easy comparison of businesses",
          "Verified, trustworthy data",
          "Seamless bookings and offers"
        ]
      },
      {
        category: "For Local Businesses",
        bullets: [
          "Increased online visibility",
          "Direct customer engagement",
          "Support for digital transformation",
          "Promotion of offers or premium listings"
        ]
      },
      {
        category: "For the Platform",
        bullets: [
          "Scalable architecture for growth",
          "Real-time analytics and insights",
          "Community-driven feedback and moderation"
        ]
      }
    ].map((section, idx) => (
      <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-white hover:shadow-xl transition">
        <h3 className="text-lg font-semibold mb-3 text-yellow-300">{section.category}</h3>
        <ul className="list-disc ml-4 space-y-1 text-sm text-indigo-100">
          {section.bullets.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>
    */}




      
    </section>
  )
}

export default AboutUs
