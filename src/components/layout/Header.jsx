// "use client"
// import { Link } from "react-router-dom"
// import { Menu, X, User, LogOut } from "lucide-react"
// import { useApp } from "../../context/AppContext.jsx"

// function Header() {
//   const { state, dispatch } = useApp()
//   const { isMenuOpen, isAuthenticated, user } = state

//   const toggleMenu = () => {
//     dispatch({ type: "TOGGLE_MENU" })
//   }

//   const handleLogout = () => {
//     dispatch({ type: "LOGOUT" })
//   }

//   const navigation = [
//     { name: "Home", path: "/" },
//     { name: "Search", path: "/search" },
//     { name: "Categories", path: "/categories" },
//     { name: "About", path: "/about" },
//   ]

//   return (
//     <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
//               <span className="text-white font-bold text-xl">P</span>
//             </div>
//             <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//               PincodeAds
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className="text-gray-700 hover:text-indigo-600 font-medium transition-all duration-200 hover:scale-105"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Auth Section */}
//           <div className="hidden md:flex items-center space-x-4">
//             {isAuthenticated ? (
//               <div className="flex items-center space-x-4">
//                 <Link
//                   to="/dashboard"
//                   className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition-colors"
//                 >
//                   <User className="w-5 h-5" />
//                   <span className="font-medium">{user?.name || "Dashboard"}</span>
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="flex items-center space-x-2 text-gray-500 hover:text-red-600 transition-colors"
//                 >
//                   <LogOut className="w-5 h-5" />
//                 </button>
//               </div>
//             ) : (
//               <div className="flex items-center space-x-3">
//                 <Link to="/login" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
//                   Sign In
//                 </Link>
//                 <Link
//                   to="/login"
//                   className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium"
//                 >
//                   Get Started
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Mobile menu button */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden p-2 rounded-lg text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
//           >
//             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
//           <div className="px-4 py-6 space-y-4">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className="block px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors"
//                 onClick={toggleMenu}
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <div className="pt-4 border-t border-gray-100">
//               {isAuthenticated ? (
//                 <div className="space-y-3">
//                   <Link
//                     to="/dashboard"
//                     className="block px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium"
//                     onClick={toggleMenu}
//                   >
//                     Dashboard
//                   </Link>
//                   <button
//                     onClick={() => {
//                       handleLogout()
//                       toggleMenu()
//                     }}
//                     className="block w-full text-left px-3 py-2 text-red-600 hover:text-red-700 font-medium"
//                   >
//                     Sign Out
//                   </button>
//                 </div>
//               ) : (
//                 <div className="space-y-3">
//                   <Link
//                     to="/login"
//                     className="block px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium"
//                     onClick={toggleMenu}
//                   >
//                     Sign In
//                   </Link>
//                   <Link
//                     to="/login"
//                     className="block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full text-center font-medium"
//                     onClick={toggleMenu}
//                   >
//                     Get Started
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   )
// }

// export default Header























"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, LogOut, ChevronDown } from "lucide-react";
import { useAuthStore } from "../../store/authStore";
import { useApp } from "../../context/AppContext.jsx";
import TranslateWidget from "../common/TranslateWidget"; // ✅ GTranslate component

function Header() {
  const { state, dispatch } = useApp();
  const { isMenuOpen } = state;
  const { user, isAuthenticated, checkAuth, logout } = useAuthStore();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const handleLogout = () => {
    logout();
    setIsProfileDropdownOpen(false);
  };

  const toggleMenu = () => {
    dispatch({ type: "TOGGLE_MENU" });
  };

  const iosLogoFix = {
    transform: "translateZ(0)",
    WebkitTransform: "translateZ(0)",
    WebkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",
  };

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Search", path: "/search" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact-us", number: "8452-81-3108" },
  ];

  return (
    <header
      className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100 will-change-transform"
      style={iosLogoFix}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-24 h-20 rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src="../../uppar.jpg"
                alt="PincodeAds Logo"
                className="w-full h-full object-contain max-w-none"
                style={{
                  imageRendering: "-webkit-optimize-contrast",
                  WebkitBackfaceVisibility: "hidden",
                  backfaceVisibility: "hidden",
                  ...iosLogoFix,
                }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="flex flex-col items-center">
                <Link
                  to={item.path}
                  className="text-gray-700 hover:text-indigo-600 font-medium transition-all duration-200 hover:scale-105"
                >
                  {item.name}
                </Link>
                {item.number && (
                  <span className="text-xs text-gray-500 mt-1">{item.number}</span>
                )}
              </div>
            ))}
          </nav>

          {/* Auth + Language for Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-md"
                >
                  <User className="w-5 h-5" />
                  <span className="font-medium">{user?.name || "Profile"}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isProfileDropdownOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {isProfileDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-10">
                    <Link
                      to="/user-profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setIsProfileDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/login"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium"
                >
                  Get Started
                </Link>
              </div>
            )}
            {/* ✅ GTranslate Language Widget */}
            <TranslateWidget />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg pb-4">
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <div key={item.name} className="flex flex-col">
                <Link
                  to={item.path}
                  className="block px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors rounded-md hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
                {item.number && (
                  <span className="text-xs text-gray-500 px-3 pb-2">{item.number}</span>
                )}
              </div>
            ))}

            <div className="pt-4 border-t border-gray-100">
              {isAuthenticated ? (
                <div className="space-y-3">
                  <Link
                    to="/user-profile"
                    className="block px-3 py-2 text-gray-700 hover:bg-gray-100 transition-colors rounded-md"
                    onClick={() => {
                      setIsProfileDropdownOpen(false);
                      toggleMenu();
                    }}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      toggleMenu();
                    }}
                    className="block w-full text-left px-3 py-2 text-red-600 hover:text-red-700 font-medium rounded-md hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <Link
                    to="/login"
                    className="block px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium rounded-md hover:bg-gray-50"
                    onClick={toggleMenu}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/login"
                    className="block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full text-center font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                    onClick={toggleMenu}
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>

            {/* ✅ Mobile Language Widget */}
            <div className="px-4 pt-2">
              <TranslateWidget />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
