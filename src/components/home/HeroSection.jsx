// "use client"
// import { useState, useRef } from "react"
// import { Search, MapPin, Sparkles } from "lucide-react"
// import { useApp } from "../../context/AppContext.jsx"

// function HeroSection() {
//   const { state, dispatch } = useApp()
//   const { searchQuery, location } = state

//   // Suggestions for service fields
//   const [serviceSuggestions, setServiceSuggestions] = useState([])
//   const [showServiceSuggestions, setShowServiceSuggestions] = useState(false)
//   // Suggestions for location fields
//   const [locationSuggestions, setLocationSuggestions] = useState([])
//   const [showLocationSuggestions, setShowLocationSuggestions] = useState(false)
//   const [searchResults, setSearchResults] = useState([])
//   const serviceInputRef = useRef(null)
//   const locationInputRef = useRef(null)

//   // Helper: fetch and merge suggestions for multiple fields
//   const fetchSuggestions = async (fields, value) => {
//     const promises = fields.map(field =>
//       fetch(`https://pincodeads.onrender.com/api/v1.0/services/autocomplete/${field}?query=${encodeURIComponent(value)}`)
//         .then(res => res.ok ? res.json() : [])
//         .catch(() => [])
//     )
//     const results = await Promise.all(promises)
//     // Flatten, deduplicate, and filter empty
//     return [...new Set(results.flat().filter(Boolean))]
//   }

//   // Autocomplete for service fields (title, businessName, categoryName, subcategoryName, keyword)
//   const handleServiceChange = async (e) => {
//     const value = e.target.value
//     dispatch({ type: "SET_SEARCH_QUERY", payload: value })

//     if (value.length > 1) {
//       const fields = ["title", "businessName", "categoryName", "subcategoryName", "keyword"]
//       const suggestions = await fetchSuggestions(fields, value)
//       setServiceSuggestions(suggestions)
//       setShowServiceSuggestions(true)
//     } else {
//       setServiceSuggestions([])
//       setShowServiceSuggestions(false)
//     }
//   }

//   const handleServiceSuggestionClick = (suggestion) => {
//     dispatch({ type: "SET_SEARCH_QUERY", payload: suggestion })
//     setShowServiceSuggestions(false)
//     serviceInputRef.current.blur()
//   }

//   // Autocomplete for location fields (address, pincode, district, city)
//   const handleLocationChange = async (e) => {
//     const value = e.target.value
//     dispatch({ type: "SET_LOCATION", payload: value })

//     if (value.length > 1) {
//       const fields = ["address", "pincode", "district", "city"]
//       const suggestions = await fetchSuggestions(fields, value)
//       setLocationSuggestions(suggestions)
//       setShowLocationSuggestions(true)
//     } else {
//       setLocationSuggestions([])
//       setShowLocationSuggestions(false)
//     }
//   }

//   const handleLocationSuggestionClick = (suggestion) => {
//     dispatch({ type: "SET_LOCATION", payload: suggestion })
//     setShowLocationSuggestions(false)
//     locationInputRef.current.blur()
//   }

//   // Search API call
//   const handleSearch = async (e) => {
//     e.preventDefault()
//     const params = new URLSearchParams()
//     if (searchQuery) params.append("title", searchQuery)
//     if (location) params.append("city", location)
//     // Optionally: add more params for advanced search

//     try {
//       const res = await fetch(`https://pincodeads.onrender.com/api/v1.0/services/search?${params.toString()}`)
//       const data = await res.json()
//       setSearchResults(data)
//     } catch (err) {
//       setSearchResults([])
//     }
//   }

//   return (
//     <section className="relative min-h-[90vh] bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
//         <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
//         <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
//         <div className="text-center">
//           {/* Badge */}
//           <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8">
//             <Sparkles className="w-5 h-5 text-yellow-300" />
//             <span className="text-white font-medium">Discover Amazing Local Businesses</span>
//           </div>

//           {/* Main Heading */}
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
//             Sabka Pincode
//             <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
//               Sabka Ads Zone
//             </span>
//           </h1>

//           <p className="text-xl md:text-2xl text-indigo-100 mb-12 max-w-3xl mx-auto leading-relaxed">
//             Connect with trusted local businesses, book services instantly, and discover hidden gems in your
//             neighborhood
//           </p>

//           {/* Search Form */}
//           <form onSubmit={handleSearch} className="max-w-4xl mx-auto mb-16">
//             <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-3 flex flex-col md:flex-row gap-3">
//               {/* Service input with autocomplete */}
//               <div className="flex-1 relative">
//                 <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   ref={serviceInputRef}
//                   type="text"
//                   placeholder="What service are you looking for?"
//                   value={searchQuery}
//                   onChange={handleServiceChange}
//                   onFocus={() => setShowServiceSuggestions(serviceSuggestions.length > 0)}
//                   className="w-full pl-12 pr-4 py-4 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent text-lg"
//                   autoComplete="off"
//                 />
//                 {showServiceSuggestions && serviceSuggestions.length > 0 && (
//                   <ul className="absolute z-10 left-0 right-0 bg-white border rounded-xl mt-1 shadow-lg max-h-56 overflow-y-auto">
//                     {serviceSuggestions.map((s, idx) => (
//                       <li
//                         key={idx}
//                         className="px-4 py-2 cursor-pointer hover:bg-indigo-100"
//                         onClick={() => handleServiceSuggestionClick(s)}
//                       >
//                         {s}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//               {/* Location input with autocomplete */}
//               <div className="flex-1 relative">
//                 <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   ref={locationInputRef}
//                   type="text"
//                   placeholder="Enter your location"
//                   value={location}
//                   onChange={handleLocationChange}
//                   onFocus={() => setShowLocationSuggestions(locationSuggestions.length > 0)}
//                   className="w-full pl-12 pr-4 py-4 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent text-lg"
//                   autoComplete="off"
//                 />
//                 {showLocationSuggestions && locationSuggestions.length > 0 && (
//                   <ul className="absolute z-10 left-0 right-0 bg-white border rounded-xl mt-1 shadow-lg max-h-56 overflow-y-auto">
//                     {locationSuggestions.map((s, idx) => (
//                       <li
//                         key={idx}
//                         className="px-4 py-2 cursor-pointer hover:bg-indigo-100"
//                         onClick={() => handleLocationSuggestionClick(s)}
//                       >
//                         {s}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//               <button
//                 type="submit"
//                 className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-200 font-semibold text-lg"
//               >
//                 Search Now
//               </button>
//             </div>
//           </form>

//           {/* Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
//             {[
//               { number: "50K+", label: "Trusted Businesses" },
//               { number: "200K+", label: "Happy Customers" },
//               { number: "1M+", label: "Successful Bookings" },
//               { number: "100+", label: "Cities Covered" },
//             ].map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
//                 <div className="text-indigo-200 font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>

//           {/* Example: Show search results */}
//           {searchResults.length > 0 && (
//             <div className="mt-10 bg-white/80 rounded-xl p-6 shadow-lg">
//               <h2 className="text-xl font-bold mb-4 text-gray-800">Search Results</h2>
//               <ul>
//                 {searchResults.map((result, idx) => (
//                   <li key={idx} className="py-2 border-b last:border-b-0 text-left">
//                     <span className="font-semibold">{result.title}</span>
//                     {result.city && <span className="ml-2 text-gray-500">({result.city})</span>}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//         </div>
//       </div>
//     </section>
//   )
// }

// export default HeroSection

"use client";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Sparkles, AlertTriangle, Clock } from "lucide-react";
import { useApp } from "../../context/AppContext.jsx";
import { toast } from "react-hot-toast";

export default function HeroSection() {
  const { state, dispatch } = useApp();
  const { searchQuery, location } = state;
  const serviceFields = [
    "title",
    "businessName",
    "categoryName",
    "subcategoryName",
    "keyword",
  ];
  const [searching, setSearching] = useState(false);
  const locationFields = ["address", "pincode", "district", "city"];

  const navigate = useNavigate();

  const [serverStatus, setServerStatus] = useState({
    isServerAvailable: true,
    isWakingUp: false,
    countdownTime: 180, // 3 minutes in seconds
  });
  const intervalRef = useRef(null);

  // Suggestions for service fields
  const [serviceSuggestions, setServiceSuggestions] = useState([]);
  const [showServiceSuggestions, setShowServiceSuggestions] = useState(false);
  // Suggestions for location fields
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const serviceInputRef = useRef(null);
  const locationInputRef = useRef(null);

  // Helper: fetch and merge suggestions for multiple fields
  const fetchWithTimeout = (url, options = {}, timeout = 10000) => {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error("timeout")), timeout);
      fetch(url, options)
        .then((res) => {
          clearTimeout(timer);
          resolve(res);
        })
        .catch((err) => {
          clearTimeout(timer);
          reject(err);
        });
    });
  };

  // Function to check server status
  const checkServerStatus = async () => {
    setServerStatus((prev) => ({ ...prev, isWakingUp: false }));
    try {
      const response = await fetchWithTimeout(
        "https://pincodeads.onrender.com/health",
        { method: "GET", headers: { "Cache-Control": "no-cache" } },
        5000 // 10 seconds timeout
      );
      console.log("Server status check response:", response);
      if (response.ok) {
        // Server is back
        setServerStatus((prev) => ({
          ...prev,
          isServerAvailable: true,
          isWakingUp: false,
          countdownTime: 180,
        }));
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        // toast.success("We are back!", { icon: "🎉" });
      } else {
        setServerStatus((prev) => ({
          ...prev,
          isServerAvailable: false,
          isWakingUp: false,
        }));
      }
    } catch (error) {
      // If timeout, show waking up
      setServerStatus((prev) => ({
        ...prev,
        isServerAvailable: false,
        isWakingUp: error.message === "timeout",
      }));
    }
  };

  // Countdown timer effect
  // Effect to check server status and handle countdown
  useEffect(() => {
    checkServerStatus();

    if (!serverStatus.isServerAvailable && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setServerStatus((prev) => {
          const newCountdown = prev.countdownTime - 1;
          if (newCountdown <= 0) {
            checkServerStatus();
            return { ...prev, countdownTime: 180 };
          }
          return { ...prev, countdownTime: newCountdown };
        });
      }, 1000);
    }

    // Cleanup interval on unmount or when server is back
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [serverStatus.isServerAvailable]);

  useEffect(() => {
    checkServerStatus();
    // eslint-disable-next-line
  }, []);
  // Format countdown time
  const formatCountdown = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  // Reverse geocode lat/lng to location string and pincode
  // Using OpenStreetMap Nominatim API for free geocoding
  const reverseGeocode = async (lat, lon) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
      );
      if (!res.ok) return null;
      const data = await res.json();
      const address = data.address;
      // Extract pincode (postal code)
      const pincode = address.postcode || "";
      // Extract a reasonable location label (city, town, village, district, state fallback)
      const locationLabel =
        address.city ||
        address.town ||
        address.village ||
        address.county ||
        address.district ||
        address.state ||
        "";
      return { pincode, locationLabel };
    } catch {
      return null;
    }
  };

  // On mount, get user location and reverse geocode it for pincode
  useEffect(() => {
    if (!location) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            const result = await reverseGeocode(latitude, longitude);
            if (result) {
              const locValue = result.pincode || result.locationLabel || "";
              if (locValue) {
                dispatch({ type: "SET_LOCATION", payload: locValue });
              }
            }
          },
          (error) => {
            console.warn("Geolocation error:", error.message);
          },
          { timeout: 10000 }
        );
      }
    }
  }, [dispatch]); // Only run once on mount

  // rest of your existing code unchanged...

  // Helper: fetch and merge suggestions for multiple fields
  const fetchSuggestions = async (fields, value) => {
    const promises = fields.map((field) =>
      fetch(
        `https://pincodeads.onrender.com/api/v1.0/services/autocomplete/${field}?query=${encodeURIComponent(
          value
        )}`
      )
        .then((res) => (res.ok ? res.json() : []))
        .catch(() => [])
    );
    const results = await Promise.all(promises);
    return [...new Set(results.flat().filter(Boolean))];
  };

  const handleServiceChange = async (e) => {
    const value = e.target.value;
    dispatch({ type: "SET_SEARCH_QUERY", payload: value });

    if (value.length > 1) {
      const fields = [
        "title",
        "businessName",
        "categoryName",
        "subcategoryName",
        "keyword",
      ];
      const suggestions = await fetchSuggestions(fields, value);
      setServiceSuggestions(suggestions);
      setShowServiceSuggestions(true);
    } else {
      setServiceSuggestions([]);
      setShowServiceSuggestions(false);
    }
  };

  const handleServiceSuggestionClick = (suggestion) => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: suggestion });
    setShowServiceSuggestions(false);
    serviceInputRef.current.blur();
  };

  const handleLocationChange = async (e) => {
    const value = e.target.value;
    dispatch({ type: "SET_LOCATION", payload: value });

    if (value.length > 1) {
      const fields = ["address", "pincode", "district", "city"];
      const suggestions = await fetchSuggestions(fields, value);
      setLocationSuggestions(suggestions);
      setShowLocationSuggestions(true);
    } else {
      setLocationSuggestions([]);
      setShowLocationSuggestions(false);
    }
  };

  const handleLocationSuggestionClick = (suggestion) => {
    dispatch({ type: "SET_LOCATION", payload: suggestion });
    setShowLocationSuggestions(false);
    locationInputRef.current.blur();
  };

  const handleSearch = async (e) => {
    if (e) e.preventDefault();
    setSearching(true);

    const params = new URLSearchParams();
    if (searchQuery?.trim()) params.append("q", searchQuery.trim());

    if (location?.trim()) {
      const pincodeRegex = /^\d{6}$/;
      if (pincodeRegex.test(location.trim())) {
        params.append("pincode", location.trim());
      } else {
        params.append("city", location.trim());
      }
    }

    try {
      const res = await fetch(
        `https://pincodeads.onrender.com/api/v1.0/services/search?${params.toString()}`
      );
      const data = res.ok ? await res.json() : [];
      navigate(`/search?${params.toString()}`, { state: { results: data } });
    } catch {
      navigate(`/search?${params.toString()}`, { state: { results: [] } });
    } finally {
      setSearching(false);
    }
  };

  // const handleSearch = async (e) => {
  //   if (e) e.preventDefault()

  //   // Collect values for all fields from state or form (adjust as needed)
  //   const fieldValues = {
  //     title: state.searchQuery?.trim(),
  //     businessName: state.searchQuery?.trim(),
  //     categoryName: state.searchQuery?.trim(),
  //     subcategoryName: state.searchQuery?.trim(),
  //     keyword: state.searchQuery?.trim(),
  //     address: state.location?.trim(),
  //     pincode: state.location?.trim(),
  //     district: state.location?.trim(),
  //     city: state.location?.trim(),
  //   }

  //   // Only include non-empty fields in the search
  //   const params = new URLSearchParams()
  //   Object.entries(fieldValues).forEach(([key, value]) => {
  //     if (value) params.append(key, value)
  //   })

  //   try {
  //     // Fetch results for each field, then merge and deduplicate
  //     const allFields = [...serviceFields, ...locationFields]
  //     const fetches = allFields
  //       .filter(field => fieldValues[field])
  //       .map(field =>
  //         fetch(`https://pincodeads.onrender.com/api/v1.0/services/search?${field}=${encodeURIComponent(fieldValues[field])}`)
  //           .then(res => (res.ok ? res.json() : []))
  //           .catch(() => [])
  //       )
  //     const resultsArrays = await Promise.all(fetches)
  //     // Flatten and deduplicate by id
  //     const allResults = resultsArrays.flat()
  //     const uniqueResults = Array.from(
  //       new Map(allResults.map(item => [item.id, item])).values()
  //     )
  //     navigate(`/search?${params.toString()}`, { state: { results: uniqueResults } })
  //   } catch {
  //     navigate(`/search?${params.toString()}`, { state: { results: [] } })
  //   }
  // }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
      setShowServiceSuggestions(false);
      setShowLocationSuggestions(false);
      serviceInputRef.current.blur();
      locationInputRef.current.blur();
    }
  };

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden p-8 text-center">
      {/* Server Maintenance Disclaimer */}
      {!serverStatus.isServerAvailable && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-yellow-500 text-white p-4 flex items-center justify-center">
          <AlertTriangle className="mr-3 w-6 h-6" />
          <span className="font-semibold mr-4">
            {serverStatus.isWakingUp
              ? "Server Under Maintenance, Please Wait..."
              : "Server Under Maintenance"}
          </span>
          <Clock className="mr-2 w-5 h-5" />
          <span className="font-bold">
            Estimated Restart: {formatCountdown(serverStatus.countdownTime)}
          </span>
        </div>
      )}

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-medium">
              Discover Amazing Local Businesses
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Sabka Pincode <br />
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Sabka Ad Zone
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-indigo-100 mb-12 leading-relaxed">
            Connect with trusted local businesses, book services instantly, and
            discover hidden gems in your neighborhood
          </p>

          <form onSubmit={handleSearch} className="mb-16">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-3 flex flex-col md:flex-row gap-3 max-w-full">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  ref={serviceInputRef}
                  type="text"
                  aria-label="Service search input"
                  placeholder="What service are you looking for?"
                  value={searchQuery}
                  onChange={handleServiceChange}
                  onFocus={() =>
                    setShowServiceSuggestions(serviceSuggestions.length > 0)
                  }
                  onKeyDown={handleKeyDown}
                  className="w-full pl-12 pr-4 py-4 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent text-lg"
                  autoComplete="off"
                />
                {showServiceSuggestions && serviceSuggestions.length > 0 && (
                  <ul className="absolute z-10 left-0 right-0 bg-white border rounded-xl mt-1 shadow-lg max-h-56 overflow-y-auto">
                    {serviceSuggestions.map((s, idx) => (
                      <li
                        key={idx}
                        className="px-4 py-2 cursor-pointer hover:bg-indigo-100"
                        onClick={() => handleServiceSuggestionClick(s)}
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  ref={locationInputRef}
                  type="text"
                  aria-label="Location search input"
                  placeholder="Enter your location"
                  value={location}
                  onChange={handleLocationChange}
                  onFocus={() =>
                    setShowLocationSuggestions(locationSuggestions.length > 0)
                  }
                  onKeyDown={handleKeyDown}
                  className="w-full pl-12 pr-4 py-4 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent text-lg"
                  autoComplete="off"
                />
                {showLocationSuggestions && locationSuggestions.length > 0 && (
                  <ul className="absolute z-10 left-0 right-0 bg-white border rounded-xl mt-1 shadow-lg max-h-56 overflow-y-auto">
                    {locationSuggestions.map((s, idx) => (
                      <li
                        key={idx}
                        className="px-4 py-2 cursor-pointer hover:bg-indigo-100"
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
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-4 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-200 font-semibold text-lg flex items-center justify-center gap-2"
                aria-label="Search"
                disabled={searching}
              >
                {searching && (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                )}
                {searching ? "Searching..." : "Search Now"}
              </button>
            </div>
          </form>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
            {[
              { number: "50K+", label: "Trusted Businesses" },
              { number: "200K+", label: "Happy Customers" },
              { number: "1M+", label: "Successful Bookings" },
              { number: "100+", label: "Cities Covered" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-indigo-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* {searchResults.length > 0 && (
            <div className="bg-white/80 rounded-xl p-6 shadow-lg max-w-4xl mx-auto text-left">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Search Results</h2>
              <ul>
                {searchResults.map((result, id) => (
                  <li key={idx} className="py-2 border-b last:border-b-0">
                    <span className="font-semibold">{result.title}</span>
                    {result.city && <span className="ml-2 text-gray-500">({result.city})</span>}
                  </li>
                ))}
              </ul>
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
}
