// "use client"

// import { useState } from "react"
// import { Link } from "react-router-dom"
// import { Search, Grid, List, TrendingUp, Star, ArrowRight } from "lucide-react"

// function CategoriesPage() {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [viewMode, setViewMode] = useState("grid") // grid or list
//   const [selectedFilter, setSelectedFilter] = useState("all")

//   const categories = [
//     {
//       id: "beauty-spa",
//       name: "Beauty & Spa",
//       description: "Salons, spas, beauty treatments, and wellness services",
//       icon: "💄",
//       serviceCount: 1250,
//       averageRating: 4.6,
//       trending: true,
//       color: "from-pink-500 to-rose-500",
//       bgColor: "from-pink-50 to-rose-50",
//     },
//     {
//       id: "healthcare",
//       name: "Healthcare",
//       description: "Doctors, clinics, hospitals, and medical services",
//       icon: "🏥",
//       serviceCount: 890,
//       averageRating: 4.8,
//       trending: false,
//       color: "from-blue-500 to-cyan-500",
//       bgColor: "from-blue-50 to-cyan-50",
//     },
//     {
//       id: "restaurants",
//       name: "Restaurants",
//       description: "Fine dining, casual dining, fast food, and cafes",
//       icon: "🍽️",
//       serviceCount: 2100,
//       averageRating: 4.4,
//       trending: true,
//       color: "from-orange-500 to-red-500",
//       bgColor: "from-orange-50 to-red-50",
//     },
//     {
//       id: "home-services",
//       name: "Home Services",
//       description: "Cleaning, repairs, maintenance, and home improvement",
//       icon: "🏠",
//       serviceCount: 1680,
//       averageRating: 4.5,
//       trending: false,
//       color: "from-green-500 to-emerald-500",
//       bgColor: "from-green-50 to-emerald-50",
//     },
//     {
//       id: "automotive",
//       name: "Automotive",
//       description: "Car repairs, maintenance, dealerships, and services",
//       icon: "🚗",
//       serviceCount: 750,
//       averageRating: 4.3,
//       trending: false,
//       color: "from-gray-500 to-slate-500",
//       bgColor: "from-gray-50 to-slate-50",
//     },
//     {
//       id: "education",
//       name: "Education",
//       description: "Schools, tutoring, training centers, and courses",
//       icon: "📚",
//       serviceCount: 920,
//       averageRating: 4.7,
//       trending: true,
//       color: "from-indigo-500 to-purple-500",
//       bgColor: "from-indigo-50 to-purple-50",
//     },
//     {
//       id: "real-estate",
//       name: "Real Estate",
//       description: "Property sales, rentals, agents, and consultants",
//       icon: "🏢",
//       serviceCount: 540,
//       averageRating: 4.2,
//       trending: false,
//       color: "from-teal-500 to-cyan-500",
//       bgColor: "from-teal-50 to-cyan-50",
//     },
//     {
//       id: "travel-tourism",
//       name: "Travel & Tourism",
//       description: "Hotels, travel agencies, tours, and hospitality",
//       icon: "✈️",
//       serviceCount: 680,
//       averageRating: 4.4,
//       trending: true,
//       color: "from-sky-500 to-blue-500",
//       bgColor: "from-sky-50 to-blue-50",
//     },
//     {
//       id: "fitness-wellness",
//       name: "Fitness & Wellness",
//       description: "Gyms, yoga studios, personal trainers, and wellness",
//       icon: "💪",
//       serviceCount: 1100,
//       averageRating: 4.6,
//       trending: true,
//       color: "from-lime-500 to-green-500",
//       bgColor: "from-lime-50 to-green-50",
//     },
//     {
//       id: "professional-services",
//       name: "Professional Services",
//       description: "Legal, accounting, consulting, and business services",
//       icon: "💼",
//       serviceCount: 820,
//       averageRating: 4.5,
//       trending: false,
//       color: "from-violet-500 to-purple-500",
//       bgColor: "from-violet-50 to-purple-50",
//     },
//     {
//       id: "retail",
//       name: "Retail",
//       description: "Shopping, stores, boutiques, and retail outlets",
//       icon: "🛍️",
//       serviceCount: 1950,
//       averageRating: 4.3,
//       trending: false,
//       color: "from-fuchsia-500 to-pink-500",
//       bgColor: "from-fuchsia-50 to-pink-50",
//     },
//     {
//       id: "entertainment",
//       name: "Entertainment",
//       description: "Events, venues, entertainment, and recreation",
//       icon: "🎭",
//       serviceCount: 640,
//       averageRating: 4.4,
//       trending: true,
//       color: "from-amber-500 to-orange-500",
//       bgColor: "from-amber-50 to-orange-50",
//     },
//   ]

//   const filters = [
//     { id: "all", label: "All Categories", count: categories.length },
//     { id: "trending", label: "Trending", count: categories.filter((c) => c.trending).length },
//     { id: "popular", label: "Most Popular", count: categories.filter((c) => c.serviceCount > 1000).length },
//     { id: "top-rated", label: "Top Rated", count: categories.filter((c) => c.averageRating >= 4.5).length },
//   ]

//   const filteredCategories = categories.filter((category) => {
//     const matchesSearch =
//       category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       category.description.toLowerCase().includes(searchTerm.toLowerCase())

//     const matchesFilter =
//       selectedFilter === "all" ||
//       (selectedFilter === "trending" && category.trending) ||
//       (selectedFilter === "popular" && category.serviceCount > 1000) ||
//       (selectedFilter === "top-rated" && category.averageRating >= 4.5)

//     return matchesSearch && matchesFilter
//   })

//   return (
//     <div className="space-y-8">
//       {/* Header */}
//       <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-3xl shadow-sm p-8 border border-gray-100">
//         <div className="text-center max-w-3xl mx-auto">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">
//             Explore All
//             <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//               {" "}
//               Categories
//             </span>
//           </h1>
//           <p className="text-xl text-gray-600 mb-8">
//             Discover thousands of local businesses across all service categories
//           </p>

//           {/* Search Bar */}
//           <div className="relative max-w-2xl mx-auto">
//             <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-lg"
//               placeholder="Search categories..."
//             />
//           </div>
//         </div>
//       </div>

//       {/* Filters and View Controls */}
//       <div className="bg-white rounded-3xl shadow-sm p-6 border border-gray-100">
//         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
//           {/* Filters */}
//           <div className="flex flex-wrap gap-2">
//             {filters.map((filter) => (
//               <button
//                 key={filter.id}
//                 onClick={() => setSelectedFilter(filter.id)}
//                 className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
//                   selectedFilter === filter.id
//                     ? "bg-indigo-600 text-white shadow-lg"
//                     : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                 }`}
//               >
//                 {filter.label} ({filter.count})
//               </button>
//             ))}
//           </div>

//           {/* View Controls */}
//           <div className="flex items-center space-x-2">
//             <span className="text-sm text-gray-600">View:</span>
//             <div className="flex bg-gray-100 rounded-lg p-1">
//               <button
//                 onClick={() => setViewMode("grid")}
//                 className={`p-2 rounded-md transition-all duration-200 ${
//                   viewMode === "grid" ? "bg-white text-indigo-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
//                 }`}
//               >
//                 <Grid className="w-4 h-4" />
//               </button>
//               <button
//                 onClick={() => setViewMode("list")}
//                 className={`p-2 rounded-md transition-all duration-200 ${
//                   viewMode === "list" ? "bg-white text-indigo-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
//                 }`}
//               >
//                 <List className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Categories Grid/List */}
//       <div className={`${viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}`}>
//         {filteredCategories.map((category) => (
//           <Link key={category.id} to={`/categories/${category.id}`} className="group block">
//             {viewMode === "grid" ? (
//               // Grid View
//               <div
//                 className={`bg-gradient-to-br ${category.bgColor} rounded-3xl shadow-sm border border-gray-100 p-8 group-hover:shadow-lg transform group-hover:scale-105 transition-all duration-300 relative overflow-hidden`}
//               >
//                 {category.trending && (
//                   <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
//                     <TrendingUp className="w-3 h-3" />
//                     <span>Trending</span>
//                   </div>
//                 )}

//                 <div className="text-center">
//                   <div className="text-4xl mb-4">{category.icon}</div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
//                   <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>

//                   <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-4">
//                     <div className="flex items-center space-x-1">
//                       <span className="font-semibold text-gray-900">{category.serviceCount.toLocaleString()}</span>
//                       <span>services</span>
//                     </div>
//                     <div className="flex items-center space-x-1">
//                       <Star className="w-4 h-4 text-yellow-500 fill-current" />
//                       <span className="font-semibold text-gray-900">{category.averageRating}</span>
//                     </div>
//                   </div>

//                   <div
//                     className={`inline-flex items-center space-x-2 bg-gradient-to-r ${category.color} text-white px-4 py-2 rounded-xl font-medium group-hover:shadow-lg transition-all duration-200`}
//                   >
//                     <span>Explore Services</span>
//                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               // List View
//               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 group-hover:shadow-lg transition-all duration-300">
//                 <div className="flex items-center space-x-6">
//                   <div
//                     className={`w-16 h-16 bg-gradient-to-br ${category.bgColor} rounded-2xl flex items-center justify-center text-2xl`}
//                   >
//                     {category.icon}
//                   </div>

//                   <div className="flex-1">
//                     <div className="flex items-center space-x-3 mb-2">
//                       <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
//                       {category.trending && (
//                         <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
//                           <TrendingUp className="w-3 h-3" />
//                           <span>Trending</span>
//                         </div>
//                       )}
//                     </div>
//                     <p className="text-gray-600 mb-3">{category.description}</p>
//                     <div className="flex items-center space-x-6 text-sm text-gray-500">
//                       <div className="flex items-center space-x-1">
//                         <span className="font-semibold text-gray-900">{category.serviceCount.toLocaleString()}</span>
//                         <span>services available</span>
//                       </div>
//                       <div className="flex items-center space-x-1">
//                         <Star className="w-4 h-4 text-yellow-500 fill-current" />
//                         <span className="font-semibold text-gray-900">{category.averageRating}</span>
//                         <span>average rating</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div
//                     className={`bg-gradient-to-r ${category.color} text-white p-3 rounded-xl group-hover:shadow-lg transition-all duration-200`}
//                   >
//                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
//                   </div>
//                 </div>
//               </div>
//             )}
//           </Link>
//         ))}
//       </div>

//       {/* No Results */}
//       {filteredCategories.length === 0 && (
//         <div className="text-center py-12">
//           <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <Search className="w-12 h-12 text-gray-400" />
//           </div>
//           <h3 className="text-xl font-semibold text-gray-900 mb-2">No categories found</h3>
//           <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
//           <button
//             onClick={() => {
//               setSearchTerm("")
//               setSelectedFilter("all")
//             }}
//             className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-colors"
//           >
//             Clear Filters
//           </button>
//         </div>
//       )}

//       {/* Stats */}
//       <div className="bg-white rounded-3xl shadow-sm p-8 border border-gray-100">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
//           <div>
//             <div className="text-3xl font-bold text-indigo-600 mb-2">
//               {categories.reduce((sum, cat) => sum + cat.serviceCount, 0).toLocaleString()}
//             </div>
//             <div className="text-gray-600">Total Services</div>
//           </div>
//           <div>
//             <div className="text-3xl font-bold text-green-600 mb-2">{categories.length}</div>
//             <div className="text-gray-600">Categories</div>
//           </div>
//           <div>
//             <div className="text-3xl font-bold text-purple-600 mb-2">
//               {(categories.reduce((sum, cat) => sum + cat.averageRating, 0) / categories.length).toFixed(1)}
//             </div>
//             <div className="text-gray-600">Avg Rating</div>
//           </div>
//           <div>
//             <div className="text-3xl font-bold text-orange-600 mb-2">{categories.filter((c) => c.trending).length}</div>
//             <div className="text-gray-600">Trending</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CategoriesPage
// import { useEffect, useState } from "react"
// import axios from "axios"

// function CategoriesPage() {
//   const [categoriesWithSub, setCategoriesWithSub] = useState([])
//   const [searchTerm, setSearchTerm] = useState("")

//   useEffect(() => {
//     const fetchCategoriesAndSubcategories = async () => {
//       try {
//         const { data: categories } = await axios.get("https://pincodeads.onrender.com/api/v1.0/categories")

//         const categoryWithSubs = await Promise.all(
//           categories.map(async (cat) => {
//             const { data: subcategories } = await axios.get(
//               `https://pincodeads.onrender.com/api/v1.0/subcategories?categoryId=${cat.id}`
//             )
//             return {
//               ...cat,
//               subcategories,
//             }
//           })
//         )

//         setCategoriesWithSub(categoryWithSubs)
//       } catch (error) {
//         console.error("Error fetching data:", error)
//       }
//     }

//     fetchCategoriesAndSubcategories()
//   }, [])

//   // 🔍 Filter logic
//   const filteredCategories = categoriesWithSub.filter((cat) => {
//     const lowerSearch = searchTerm.toLowerCase()
//     const categoryMatch = cat.name.toLowerCase().includes(lowerSearch)
//     const subcategoryMatch = cat.subcategories.some((sub) =>
//       sub.name.toLowerCase().includes(lowerSearch)
//     )
//     return categoryMatch || subcategoryMatch
//   })

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">All Categories</h2>

//         {/* 🔍 Search Input */}
//         <div className="mb-10 max-w-md mx-auto">
//           <input
//             type="text"
//             placeholder="Search categories or subcategories..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {filteredCategories.map((cat) => (
//             <div
//               key={cat.id}
//               className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow hover:shadow-md transition"
//             >
//               <div className="flex items-center justify-center mb-3">
//                 <img src={cat.iconUrl} alt={cat.name} className="w-12 h-12 object-contain" />
//               </div>
//               <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">
//                 {cat.name}
//               </h3>

//               {cat.subcategories.length > 0 ? (
//                 <ul className="text-sm text-gray-600 list-disc list-inside">
//                   {cat.subcategories.map((sub) => (
//                     <li key={sub.id}>{sub.name}</li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-sm text-gray-400 text-center">No subcategories</p>
//               )}
//             </div>
//           ))}
//         </div>

//         {filteredCategories.length === 0 && (
//           <p className="text-center text-gray-500 mt-10">No matching results found.</p>
//         )}
//       </div>
//     </section>
//   )
// }

// export default CategoriesPage
import { useEffect, useState, useRef } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function CategoriesPage() {
  const [categoriesWithSub, setCategoriesWithSub] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const navigate = useNavigate()
  const inputRef = useRef(null)

  useEffect(() => {
    const fetchCategoriesAndSubcategories = async () => {
      try {
        const { data: categories } = await axios.get("https://pincodeads.onrender.com/api/v1.0/categories")
        const categoryWithSubs = await Promise.all(
          categories.map(async (cat) => {
            const { data: subcategories } = await axios.get(
              `https://pincodeads.onrender.com/api/v1.0/subcategories?categoryId=${cat.id}`
            )
            return {
              ...cat,
              subcategories,
            }
          })
        )
        setCategoriesWithSub(categoryWithSubs)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchCategoriesAndSubcategories()
  }, [])

  // 🔍 Filter logic
  const filteredCategories = categoriesWithSub.filter((cat) => {
    const lowerSearch = searchTerm.toLowerCase()
    const categoryMatch = cat.name.toLowerCase().includes(lowerSearch)
    const subcategoryMatch = cat.subcategories.some((sub) =>
      sub.name.toLowerCase().includes(lowerSearch)
    )
    return categoryMatch || subcategoryMatch
  })

  // Autocomplete suggestions
  useEffect(() => {
    if (!searchTerm.trim()) {
      setSuggestions([])
      setShowSuggestions(false)
      return
    }
    const lowerSearch = searchTerm.toLowerCase()
    const catSuggestions = categoriesWithSub
      .filter(cat => cat.name.toLowerCase().includes(lowerSearch))
      .map(cat => ({ type: "category", name: cat.name }))
    const subSuggestions = categoriesWithSub
      .flatMap(cat => cat.subcategories.map(sub => ({
        type: "subcategory",
        name: sub.name
      })))
      .filter(sub => sub.name.toLowerCase().includes(lowerSearch))
    const allSuggestions = [...catSuggestions, ...subSuggestions].slice(0, 8)
    setSuggestions(allSuggestions)
    setShowSuggestions(allSuggestions.length > 0)
  }, [searchTerm, categoriesWithSub])

  // Handle click on category or subcategory
  const handleCategoryOrSubClick = async (type, value) => {
    setLoading(true)
    setShowSuggestions(false)
    try {
      let url = "https://pincodeads.onrender.com/api/v1.0/services/search?"
      if (type === "category") {
        url += `categoryName=${encodeURIComponent(value)}`
      } else if (type === "subcategory") {
        url += `subcategoryName=${encodeURIComponent(value)}`
      }
      const res = await axios.get(url)
      const results = res.data || []
      navigate(`/search?${type}Name=${encodeURIComponent(value)}`, { state: { results } })
    } catch (err) {
      navigate(`/search?${type}Name=${encodeURIComponent(value)}`, { state: { results: [] } })
    } finally {
      setLoading(false)
    }
  }

  // Handle search button click
  const handleSearch = async (e) => {
    e.preventDefault()
    if (!searchTerm.trim()) return
    // Try to match category or subcategory
    const lowerSearch = searchTerm.toLowerCase()
    const cat = categoriesWithSub.find(cat => cat.name.toLowerCase() === lowerSearch)
    if (cat) {
      handleCategoryOrSubClick("category", cat.name)
      return
    }
    const sub = categoriesWithSub
      .flatMap(cat => cat.subcategories)
      .find(sub => sub.name.toLowerCase() === lowerSearch)
    if (sub) {
      handleCategoryOrSubClick("subcategory", sub.name)
      return
    }
    // If not exact, but suggestions exist, use the first suggestion
    if (suggestions.length > 0) {
      handleCategoryOrSubClick(suggestions[0].type, suggestions[0].name)
      return
    }
    // Otherwise, do nothing or show a message
  }

  // Hide suggestions on blur (with delay for click)
  const handleBlur = () => setTimeout(() => setShowSuggestions(false), 100)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">All Categories</h2>

        {/* 🔍 Search Input with Autocomplete and Button */}
        <form className="mb-10 max-w-md mx-auto relative" onSubmit={handleSearch} autoComplete="off">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search categories or subcategories..."
            value={searchTerm}
            onChange={e => {
              setSearchTerm(e.target.value)
              setShowSuggestions(true)
            }}
            onFocus={() => setShowSuggestions(suggestions.length > 0)}
            onBlur={handleBlur}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1.5 rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            Search
          </button>
          {showSuggestions && (
            <ul className="absolute z-10 left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-56 overflow-y-auto">
              {suggestions.map((s, i) => (
                <li
                  key={s.type + s.name + i}
                  className="px-4 py-2 cursor-pointer hover:bg-indigo-50"
                  onMouseDown={() => {
                    setSearchTerm(s.name)
                    handleCategoryOrSubClick(s.type, s.name)
                  }}
                >
                  <span className="font-semibold text-indigo-600">{s.name}</span>
                  <span className="ml-2 text-xs text-gray-500">({s.type})</span>
                </li>
              ))}
            </ul>
          )}
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow hover:shadow-md transition cursor-pointer"
              onClick={() => handleCategoryOrSubClick("category", cat.name)}
            >
              <div className="flex items-center justify-center mb-3">
                <img src={cat.iconUrl} alt={cat.name} className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">
                {cat.name}
              </h3>

              {cat.subcategories.length > 0 ? (
                <ul className="text-sm text-gray-600 list-disc list-inside">
                  {cat.subcategories.map((sub) => (
                    <li
                      key={sub.id}
                      className="cursor-pointer hover:text-indigo-600"
                      onClick={e => {
                        e.stopPropagation()
                        handleCategoryOrSubClick("subcategory", sub.name)
                      }}
                    >
                      {sub.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-400 text-center">No subcategories</p>
              )}
            </div>
          ))}
        </div>

        {loading && (
          <div className="text-center text-indigo-600 font-semibold mt-4">Loading services...</div>
        )}

        {filteredCategories.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No matching results found.</p>
        )}
      </div>
    </section>
  )
}

export default CategoriesPage