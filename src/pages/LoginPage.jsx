// "use client"

// import { useState } from "react"
// import { Link } from "react-router-dom"
// import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight, Sparkles } from "lucide-react"
// import { useApp } from "../context/AppContext.jsx"

// function LoginPage() {
//   const [isLogin, setIsLogin] = useState(true)
//   const [showPassword, setShowPassword] = useState(false)
//   const [userType, setUserType] = useState("customer")
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   })
//   const { dispatch } = useApp()

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (!isLogin && formData.password !== formData.confirmPassword) {
//       alert("Passwords don't match!")
//       return
//     }

//     // Simulate login/signup
//     const userData = {
//       name: formData.name || "User",
//       email: formData.email,
//       type: userType,
//     }

//     dispatch({ type: "SET_USER", payload: userData })

//     // Redirect based on user type
//     if (userType === "business") {
//       window.location.href = "/shopowner-registration"
//     } else {
//       window.location.href = "/"
//     }
//   }

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
//       </div>

//       <div className="relative max-w-md w-full">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <Link to="/" className="inline-flex items-center space-x-2 mb-6">
//             <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
//               <span className="text-indigo-600 font-bold text-xl">P</span>
//             </div>
//             <span className="text-2xl font-bold text-white">PincodeAds</span>
//           </Link>

//           <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6">
//             <Sparkles className="w-4 h-4 text-yellow-300" />
//             <span className="text-white text-sm font-medium">{isLogin ? "Welcome Back!" : "Join Our Community"}</span>
//           </div>

//           <h2 className="text-3xl font-bold text-white mb-2">{isLogin ? "Sign In" : "Create Account"}</h2>
//           <p className="text-indigo-200">
//             {isLogin ? "Access your account and continue your journey" : "Start discovering amazing local services"}
//           </p>
//         </div>

//         {/* Form Card */}
//         <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8">
//           {/* User Type Selector */}
//           {!isLogin && (
//             <div className="mb-6">
//               <label className="block text-sm font-semibold text-gray-700 mb-3">I am a:</label>
//               <div className="grid grid-cols-2 gap-3">
//                 <button
//                   type="button"
//                   onClick={() => setUserType("customer")}
//                   className={`p-3 rounded-xl border-2 transition-all duration-200 ${
//                     userType === "customer"
//                       ? "border-indigo-500 bg-indigo-50 text-indigo-700"
//                       : "border-gray-200 hover:border-gray-300"
//                   }`}
//                 >
//                   <User className="w-5 h-5 mx-auto mb-1" />
//                   <span className="text-sm font-medium">Customer</span>
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setUserType("business")}
//                   className={`p-3 rounded-xl border-2 transition-all duration-200 ${
//                     userType === "business"
//                       ? "border-indigo-500 bg-indigo-50 text-indigo-700"
//                       : "border-gray-200 hover:border-gray-300"
//                   }`}
//                 >
//                   <div className="w-5 h-5 mx-auto mb-1 bg-current rounded"></div>
//                   <span className="text-sm font-medium">Business</span>
//                 </button>
//               </div>
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Name Field (Signup only) */}
//             {!isLogin && (
//               <div>
//                 <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
//                   Full Name
//                 </label>
//                 <div className="relative">
//                   <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   <input
//                     id="name"
//                     name="name"
//                     type="text"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
//                     placeholder="Enter your full name"
//                   />
//                 </div>
//               </div>
//             )}

//             {/* Email Field */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
//                   placeholder="Enter your email"
//                 />
//               </div>
//             </div>

//             {/* Phone Field (Signup only) */}
//             {!isLogin && (
//               <div>
//                 <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
//                   Phone Number
//                 </label>
//                 <div className="relative">
//                   <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   <input
//                     id="phone"
//                     name="phone"
//                     type="tel"
//                     required
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
//                     placeholder="Enter your phone number"
//                   />
//                 </div>
//               </div>
//             )}

//             {/* Password Field */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   required
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
//                   placeholder="Enter your password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                 >
//                   {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                 </button>
//               </div>
//             </div>

//             {/* Confirm Password Field (Signup only) */}
//             {!isLogin && (
//               <div>
//                 <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
//                   Confirm Password
//                 </label>
//                 <div className="relative">
//                   <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   <input
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     type={showPassword ? "text" : "password"}
//                     required
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
//                     placeholder="Confirm your password"
//                   />
//                 </div>
//               </div>
//             )}

//             {/* Remember Me / Forgot Password */}
//             {isLogin && (
//               <div className="flex items-center justify-between">
//                 <label className="flex items-center">
//                   <input
//                     type="checkbox"
//                     className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                   />
//                   <span className="ml-2 text-sm text-gray-700">Remember me</span>
//                 </label>
//                 <a href="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-500 font-medium">
//                   Forgot password?
//                 </a>
//               </div>
//             )}

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="group w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
//             >
//               <span>{isLogin ? "Sign In" : "Create Account"}</span>
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//           </form>

//           {/* Toggle Form */}
//           <div className="mt-6 text-center">
//             <p className="text-gray-600">
//               {isLogin ? "Don't have an account?" : "Already have an account?"}
//               <button
//                 onClick={() => setIsLogin(!isLogin)}
//                 className="ml-2 text-indigo-600 hover:text-indigo-500 font-semibold"
//               >
//                 {isLogin ? "Sign Up" : "Sign In"}
//               </button>
//             </p>
//           </div>

//           {/* Social Login */}
//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300" />
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">Or continue with</span>
//               </div>
//             </div>

//             <div className="mt-6 grid grid-cols-2 gap-3">
//               <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
//                 <span>Google</span>
//               </button>
//               <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
//                 <span>Facebook</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LoginPage














// "use client";

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight, Sparkles } from "lucide-react";
// import { useAuthStore } from "../store/authStore"; // Import your auth store

// function LoginPage() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);
//   const [userType, setUserType] = useState("customer");
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });

//   // Get methods and user state from authStore
//   const { login, register, isLoading, error, user } = useAuthStore();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!isLogin && formData.password !== formData.confirmPassword) {
//       alert("Passwords don't match!");
//       return;
//     }

//     try {
//       if (isLogin) {
//         // Sign in user through authStore
//         await login(formData.email, formData.password);
//       } else {
//         // Register user through authStore 
//         await register({
//           name: formData.name,
//           email: formData.email,
//           password: formData.password,
//           role: userType === "business" ? "BUSINESS" : "USER",
//         });
//       }

//       // Redirect based on user type if no errors from backend
//       if (userType === "business") {
//         window.location.href = "/shopowner-registration";
//       } else {
//         window.location.href = "/";
//       }
//     } catch (err) {
//       // Errors handled in authStore, optionally can handle here as well
//       console.error("Auth failed", err);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
//       </div>

//       <div className="relative max-w-md w-full">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <Link to="/" className="inline-flex items-center space-x-2 mb-6">
//             <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
//               <span className="text-indigo-600 font-bold text-xl">P</span>
//             </div>
//             <span className="text-2xl font-bold text-white">PincodeAds</span>
//           </Link>

//           <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6">
//             <Sparkles className="w-4 h-4 text-yellow-300" />
//             <span className="text-white text-sm font-medium">{isLogin ? "Welcome Back!" : "Join Our Community"}</span>
//           </div>

//           <h2 className="text-3xl font-bold text-white mb-2">{isLogin ? "Sign In" : "Create Account"}</h2>
//           <p className="text-indigo-200">
//             {isLogin ? "Access your account and continue your journey" : "Start discovering amazing local services"}
//           </p>
//         </div>

//         {/* Form Card */}
//         <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8">
//           {/* User Type Selector */}
//           {!isLogin && (
//             <div className="mb-6">
//               <label className="block text-sm font-semibold text-gray-700 mb-3">I am a:</label>
//               <div className="grid grid-cols-2 gap-3">
//                 <button
//                   type="button"
//                   onClick={() => setUserType("customer")}
//                   className={`p-3 rounded-xl border-2 transition-all duration-200 ${
//                     userType === "customer"
//                       ? "border-indigo-500 bg-indigo-50 text-indigo-700"
//                       : "border-gray-200 hover:border-gray-300"
//                   }`}
//                 >
//                   <User className="w-5 h-5 mx-auto mb-1" />
//                   <span className="text-sm font-medium">Customer</span>
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setUserType("business")}
//                   className={`p-3 rounded-xl border-2 transition-all duration-200 ${
//                     userType === "business"
//                       ? "border-indigo-500 bg-indigo-50 text-indigo-700"
//                       : "border-gray-200 hover:border-gray-300"
//                   }`}
//                 >
//                   <div className="w-5 h-5 mx-auto mb-1 bg-current rounded"></div>
//                   <span className="text-sm font-medium">Business</span>
//                 </button>
//               </div>
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Name Field (Signup only) */}
//             {!isLogin && (
//               <div>
//                 <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
//                   Full Name
//                 </label>
//                 <div className="relative">
//                   <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   <input
//                     id="name"
//                     name="name"
//                     type="text"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
//                     placeholder="Enter your full name"
//                     disabled={isLoading}
//                   />
//                 </div>
//               </div>
//             )}

//             {/* Email Field */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
//                   placeholder="Enter your email"
//                   disabled={isLoading}
//                 />
//               </div>
//             </div>

//             {/* Phone Field (Signup only) */}
//             {!isLogin && (
//               <div>
//                 <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
//                   Phone Number
//                 </label>
//                 <div className="relative">
//                   <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   <input
//                     id="phone"
//                     name="phone"
//                     type="tel"
//                     required
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
//                     placeholder="Enter your phone number"
//                     disabled={isLoading}
//                   />
//                 </div>
//               </div>
//             )}

//             {/* Password Field */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   required
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
//                   placeholder="Enter your password"
//                   disabled={isLoading}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                   disabled={isLoading}
//                 >
//                   {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                 </button>
//               </div>
//             </div>

//             {/* Confirm Password Field (Signup only) */}
//             {!isLogin && (
//               <div>
//                 <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
//                   Confirm Password
//                 </label>
//                 <div className="relative">
//                   <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   <input
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     type={showPassword ? "text" : "password"}
//                     required
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
//                     placeholder="Confirm your password"
//                     disabled={isLoading}
//                   />
//                 </div>
//               </div>
//             )}

//             {/* Remember Me / Forgot Password */}
//             {isLogin && (
//               <div className="flex items-center justify-between">
//                 <label className="flex items-center">
//                   <input
//                     type="checkbox"
//                     className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                     disabled={isLoading}
//                   />
//                   <span className="ml-2 text-sm text-gray-700">Remember me</span>
//                 </label>
//                 <a href="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-500 font-medium">
//                   Forgot password?
//                 </a>
//               </div>
//             )}

//             {/* Show Error if any */}
//             {error && <p className="text-red-600 text-sm text-center">{error}</p>}

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="group w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               <span>{isLogin ? "Sign In" : "Create Account"}</span>
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//           </form>

//           {/* Toggle Form */}
//           <div className="mt-6 text-center">
//             <p className="text-gray-600">
//               {isLogin ? "Don't have an account?" : "Already have an account?"}
//               <button
//                 onClick={() => setIsLogin(!isLogin)}
//                 className="ml-2 text-indigo-600 hover:text-indigo-500 font-semibold"
//                 disabled={isLoading}
//               >
//                 {isLogin ? "Sign Up" : "Sign In"}
//               </button>
//             </p>
//           </div>

//           {/* Social Login */}
//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300" />
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">Or continue with</span>
//               </div>
//             </div>

//             <div className="mt-6 grid grid-cols-2 gap-3">
//               <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
//                 <span>Google</span>
//               </button>
//               <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
//                 <span>Facebook</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;







"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Sparkles, Phone } from "lucide-react";
import { useAuthStore } from "../store/authStore";

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoding, setIsLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userType, setUserType] = useState("customer");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    password: "",
    confirmPassword: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    password: [],
    confirmPassword: null,
    phone_number: null,
  });

  // OTP state
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpError, setOtpError] = useState(null);
  const [otpVerified, setOtpVerified] = useState(false);

  // Zustand store
  const {
    login,
    register,
    sendEmailOtp,
    verifyEmailOtp,
    isLoading,
    error,
  } = useAuthStore();

  // Password validation rules
  const passwordCriteria = [
    { test: (p) => p.length >= 8, message: "At least 8 characters long" },
    { test: (p) => /[a-z]/.test(p), message: "At least one lowercase letter" },
    { test: (p) => /[A-Z]/.test(p), message: "At least one uppercase letter" },
    { test: (p) => /[0-9]/.test(p), message: "At least one number" },
    { test: (p) => /[!@#$%^&*]/.test(p), message: "At least one special character (!@#$%^&*)" },
  ];

  // Validation functions
  const validatePassword = (password) => {
    const errors = passwordCriteria.filter((c) => !c.test(password)).map((c) => c.message);
    setValidationErrors((prev) => ({ ...prev, password: errors }));
    return errors.length === 0;
  };
  const validateConfirmPassword = (password, confirmPassword) => {
    const error = password !== confirmPassword ? "Passwords do not match" : null;
    setValidationErrors((prev) => ({ ...prev, confirmPassword: error }));
    return !error;
  };
  const validatephoneNumber = (phone_number) => {
    const digitsOnly = phone_number.replace(/\D/g, "");
    const error = digitsOnly.length !== 10 ? "Phone Number number must be exactly 10 digits" : null;
    setValidationErrors((prev) => ({ ...prev, phone_number: error }));
    return !error;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Live validation
    if (name === "password") {
      validatePassword(value);
      validateConfirmPassword(value, formData.confirmPassword);
    } else if (name === "confirmPassword") {
      validateConfirmPassword(formData.password, value);
    } else if (name === "phoneNumber") {
      validatephoneNumber(value);
    }
  };

  // Handle OTP input
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
    setOtpError(null);
  };

  // Registration + send OTP using store
  const handleRegister = async () => {
    const isPasswordValid = validatePassword(formData.password);
    const isConfirmPasswordValid = validateConfirmPassword(formData.password, formData.confirmPassword);
    const isphoneNumberValid = validatephoneNumber(formData.phone_number);

    if (!isPasswordValid || !isConfirmPasswordValid || !isphoneNumberValid) return;

    try {
      // Call register from authStore
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: userType === "business" ? "BUSINESS" : "USER",
        phone_number: formData.phone_number,
      });

      // Send OTP using authStore and pass email
      await sendEmailOtp(formData.email);

      setOtpSent(true);
      return true;
    } catch (err) {
      // error is handled by Zustand store
      return false;
    }
  };


  // OTP verification using store
  const handleOtpVerify = async () => {
    if (!otp || otp.length === 0) {
      setOtpError("Please enter the OTP");
      return;
    }
    setOtpError(null);
    try {
      await verifyEmailOtp({ email: formData.email, otp });
      setOtpVerified(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    } catch (err) {
      setOtpError(err.message || "OTP verification failed");
    }
  };

  // Main submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      try {
        await login(formData.email, formData.password);
        window.location.href = "/";
      } catch (err) {
        // error handled in store
      }
      return;
    }

    if (!otpSent) {
      await handleRegister();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
              <span className="text-indigo-600 font-bold text-xl">P</span>
            </div>
            <span className="text-2xl font-bold text-white">PincodeAds</span>
          </Link>

          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-white text-sm font-medium">
              {isLogin ? "Welcome Back!" : otpSent ? "Enter OTP" : "Join Our Community"}
            </span>
          </div>

          <h2 className="text-3xl font-bold text-white mb-2">
            {isLogin ? "Sign In" : otpSent ? "Verify OTP" : "Create Account"}
          </h2>
          <p className="text-indigo-200">
            {isLogin
              ? "Access your account and continue your journey"
              : otpSent
                ? `An OTP has been sent to ${formData.email}. Please enter it below.`
                : "Start discovering amazing local services"}
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8">
          {/* User Type Selector */}
          {!isLogin && !otpSent && (
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">I am a:</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setUserType("customer")}
                  className={`p-3 rounded-xl border-2 transition-all duration-200 ${userType === "customer"
                      ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                      : "border-gray-200 hover:border-gray-300"
                    }`}
                >
                  <User className="w-5 h-5 mx-auto mb-1" />
                  <span className="text-sm font-medium">Customer</span>
                </button>
                <button
                  type="button"
                  onClick={() => setUserType("business")}
                  className={`p-3 rounded-xl border-2 transition-all duration-200 ${userType === "business"
                      ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                      : "border-gray-200 hover:border-gray-300"
                    }`}
                >
                  <div className="w-5 h-5 mx-auto mb-1 bg-current rounded"></div>
                  <span className="text-sm font-medium">Business</span>
                </button>
              </div>
            </div>
          )}

          {/* Registration/Login Form */}
          {!otpSent && (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name Field (Signup only) */}
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                      disabled={isLoading}
                    />
                  </div>
                </div>
              )}

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* phoneNumber Field (Signup only) */}
              {!isLogin && (
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone No.
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      required
                      inputMode="numeric"
                      pattern="\d{10}"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:border-transparent ${validationErrors.phoneNumber
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:ring-indigo-500"
                        }`}
                      placeholder="Enter your Phone No."
                      disabled={isLoading}
                      maxLength={14}
                    />
                  </div>
                  {validationErrors.phone_number && (
                    <p className="mt-1 text-sm text-red-600 font-semibold">{validationErrors.phone_number}</p>
                  )}
                </div>
              )}

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-12 py-3 border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:border-transparent ${validationErrors.password.length > 0
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-indigo-500"
                      }`}
                    placeholder="Enter your password"
                    disabled={isLoading}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    disabled={isLoading}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {/* Password criteria */}
                {!isLogin && validationErrors.password.length > 0 && (
                  <ul className="mt-2 ml-2 list-disc text-sm space-y-0.5 max-w-md">
                    {passwordCriteria.map(({ message }) => {
                      const met = !validationErrors.password.includes(message);
                      return (
                        <li
                          key={message}
                          className={`transition-colors ${met ? "text-green-600" : "text-red-600 font-semibold"
                            }`}
                        >
                          {met ? "✔" : "✘"} {message}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>

              {/* Confirm Password Field (Signup only) */}
              {!isLogin && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-12 py-3 border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:border-transparent ${validationErrors.confirmPassword
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:ring-indigo-500"
                        }`}
                      placeholder="Confirm your password"
                      disabled={isLoading}
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      disabled={isLoading}
                      aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {validationErrors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600 font-semibold">{validationErrors.confirmPassword}</p>
                  )}
                </div>
              )}

              {/* Remember Me / Forgot Password */}
              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      disabled={isLoading}
                    />
                    <span className="ml-2 text-sm text-gray-700">Remember me</span>
                  </label>
                  <a href="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-500 font-medium">
                    Forgot password?
                  </a>
                </div>
              )}

              {/* Show Error if any */}
              {error && <p className="text-red-600 text-sm text-center">{error}</p>}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="group w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isLogin ? "Sign In" : "Create Account"}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}

          {/* OTP input form after registration */}
          {otpSent && !otpVerified && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Verify Your Email</h3>
                <p className="text-gray-600 text-sm">
                  Enter the 6-digit code sent to {formData.email}
                </p>
              </div>

              <div className="flex justify-center space-x-2">
                {[...Array(6)].map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    pattern="\d{1}"
                    inputMode="numeric"
                    value={otp[index] || ''}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^\d*$/.test(value)) {
                        const newOtp = otp.split('');
                        newOtp[index] = value;
                        setOtp(newOtp.join(''));

                        // Auto focus to next input
                        if (value && index < 5) {
                          const nextInput = document.getElementById(`otp-${index + 1}`);
                          if (nextInput) nextInput.focus();
                        }
                      }
                    }}
                    onKeyDown={(e) => {
                      // Allow backspace to delete and move to previous input
                      if (e.key === 'Backspace' && !e.target.value && index > 0) {
                        const prevInput = document.getElementById(`otp-${index - 1}`);
                        if (prevInput) {
                          prevInput.focus();
                          const newOtp = otp.split('');
                          newOtp[index - 1] = '';
                          setOtp(newOtp.join(''));
                        }
                      }
                    }}
                    id={`otp-${index}`}
                    className={`w-12 h-16 text-center text-2xl font-bold border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${otpError
                        ? 'border-red-500 focus:ring-red-500 bg-red-50'
                        : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
                      }`}
                  />
                ))}
              </div>

              {otpError && (
                <p className="text-center text-sm text-red-600 mt-4 font-semibold">
                  {otpError}
                </p>
              )}

              <div className="text-center mt-6 text-sm text-gray-700">
                Didn't receive the code?{" "}
                <button
                  onClick={async () => {
                    try {
                      await sendEmailOtp(formData.email);
                      // Optional: Add a success toast or message
                    } catch (err) {
                      setOtpError("Failed to resend OTP");
                    }
                  }}
                  className="text-indigo-600 hover:text-indigo-500 font-semibold"
                  disabled={isLoading}
                >
                  Resend OTP
                </button>
              </div>

              <button
                onClick={handleOtpVerify}
                disabled={otp.length !== 6 || isLoading}
                className={`w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-semibold flex items-center justify-center space-x-2 ${otp.length !== 6 || isLoading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
              >
                <span>Verify OTP</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
          {/* {otpSent && !otpVerified && (
            <div className="space-y-6">
              <div>
                <label htmlFor="otp" className="block text-sm font-semibold text-gray-700 mb-2">
                  Enter OTP
                </label>
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  inputMode="numeric"
                  value={otp}
                  onChange={handleOtpChange}
                  placeholder="Enter the OTP sent to your email"
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${
                    otpError ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-indigo-500"
                  }`}
                  disabled={isLoading}
                />
                {otpError && <p className="mt-1 text-sm text-red-600 font-semibold">{otpError}</p>}
              </div>

              {error && <p className="text-red-600 text-sm text-center">{error}</p>}

              <button
                onClick={handleOtpVerify}
                disabled={isLoading}
                className="group w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Verify OTP</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="text-center mt-4 text-sm text-gray-700">
                Didn't receive OTP?{" "}
                <button
                  onClick={async () => {
                    try {
                      await sendEmailOtp();
                    } catch (err) {
                      setOtpError("Failed to resend OTP");
                    }
                  }}
                  className="text-indigo-600 hover:text-indigo-500 font-semibold"
                  disabled={isLoading}
                >
                  Resend OTP
                </button>
              </div>
            </div>
          )} */}

          {/* OTP verified message */}
          {otpVerified && (
            <div className="text-center text-green-600 font-semibold">
              <p>OTP verified successfully! Redirecting...</p>
            </div>
          )}

          {/* Toggle Form */}
          {!otpSent && (
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setOtpSent(false);
                    setOtp("");
                    setOtpError(null);
                    setValidationErrors({ password: [], confirmPassword: null, phoneNumber: null });
                    setFormData({ name: "", email: "", phoneNumber: "", password: "", confirmPassword: "" });
                    setOtpVerified(false);
                  }}
                  className="ml-2 text-indigo-600 hover:text-indigo-500 font-semibold"
                  disabled={isLoading}
                >
                  {isLogin ? "Sign Up" : "Sign In"}
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;