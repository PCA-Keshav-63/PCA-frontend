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
import BusinessCard from "../common/BusinessCard.jsx"

function SearchResults({ filters, results = [] }) {
  // Use results from props, fallback to empty array
  const filteredResults = results

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Search Results ({filteredResults.length})</h2>
        {/* <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Sort by Relevance</option>
          <option>Sort by Rating</option>
          <option>Sort by Distance</option>
          <option>Sort by Price</option>
        </select> */}
      </div>

      <div className="grid gap-1">
        {filteredResults.map((business) => (
          <BusinessCard key={business.id || business._id} business={business} />
        ))}
      </div>
    </div>
  )
}

export default SearchResults