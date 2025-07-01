// "use client"

// import { Search, MapPin } from "lucide-react"
// import { useApp } from "../../context/AppContext.jsx"

// function SearchHeader() {
//   const { state, dispatch } = useApp()
//   const { searchQuery, location } = state

//   const handleSearch = (e) => {
//     e.preventDefault()
//     console.log("Searching for:", searchQuery, "in", location)
//   }

//   return (
//     <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
//       <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
//         <div className="flex-1 relative">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//           <input
//             type="text"
//             placeholder="What are you looking for?"
//             value={searchQuery}
//             onChange={(e) => dispatch({ type: "SET_SEARCH_QUERY", payload: e.target.value })}
//             className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div className="flex-1 relative">
//           <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//           <input
//             type="text"
//             placeholder="Enter location"
//             value={location}
//             onChange={(e) => dispatch({ type: "SET_LOCATION", payload: e.target.value })}
//             className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
//         >
//           Search
//         </button>
//       </form>
//     </div>
//   )
// }

// export default SearchHeader
"use client"

import React, { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Search, MapPin } from "lucide-react"
import { useApp } from "../../context/AppContext.jsx"

function SearchHeader() {
  const { state, dispatch } = useApp()
  const { searchQuery, location } = state
  const navigate = useNavigate()

  // Suggestion state
  const [serviceSuggestions, setServiceSuggestions] = useState([])
  const [showServiceSuggestions, setShowServiceSuggestions] = useState(false)
  const [locationSuggestions, setLocationSuggestions] = useState([])
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false)

  const serviceInputRef = useRef(null)
  const locationInputRef = useRef(null)

  // Reverse geocode for location autofill
  const reverseGeocode = async (lat, lon) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
      )
      if (!res.ok) return null
      const data = await res.json()
      const address = data.address
      const pincode = address.postcode || ""
      const locationLabel =
        address.city ||
        address.town ||
        address.village ||
        address.county ||
        address.district ||
        address.state ||
        ""
      return { pincode, locationLabel }
    } catch {
      return null
    }
  }

  // Autofill location on mount
  useEffect(() => {
    if (!location) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords
            const result = await reverseGeocode(latitude, longitude)
            if (result) {
              const locValue = result.pincode || result.locationLabel || ""
              if (locValue) {
                dispatch({ type: "SET_LOCATION", payload: locValue })
              }
            }
          },
          (error) => {
            // Geolocation error
          },
          { timeout: 10000 }
        )
      }
    }
  }, [dispatch])

  // Helper: fetch and merge suggestions for multiple fields
  const fetchSuggestions = async (fields, value) => {
    const promises = fields.map(field =>
      fetch(`https://pincodeads.onrender.com/api/v1.0/services/autocomplete/${field}?query=${encodeURIComponent(value)}`)
        .then(res => (res.ok ? res.json() : []))
        .catch(() => [])
    )
    const results = await Promise.all(promises)
    return [...new Set(results.flat().filter(Boolean))]
  }

  // Service input handlers
  const handleServiceChange = async (e) => {
    const value = e.target.value
    dispatch({ type: "SET_SEARCH_QUERY", payload: value })
    if (value.length > 1) {
      const fields = ["title", "businessName", "categoryName", "subcategoryName", "keyword"]
      const suggestions = await fetchSuggestions(fields, value)
      setServiceSuggestions(suggestions)
      setShowServiceSuggestions(true)
    } else {
      setServiceSuggestions([])
      setShowServiceSuggestions(false)
    }
  }
  const handleServiceSuggestionClick = (suggestion) => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: suggestion })
    setShowServiceSuggestions(false)
    serviceInputRef.current.blur()
  }

  // Location input handlers
  const handleLocationChange = async (e) => {
    const value = e.target.value
    dispatch({ type: "SET_LOCATION", payload: value })
    if (value.length > 1) {
      const fields = ["address", "pincode", "district", "city"]
      const suggestions = await fetchSuggestions(fields, value)
      setLocationSuggestions(suggestions)
      setShowLocationSuggestions(true)
    } else {
      setLocationSuggestions([])
      setShowLocationSuggestions(false)
    }
  }
  const handleLocationSuggestionClick = (suggestion) => {
    dispatch({ type: "SET_LOCATION", payload: suggestion })
    setShowLocationSuggestions(false)
    locationInputRef.current.blur()
  }

  // Search logic
  const handleSearch = async (e) => {
    if (e) e.preventDefault()
    const params = new URLSearchParams()
    if (searchQuery?.trim()) params.append("q", searchQuery.trim())
    if (location?.trim()) {
      const pincodeRegex = /^\d{6}$/
      if (pincodeRegex.test(location.trim())) {
        params.append("pincode", location.trim())
      } else {
        params.append("city", location.trim())
      }
    }
    try {
      const res = await fetch(`https://pincodeads.onrender.com/api/v1.0/services/search?${params.toString()}`)
      const data = res.ok ? await res.json() : []
      navigate(`/search?${params.toString()}`, { state: { results: data } })
    } catch {
      navigate(`/search?${params.toString()}`, { state: { results: [] } })
    }
  }

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleSearch()
      setShowServiceSuggestions(false)
      setShowLocationSuggestions(false)
      serviceInputRef.current.blur()
      locationInputRef.current.blur()
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            ref={serviceInputRef}
            type="text"
            placeholder="What are you looking for?"
            value={searchQuery}
            onChange={handleServiceChange}
            onFocus={() => setShowServiceSuggestions(serviceSuggestions.length > 0)}
            onKeyDown={handleKeyDown}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoComplete="off"
          />
          {showServiceSuggestions && serviceSuggestions.length > 0 && (
            <ul className="absolute z-10 left-0 right-0 bg-white border rounded-lg mt-1 shadow-lg max-h-56 overflow-y-auto">
              {serviceSuggestions.map((s, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                  onClick={() => handleServiceSuggestionClick(s)}
                >
                  {s}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex-1 relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            ref={locationInputRef}
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={handleLocationChange}
            onFocus={() => setShowLocationSuggestions(locationSuggestions.length > 0)}
            onKeyDown={handleKeyDown}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoComplete="off"
          />
          {showLocationSuggestions && locationSuggestions.length > 0 && (
            <ul className="absolute z-10 left-0 right-0 bg-white border rounded-lg mt-1 shadow-lg max-h-56 overflow-y-auto">
              {locationSuggestions.map((s, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                  onClick={() => handleLocationSuggestionClick(s)}
                >
                  {s}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchHeader