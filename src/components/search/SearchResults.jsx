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
  const PAGE_SIZE = 10

  useEffect(() => {
    // Reset on new search results
    setVisibleResults(results.slice(0, PAGE_SIZE))
    setCurrentIndex(PAGE_SIZE)
  }, [results])

  const handleLoadMore = () => {
    const nextResults = results.slice(currentIndex, currentIndex + PAGE_SIZE)
    setVisibleResults((prev) => [...prev, ...nextResults])
    setCurrentIndex((prev) => prev + PAGE_SIZE)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Search Results ({results.length})
        </h2>
        {/* Sorting can be added later if needed */}
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
    </div>
  )
}

export default SearchResults
