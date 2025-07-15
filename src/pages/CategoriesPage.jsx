import { useEffect, useState, useRef } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function CategoriesPage() {
  const [categoriesWithSub, setCategoriesWithSub] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [verifiedBusinesses, setVerifiedBusinesses] = useState([])
  const [sortOrder, setSortOrder] = useState("asc") // NEW
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
              subcategories: subcategories.sort((a, b) => a.name.localeCompare(b.name)),
            }
          })
        )
        setCategoriesWithSub(categoryWithSubs)
      } catch (error) {
        console.error("Error fetching categories or subcategories:", error)
      }
    }

    const fetchVerifiedBusinesses = async () => {
      try {
        const { data } = await axios.get("https://pincodeads.onrender.com/api/v1.0/businesses")
        setVerifiedBusinesses(data || [])
      } catch (error) {
        console.error("Error fetching verified businesses:", error)
      }
    }

    fetchCategoriesAndSubcategories()
    fetchVerifiedBusinesses()
  }, [])

  const sortedCategories = [...categoriesWithSub]
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    )

  const filteredCategories = sortedCategories.filter((cat) => {
    const lowerSearch = searchTerm.toLowerCase()
    const categoryMatch = cat.name.toLowerCase().includes(lowerSearch)
    const subcategoryMatch = cat.subcategories.some((sub) =>
      sub.name.toLowerCase().includes(lowerSearch)
    )
    return categoryMatch || subcategoryMatch
  })

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

  const isBusinessVerified = (businessName) => {
    return verifiedBusinesses.some(
      (biz) => biz.name?.toLowerCase() === businessName?.toLowerCase()
    )
  }

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
      const results = (res.data || []).map(service => ({
        ...service,
        verified: isBusinessVerified(service.businessName || service.name)
      }))
      navigate(`/search?${type}Name=${encodeURIComponent(value)}`, { state: { results } })
    } catch (err) {
      navigate(`/search?${type}Name=${encodeURIComponent(value)}`, { state: { results: [] } })
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!searchTerm.trim()) return
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
    if (suggestions.length > 0) {
      handleCategoryOrSubClick(suggestions[0].type, suggestions[0].name)
      return
    }
  }

  const handleBlur = () => setTimeout(() => setShowSuggestions(false), 100)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">All Categories</h2>

        {/* 🔍 Search + Sort */}
        <form className="mb-10 max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-center relative" onSubmit={handleSearch} autoComplete="off">
          <div className="relative w-full sm:w-[70%]">
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
          </div>

          {/* 🔽 Dropdown for sorting */}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="asc">Sort: A–Z (Ascending)</option>
            <option value="desc">Sort: Z–A (Descending)</option>
          </select>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            Search
          </button>
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