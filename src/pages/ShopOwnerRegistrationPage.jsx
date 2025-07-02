// File: src/pages/ShopOwnerRegistrationPage.jsx
// import { useState, useRef, useEffect } from "react"
// import { useNavigate, Link } from "react-router-dom"
// import { ArrowLeft, Phone, UploadCloud } from "lucide-react"

// function ShopOwnerRegistrationPage() {
//   const navigate = useNavigate()
//   const fileInputRef = useRef()

//   const [form, setForm] = useState({
//     businessName: "",
//     address: "",
//     latitude: "",
//     longitude: "",
//     phoneSecondary: "",
//     profilePicture: null,
//   })

//   const [preview, setPreview] = useState(null)

//   // Fetch user location automatically on mount
//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setForm((f) => ({
//             ...f,
//             latitude: position.coords.latitude.toFixed(6),
//             longitude: position.coords.longitude.toFixed(6),
//           }))
//         },
//         (error) => {
//           console.warn("Geolocation error:", error.message)
//         }
//       )
//     } else {
//       console.warn("Geolocation not supported")
//     }
//   }, [])

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setForm((f) => ({ ...f, [name]: value }))
//   }

//   const handleFileChange = (e) => {
//     const file = e.target.files[0]
//     if (file) {
//       setForm((f) => ({ ...f, profilePicture: file }))
//       setPreview(URL.createObjectURL(file))
//     }
//   }

//  const handleSubmit = async (e) => {
//   e.preventDefault()

//   if (!form.businessName.trim()) {
//     alert("Business name is required.")
//     return
//   }
//   if (!form.address.trim()) {
//     alert("Address is required.")
//     return
//   }

//   const formData = new FormData()
//   formData.append("name", form.businessName)
//   formData.append("address", form.address)
//   formData.append("latitude", form.latitude)
//   formData.append("longitude", form.longitude)
//   formData.append("phoneNumber", form.phoneSecondary)

//   if (form.profilePicture) {
//     formData.append("profilePicture", form.profilePicture)
//   }

//   try {
//     const response = await fetch("https://pincodeads.onrender.com/api/businesses/register", {
//       method: "POST",
//       body: formData,
//     })

//     if (!response.ok) {
//       const errorData = await response.json()
//       console.error("Server error:", errorData)
//       alert("Failed to register business: " + (errorData.message || response.statusText))
//       return
//     }

//     const data = await response.json()
//     console.log("Server response:", data)
//     alert("Shop owner profile registered successfully!")
//     navigate("/")
//   } catch (err) {
//     console.error("Network error:", err)
//     alert("An error occurred. Please try again.")
//   }
// }


//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-6">
//       <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl p-10 relative">
//         <Link
//           to="/"
//           className="absolute top-6 left-6 text-indigo-600 hover:text-indigo-800 transition-colors"
//           aria-label="Go back"
//         >
//           <ArrowLeft className="w-6 h-6" />
//         </Link>

//         <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
//           Shop Owner Registration
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Business Name */}
//           <div>
//             <label htmlFor="businessName" className="block text-sm font-semibold text-gray-700 mb-2">
//               Business Name <span className="text-red-600">*</span>
//             </label>
//             <input
//               id="businessName"
//               name="businessName"
//               type="text"
//               value={form.businessName}
//               onChange={handleChange}
//               required
//               placeholder="Enter your business name"
//               className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//               autoComplete="organization"
//             />
//           </div>

//           {/* Address */}
//           <div>
//             <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
//               Address <span className="text-red-600">*</span>
//             </label>
//             <textarea
//               id="address"
//               name="address"
//               rows={3}
//               value={form.address}
//               onChange={handleChange}
//               required
//               placeholder="Enter full address"
//               className="w-full rounded-xl border border-gray-300 p-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//               autoComplete="street-address"
//             ></textarea>
//           </div>

//           {/* Latitude & Longitude */}
//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <label htmlFor="latitude" className="block text-sm font-semibold text-gray-700 mb-2">
//                 Latitude
//               </label>
//               <input
//                 id="latitude"
//                 name="latitude"
//                 type="text"
//                 value={form.latitude}
//                 onChange={handleChange}
//                 placeholder="e.g. 37.7749"
//                 className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//                 autoComplete="off"
//               />
//             </div>
//             <div>
//               <label htmlFor="longitude" className="block text-sm font-semibold text-gray-700 mb-2">
//                 Longitude
//               </label>
//               <input
//                 id="longitude"
//                 name="longitude"
//                 type="text"
//                 value={form.longitude}
//                 onChange={handleChange}
//                 placeholder="e.g. -122.4194"
//                 className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//                 autoComplete="off"
//               />
//             </div>
//           </div>

//           {/* Optional 2nd Number */}
//           <div>
//             <label htmlFor="phoneSecondary" className="block text-sm font-semibold text-gray-700 mb-2">
//               Optional 2nd Phone Number
//             </label>
//             <div className="relative">
//               <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <input
//                 id="phoneSecondary"
//                 name="phoneSecondary"
//                 type="tel"
//                 value={form.phoneSecondary}
//                 onChange={handleChange}
//                 placeholder="Enter secondary phone number"
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
//                 autoComplete="tel"
//               />
//             </div>
//           </div>

//           {/* Profile Picture */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Profile Picture
//             </label>
//             <div className="flex items-center space-x-4">
//               <button
//                 type="button"
//                 onClick={() => fileInputRef.current.click()}
//                 className="inline-flex items-center space-x-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 shadow-md transition-shadow"
//               >
//                 <UploadCloud className="w-5 h-5" />
//                 <span>Upload Picture</span>
//               </button>
//               {preview && (
//                 <img
//                   src={preview}
//                   alt="Profile preview"
//                   className="w-20 h-20 rounded-xl object-cover border"
//                 />
//               )}
//             </div>
//             <input
//               ref={fileInputRef}
//               type="file"
//               accept="image/*"
//               className="hidden"
//               onChange={handleFileChange}
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-shadow"
//           >
//             Complete Registration
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default ShopOwnerRegistrationPage













// // File: src/pages/ShopOwnerRegistrationPage.jsx
// import { useState, useRef, useEffect } from "react"
// import { useNavigate, Link } from "react-router-dom"
// import { ArrowLeft, Phone, UploadCloud } from "lucide-react"

// function ShopOwnerRegistrationPage() {
//   const navigate = useNavigate()
//   const fileInputRef = useRef()

//   const [form, setForm] = useState({
//     businessName: "",
//     address: "",
//     pincode: "",
//     city: "",
//     district: "",
//     state: "",
//     latitude: "",
//     longitude: "",
//     phoneSecondary: "",
//     profilePicture: null,
//   })

//   const [preview, setPreview] = useState(null)

//   // Fetch user geolocation automatically on mount
//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setForm((f) => ({
//             ...f,
//             latitude: position.coords.latitude.toFixed(6),
//             longitude: position.coords.longitude.toFixed(6),
//           }))
//           // Reverse geocode pincode, city, district, state from lat/lon
//           fetchCityData(position.coords.latitude, position.coords.longitude)
//         },
//         (error) => {
//           console.warn("Geolocation error:", error.message)
//         },
//         { enableHighAccuracy: true }
//       )
//     } else {
//       console.warn("Geolocation not supported")
//     }
//   }, [])

//   // Use a public reverse geocoding API to extract details (e.g. LocationIQ or OpenStreetMap Nominatim)
//   // Here using Nominatim OpenStreetMap as example (no API key required with usage limits)
//   async function fetchCityData(lat, lon) {
//     try {
//       const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1`
//       const res = await fetch(url)
//       if (!res.ok) throw new Error("Reverse geocoding failed")
//       const data = await res.json()
//       const addr = data.address || {}
//       setForm((f) => ({
//         ...f,
//         city: addr.city || addr.town || addr.village || "",
//         district: addr.county || "",
//         state: addr.state || "",
//         pincode: addr.postcode || "",
//       }))
//     } catch (err) {
//       console.warn("Reverse geocoding error:", err)
//     }
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setForm((f) => ({ ...f, [name]: value }))
//   }

//   const handleFileChange = (e) => {
//     const file = e.target.files[0]
//     if (file) {
//       setForm((f) => ({ ...f, profilePicture: file }))
//       setPreview(URL.createObjectURL(file))
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     // Basic validations
//     if (!form.businessName.trim()) {
//       alert("Business name is required.")
//       return
//     }
//     if (!form.address.trim()) {
//       alert("Address is required.")
//       return
//     }
//     if (!form.pincode.trim()) {
//       alert("Pincode is required.")
//       return
//     }
//     if (!form.city.trim()) {
//       alert("City is required.")
//       return
//     }
//     if (!form.state.trim()) {
//       alert("State is required.")
//       return
//     }

//     const formData = new FormData()
//     formData.append("name", form.businessName)
//     formData.append("address", form.address)
//     formData.append("latitude", form.latitude)
//     formData.append("longitude", form.longitude)
//     formData.append("pincode", form.pincode)
//     formData.append("city", form.city)
//     formData.append("district", form.district)
//     formData.append("state", form.state)
//     formData.append("phoneNumber", form.phoneSecondary)

//     if (form.profilePicture) {
//       formData.append("profilePicture", form.profilePicture)
//     }

//     try {
//       const response = await fetch("https://pincodeads.onrender.com/api/businesses/register", {
//         method: "POST",
//         body: formData,
//       })

//       if (!response.ok) {
//         const errorData = await response.json()
//         console.error("Server error:", errorData)
//         alert("Failed to register business: " + (errorData.message || response.statusText))
//         return
//       }

//       const data = await response.json()
//       console.log("Server response:", data)
//       alert("Shop owner profile registered successfully!")
//       navigate("/")
//     } catch (err) {
//       console.error("Network error:", err)
//       alert("An error occurred. Please try again.")
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-6">
//       <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl p-10 relative">
//         <Link
//           to="/"
//           className="absolute top-6 left-6 text-indigo-600 hover:text-indigo-800 transition-colors"
//           aria-label="Go back"
//         >
//           <ArrowLeft className="w-6 h-6" />
//         </Link>

//         <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
//           Shop Owner Registration
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Business Name */}
//           <div>
//             <label htmlFor="businessName" className="block text-sm font-semibold text-gray-700 mb-2">
//               Business Name <span className="text-red-600">*</span>
//             </label>
//             <input
//               id="businessName"
//               name="businessName"
//               type="text"
//               value={form.businessName}
//               onChange={handleChange}
//               required
//               placeholder="Enter your business name"
//               className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//               autoComplete="organization"
//             />
//           </div>

//           {/* Address */}
//           <div>
//             <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
//               Address <span className="text-red-600">*</span>
//             </label>
//             <textarea
//               id="address"
//               name="address"
//               rows={3}
//               value={form.address}
//               onChange={handleChange}
//               required
//               placeholder="Enter full address"
//               className="w-full rounded-xl border border-gray-300 p-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//               autoComplete="street-address"
//             />
//           </div>

//           {/* Pincode, City, District, State (displayed, editable) */}
//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <label htmlFor="pincode" className="block text-sm font-semibold text-gray-700 mb-2">
//                 Pincode <span className="text-red-600">*</span>
//               </label>
//               <input
//                 id="pincode"
//                 name="pincode"
//                 type="text"
//                 value={form.pincode}
//                 onChange={handleChange}
//                 placeholder="Pincode"
//                 required
//                 className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//                 autoComplete="postal-code"
//               />
//             </div>

//             <div>
//               <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
//                 City <span className="text-red-600">*</span>
//               </label>
//               <input
//                 id="city"
//                 name="city"
//                 type="text"
//                 value={form.city}
//                 onChange={handleChange}
//                 placeholder="City"
//                 required
//                 className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//                 autoComplete="address-level2"
//               />
//             </div>

//             <div>
//               <label htmlFor="district" className="block text-sm font-semibold text-gray-700 mb-2">
//                 District
//               </label>
//               <input
//                 id="district"
//                 name="district"
//                 type="text"
//                 value={form.district}
//                 onChange={handleChange}
//                 placeholder="District (optional)"
//                 className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//                 autoComplete="address-level3"
//               />
//             </div>

//             <div>
//               <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
//                 State <span className="text-red-600">*</span>
//               </label>
//               <input
//                 id="state"
//                 name="state"
//                 type="text"
//                 value={form.state}
//                 onChange={handleChange}
//                 placeholder="State"
//                 required
//                 className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//                 autoComplete="address-level1"
//               />
//             </div>
//           </div>

//           {/* Optional 2nd Number */}
//           <div>
//             <label htmlFor="phoneSecondary" className="block text-sm font-semibold text-gray-700 mb-2">
//               Optional 2nd Phone Number
//             </label>
//             <div className="relative">
//               <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <input
//                 id="phoneSecondary"
//                 name="phoneSecondary"
//                 type="tel"
//                 value={form.phoneSecondary}
//                 onChange={handleChange}
//                 placeholder="Enter secondary phone number"
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
//                 autoComplete="tel"
//               />
//             </div>
//           </div>

//           {/* Profile Picture */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Profile Picture
//             </label>
//             <div className="flex items-center space-x-4">
//               <button
//                 type="button"
//                 onClick={() => fileInputRef.current.click()}
//                 className="inline-flex items-center space-x-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 shadow-md transition-shadow"
//               >
//                 <UploadCloud className="w-5 h-5" />
//                 <span>Upload Picture</span>
//               </button>
//               {preview && (
//                 <img
//                   src={preview}
//                   alt="Profile preview"
//                   className="w-20 h-20 rounded-xl object-cover border"
//                 />
//               )}
//             </div>
//             <input
//               ref={fileInputRef}
//               type="file"
//               accept="image/*"
//               className="hidden"
//               onChange={handleFileChange}
//             />
//           </div>

//           {/* Hidden lat/lon fields to submit but not show */}
//           <input type="hidden" name="latitude" value={form.latitude} />
//           <input type="hidden" name="longitude" value={form.longitude} />

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-shadow"
//           >
//             Complete Registration
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default ShopOwnerRegistrationPage







// File: src/pages/ShopOwnerRegistrationPage.jsx
import { useState, useRef, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { ArrowLeft, Phone, UploadCloud } from "lucide-react"

function ShopOwnerRegistrationPage() {
  const navigate = useNavigate()
  const fileInputRef = useRef()

  const [form, setForm] = useState({
    businessName: "",
    address: "",
    pincode: "",
    city: "",
    district: "",
    state: "",
    latitude: "",
    longitude: "",
    phoneSecondary: "",
    profilePicture: null,
    email: "",
  })

  const [preview, setPreview] = useState(null)
  const [otp, setOtp] = useState("")
  const [isOtpPhase, setIsOtpPhase] = useState(false)
  const [isSendingOtp, setIsSendingOtp] = useState(false)
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false)

  // Fetch user geolocation automatically on mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setForm((f) => ({
            ...f,
            latitude: position.coords.latitude.toFixed(6),
            longitude: position.coords.longitude.toFixed(6),
          }))
          // Reverse geocode pincode, city, district, state from lat/lon
          fetchCityData(position.coords.latitude, position.coords.longitude)
        },
        (error) => {
          console.warn("Geolocation error:", error.message)
        },
        { enableHighAccuracy: true }
      )
    } else {
      console.warn("Geolocation not supported")
    }
  }, [])

  // Use OpenStreetMap Nominatim reverse geocoding
  async function fetchCityData(lat, lon) {
    try {
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1`
      const res = await fetch(url)
      if (!res.ok) throw new Error("Reverse geocoding failed")
      const data = await res.json()
      const addr = data.address || {}
      setForm((f) => ({
        ...f,
        city: addr.city || addr.town || addr.village || "",
        district: addr.county || "",
        state: addr.state || "",
        pincode: addr.postcode || "",
      }))
    } catch (err) {
      console.warn("Reverse geocoding error:", err)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setForm((f) => ({ ...f, profilePicture: file }))
      setPreview(URL.createObjectURL(file))
    }
  }

  // 1) On first submit, validate and send OTP to email
  const sendOtpToEmail = async (e) => {
    e.preventDefault()

    if (!form.email.trim()) {
      alert("Please enter a valid email address.")
      return
    }
    if (
      !form.businessName.trim() ||
      !form.address.trim() ||
      !form.pincode.trim() ||
      !form.city.trim() ||
      !form.state.trim()
    ) {
      alert("Please fill all required fields before continuing.")
      return
    }

    try {
      setIsSendingOtp(true)
      // Replace this with actual API to send OTP to the email
      // Here we simulate sending OTP successfully:
      await new Promise((res) => setTimeout(res, 1000))
      alert(`OTP has been sent to ${form.email.trim()}. Please check your email.`)
      setIsOtpPhase(true)
    } catch (err) {
      console.error("Failed to send OTP:", err)
      alert("Failed to send OTP. Please try again.")
    } finally {
      setIsSendingOtp(false)
    }
  }

  // 2) Verify OTP and on success, register the business
  const verifyOtpAndRegister = async (e) => {
    e.preventDefault()

    if (!otp.trim()) {
      alert("Please enter the OTP you received.")
      return
    }

    try {
      setIsVerifyingOtp(true)
      // Verify OTP with backend:
      const verifyResponse = await fetch("https://pincodeads.onrender.com/api/v1.0/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email.trim(),
          otp: otp.trim(),
        }),
      })

      if (!verifyResponse.ok) {
        const errData = await verifyResponse.json().catch(() => ({}))
        alert("OTP verification failed: " + (errData.message || verifyResponse.statusText))
        return
      }

      // If OTP verified, proceed with registration
      const formData = new FormData()
      formData.append("name", form.businessName)
      formData.append("address", form.address)
      formData.append("latitude", form.latitude)
      formData.append("longitude", form.longitude)
      formData.append("pincode", form.pincode)
      formData.append("city", form.city)
      formData.append("district", form.district)
      formData.append("state", form.state)
      formData.append("phoneNumber", form.phoneSecondary)
      formData.append("email", form.email.trim())

      if (form.profilePicture) {
        formData.append("profilePicture", form.profilePicture)
      }

      const registerResponse = await fetch("https://pincodeads.onrender.com/api/businesses/register", {
        method: "POST",
        body: formData,
      })

      if (!registerResponse.ok) {
        const errorData = await registerResponse.json().catch(() => ({}))
        alert("Failed to register business: " + (errorData.message || registerResponse.statusText))
        return
      }

      alert("Shop owner profile registered successfully!")
      window.location.href = "http://localhost:5173" // Redirect to shop owner dashboard
    } catch (err) {
      console.error("Network error:", err)
      alert("An error occurred. Please try again.")
    } finally {
      setIsVerifyingOtp(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl p-10 relative">
        <Link
          to="/"
          className="absolute top-6 left-6 text-indigo-600 hover:text-indigo-800 transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Shop Owner Registration
        </h1>

        <form onSubmit={isOtpPhase ? verifyOtpAndRegister : sendOtpToEmail} className="space-y-6">
          {/* Email - Required for OTP, shown only in registration phase */}
          {!isOtpPhase && (
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
                className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                autoComplete="email"
              />
            </div>
          )}

          {/* Show registration fields only if not OTP phase */}
          {!isOtpPhase && (
            <>
              {/* Business Name */}
              <div>
                <label htmlFor="businessName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Business Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  value={form.businessName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your business name"
                  className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  autoComplete="organization"
                />
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                  Address <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows={3}
                  value={form.address}
                  onChange={handleChange}
                  required
                  placeholder="Enter full address"
                  className="w-full rounded-xl border border-gray-300 p-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  autoComplete="street-address"
                />
              </div>

              {/* Pincode, City, District, State (displayed, editable) */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="pincode" className="block text-sm font-semibold text-gray-700 mb-2">
                    Pincode <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="pincode"
                    name="pincode"
                    type="text"
                    value={form.pincode}
                    onChange={handleChange}
                    placeholder="Pincode"
                    required
                    className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    autoComplete="postal-code"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                    City <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="City"
                    required
                    className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    autoComplete="address-level2"
                  />
                </div>

                <div>
                  <label htmlFor="district" className="block text-sm font-semibold text-gray-700 mb-2">
                    District
                  </label>
                  <input
                    id="district"
                    name="district"
                    type="text"
                    value={form.district}
                    onChange={handleChange}
                    placeholder="District (optional)"
                    className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    autoComplete="address-level3"
                  />
                </div>

                <div>
                  <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
                    State <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="state"
                    name="state"
                    type="text"
                    value={form.state}
                    onChange={handleChange}
                    placeholder="State"
                    required
                    className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    autoComplete="address-level1"
                  />
                </div>
              </div>

              {/* Optional 2nd Number */}
              <div>
                <label htmlFor="phoneSecondary" className="block text-sm font-semibold text-gray-700 mb-2">
                  Optional 2nd Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="phoneSecondary"
                    name="phoneSecondary"
                    type="tel"
                    value={form.phoneSecondary}
                    onChange={handleChange}
                    placeholder="Enter secondary phone number"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    autoComplete="tel"
                  />
                </div>
              </div>

              {/* Profile Picture */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Profile Picture
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                    className="inline-flex items-center space-x-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 shadow-md transition-shadow"
                  >
                    <UploadCloud className="w-5 h-5" />
                    <span>Upload Picture</span>
                  </button>
                  {preview && (
                    <img
                      src={preview}
                      alt="Profile preview"
                      className="w-20 h-20 rounded-xl object-cover border"
                    />
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>

              {/* Hidden lat/lon fields to submit but not show */}
              <input type="hidden" name="latitude" value={form.latitude} />
              <input type="hidden" name="longitude" value={form.longitude} />
            </>
          )}

          {/* If OTP phase, show OTP input */}
          {isOtpPhase && (
            <div>
              <label htmlFor="otp" className="block text-sm font-semibold text-gray-700 mb-2">
                Enter OTP sent to your email <span className="text-red-600">*</span>
              </label>
              <input
                id="otp"
                name="otp"
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                maxLength={6}
                placeholder="Enter OTP"
                className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                inputMode="numeric"
                autoComplete="one-time-code"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSendingOtp || isVerifyingOtp}
            className={`w-full ${
              isSendingOtp || isVerifyingOtp
                ? "bg-indigo-400 cursor-not-allowed"
                : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg"
            } text-white py-3 rounded-xl font-semibold transition-shadow`}
          >
            {isOtpPhase ? (isVerifyingOtp ? "Verifying OTP..." : "Verify OTP & Register") : isSendingOtp ? "Sending OTP..." : "Send OTP"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ShopOwnerRegistrationPage