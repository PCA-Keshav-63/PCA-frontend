"use client"
import React from "react"
import { useNavigate } from "react-router-dom"
import { AlertTriangle } from "lucide-react"

export default function Error404() {
  const navigate = useNavigate()

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden flex flex-col items-center justify-center p-8 text-center">
     
      {/* Background Pulsing Blurred Circles */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <AlertTriangle className="relative z-10 mx-auto mb-6 w-20 h-20 text-yellow-300 animate-pulse" aria-hidden="true" />
     
      <h1 className="relative z-10 text-6xl md:text-8xl font-extrabold text-white mb-4 leading-tight select-none">
        404
      </h1>

      <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text mb-6">
        Page Not Found
      </h2>

      <p className="relative z-10 text-lg md:text-xl text-indigo-200 max-w-xl mb-12 leading-relaxed">
        Sorry, the page you're looking for doesn't exist or has been moved.
        Try checking the URL or go back to the homepage.
      </p>

      <button
        type="button"
        onClick={() => navigate("/")}
        className="relative z-10 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-200 font-semibold text-lg focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-70"
      >
        Go to Homepage
      </button>
    </section>
  )
}