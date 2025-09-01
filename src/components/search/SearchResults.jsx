// import { FEATURED_LISTINGS } from "../../constants/listings.js"
// import BusinessCard from "../common/BusinessCard.jsx"

// function SearchResults({ filters }) {
//   // In a real app, you would filter the results based on the filters
//   const filteredResults = FEATURED_LISTINGS

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold text-gray-900">Search Results ({filteredResults.length})</h2>
//         {/* <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
//           <option>Sort by Relevance</option>
//           <option>Sort by Rating</option>
//           <option>Sort by Distance</option>
//           <option>Sort by Price</option>
//         </select> */}
//       </div>

//       <div className="grid gap-6">
//         {filteredResults.map((business) => (
//           <BusinessCard key={business.id} business={business} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default SearchResults
import React, { useState, useEffect } from "react"
import BusinessCard from "../common/BusinessCard.jsx"

function SearchResults({ filters, results = [] }) {
  const [visibleResults, setVisibleResults] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [location, setLocation] = useState({ lat: null, lng: null })
  const [nearbyResults, setNearbyResults] = useState([])
  const PAGE_SIZE = 10

  // Reset pagination on new search results
  useEffect(() => {
    setVisibleResults(results.slice(0, PAGE_SIZE))
    setCurrentIndex(PAGE_SIZE)
  }, [results])

  // Get user geolocation
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocation({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          })
        },
        (err) => {
          console.error("Error getting location:", err)
        }
      )
    } else {
      console.error("Geolocation not supported by this browser")
    }
  }, [])

  // Fetch nearby services when location is available
  useEffect(() => {
    if (location.lat !== null && location.lng !== null) {
      const url = `/nearby?lat=${location.lat}&lng=${location.lng}&radiusKm=10`
      console.log("Fetching nearby services from:", url)

      fetch(url)
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`)
          return res.json()
        })
        .then((data) => {
          console.log("Nearby services:", data)
          setNearbyResults(data)
        })
        .catch((err) => console.error("Error fetching nearby services:", err))
    }
  }, [location])

  const handleLoadMore = () => {
    const nextResults = results.slice(currentIndex, currentIndex + PAGE_SIZE)
    setVisibleResults((prev) => [...prev, ...nextResults])
    setCurrentIndex((prev) => prev + PAGE_SIZE)
  }

  return (
    <div>
      {/* Search Results */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Search Results ({results.length})
        </h2>
      </div>

      <div className="grid gap-1">
        {visibleResults.map((business) => (
          <BusinessCard key={business.id || business._id} business={business} />
        ))}
      </div>

      {currentIndex < results.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Load More
          </button>
        </div>
      )}

      {/* Nearby Services Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Nearby Services
        </h2>
        {nearbyResults.length === 0 ? (
          <p className="text-gray-600">No nearby services found.</p>
        ) : (
          <div className="grid gap-1">
            {nearbyResults.map((business) => (
              <BusinessCard
                key={business.id || business._id}
                business={business}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchResults
