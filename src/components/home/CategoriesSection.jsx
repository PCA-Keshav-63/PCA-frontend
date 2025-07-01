// import { CATEGORIES } from "../../constants/categories.js"

// function CategoriesSection() {
//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Explore
//             <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//               {" "}
//               Categories
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Discover amazing local services across various categories
//           </p>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-8 gap-6">
//           {CATEGORIES.map((category, index) => (
//             <div
//               key={index}
//               className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 cursor-pointer"
//             >
//               <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
//                 {category.icon}
//               </div>
//               <h3 className="font-bold text-gray-900 mb-2 text-lg">{category.name}</h3>
//               {/* <p className="text-indigo-600 font-semibold">{category.count}</p> */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default CategoriesSection
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function CategoriesSection() {
  const [allCategories, setAllCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("https://pincodeads.onrender.com/api/v1.0/categories")
      .then((res) => {
        const shuffled = res.data.sort(() => 0.5 - Math.random())
        setAllCategories(shuffled.slice(0, 15))
      })
      .catch((err) => console.error("Error fetching categories:", err))
  }, [])

  const handleCategoryClick = async (category) => {
    setLoading(true)
    try {
      // Fetch services for the selected category
      const res = await axios.get(
        `https://pincodeads.onrender.com/api/v1.0/services/search?categoryName=${encodeURIComponent(category.name)}`
      )
      const results = res.data || []
      // Navigate to search page with results
      navigate(`/search?categoryName=${encodeURIComponent(category.name)}`, { state: { results } })
    } catch (err) {
      console.error("Error fetching services for category:", err)
      navigate(`/search?categoryName=${encodeURIComponent(category.name)}`, { state: { results: [] } })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Categories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing local services across various categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-8 gap-6">
          {allCategories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category)}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl py-3 px-4 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 cursor-pointer"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={category.iconUrl || category.icon_url}
                  alt={category.name}
                  className="w-12 h-12 mx-auto object-contain"
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">{category.name}</h3>
            </div>
          ))}

          {/* Show More Card */}
          <div
            onClick={() => navigate("/categories")}
            className="group bg-gradient-to-br from-indigo-50 to-purple-100 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-indigo-200 cursor-pointer"
          >
            <div className="text-5xl mb-4 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
              +
            </div>
            <h3 className="font-bold text-indigo-700 mb-2 text-lg">Show More</h3>
          </div>
        </div>
        {/* {loading && (
          <div className="text-center mt-4 text-indigo-600 font-semibold">Loading services...</div>
        )} */}
      </div>
    </section>
  )
}

export default CategoriesSection