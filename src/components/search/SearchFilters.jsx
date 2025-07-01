// "use client"

// function SearchFilters({ filters, setFilters }) {
//   const handleFilterChange = (key, value) => {
//     setFilters((prev) => ({
//       ...prev,
//       [key]: value,
//     }))
//   }

//   return (
//     <div className="bg-white rounded-lg shadow-sm p-6">
//       <h3 className="text-lg font-semibold mb-4">Filters</h3>

//       <div className="space-y-6">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
//           <select
//             value={filters.category}
//             onChange={(e) => handleFilterChange("category", e.target.value)}
//             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">All Categories</option>
//             <option value="restaurant">Restaurants</option>
//             <option value="healthcare">Healthcare</option>
//             <option value="beauty">Beauty & Spa</option>
//             <option value="home">Home Services</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
//           <select
//             value={filters.rating}
//             onChange={(e) => handleFilterChange("rating", e.target.value)}
//             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">Any Rating</option>
//             <option value="4">4+ Stars</option>
//             <option value="3">3+ Stars</option>
//             <option value="2">2+ Stars</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Distance</label>
//           <select
//             value={filters.distance}
//             onChange={(e) => handleFilterChange("distance", e.target.value)}
//             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">Any Distance</option>
//             <option value="1">Within 1 mile</option>
//             <option value="5">Within 5 miles</option>
//             <option value="10">Within 10 miles</option>
//           </select>
//         </div>

//         <div>
//           <label className="flex items-center">
//             <input
//               type="checkbox"
//               checked={filters.isOpen}
//               onChange={(e) => handleFilterChange("isOpen", e.target.checked)}
//               className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//             />
//             <span className="ml-2 text-sm text-gray-700">Open now</span>
//           </label>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SearchFilters
