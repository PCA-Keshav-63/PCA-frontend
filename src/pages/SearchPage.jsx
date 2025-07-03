"use client"

import { useState } from "react"
import { useLocation } from "react-router-dom"
// import SearchFilters from "../components/search/SearchFilters.jsx"
import SearchResults from "../components/search/SearchResults.jsx"
import SearchHeader from "../components/search/SearchHeader.jsx"

function SearchPage() {
  const [filters, setFilters] = useState({
    category: "",
    rating: "",
    priceRange: "",
    distance: "",
    isOpen: false,
  })

  const location = useLocation()
  const results = location.state?.results || []

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SearchHeader />
      <div className="grid lg:grid-cols-0 gap-8">
        {/* <div className="lg:col-span-1">
          <SearchFilters filters={filters} setFilters={setFilters} />
        </div> */}
        <div className="lg:col-span-3">
          <SearchResults filters={filters} results={results} />
        </div>
      </div>
    </div>
  )
}

export default SearchPage