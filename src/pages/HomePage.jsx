import HeroSection from "../components/home/HeroSection.jsx"
import CategoriesSection from "../components/home/CategoriesSection.jsx"
// import FeaturedListings from "../components/home/FeaturedListings.jsx"
import HowItWorks from "../components/home/HowItWorks.jsx"
import RoleFeatures from "../components/home/RoleFeatures.jsx"
import CTASection from "../components/home/CTASection.jsx"
import AboutUs from "../components/home/AboutUs.jsx"
import Services from "../components/home/Services.jsx"
import Seo from "../components/home/Seo.jsx"
import { useState } from "react"

function HomePage() {
    const [searchResults, setSearchResults] = useState([])
  return (
    <div>
      <HeroSection setSearchResults={setSearchResults} />
      <CategoriesSection />
      {/* <FeaturedListings /> */}
      <HowItWorks />
      <RoleFeatures />
      <CTASection />
       <AboutUs/>
      <Services/>
      <Seo/>
    </div>
  )
}

export default HomePage




// import HeroSection from "../components/home/HeroSection.jsx"
// import CategoriesSection from "../components/home/CategoriesSection.jsx"
// // import FeaturedListings from "../components/home/FeaturedListings.jsx"
// import HowItWorks from "../components/home/HowItWorks.jsx"
// import RoleFeatures from "../components/home/RoleFeatures.jsx"
// import CTASection from "../components/home/CTASection.jsx"
// import AboutUs from "../components/home/AboutUs.jsx"
// import Services from "../components/home/Services.jsx"
// import Seo from "../components/home/Seo.jsx"

// function HomePage() {
//   return (
//     <div>
//       <HeroSection />
//       <CategoriesSection />
//       {/* <FeaturedListings /> */}
//       <HowItWorks />
//       <RoleFeatures />
//       <CTASection />
//        <AboutUs/>
//       <Services/>
//       <Seo/>
//     </div>
//   )
// }

// export default HomePage
