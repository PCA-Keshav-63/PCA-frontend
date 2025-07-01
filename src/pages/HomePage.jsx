import HeroSection from "../components/home/HeroSection.jsx"
import CategoriesSection from "../components/home/CategoriesSection.jsx"
import FeaturedListings from "../components/home/FeaturedListings.jsx"
import HowItWorks from "../components/home/HowItWorks.jsx"
import RoleFeatures from "../components/home/RoleFeatures.jsx"
import CTASection from "../components/home/CTASection.jsx"
import { useState } from "react"

function HomePage() {
    const [searchResults, setSearchResults] = useState([])
  return (
    <div>
      <HeroSection setSearchResults={setSearchResults} />
      <CategoriesSection />
      <FeaturedListings />
      <HowItWorks />
      <RoleFeatures />
      <CTASection />

    </div>
  )
}

export default HomePage
