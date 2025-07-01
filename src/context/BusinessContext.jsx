"use client"

import { createContext, useContext, useReducer } from "react"

const BusinessContext = createContext()

const initialState = {
  business: {
    id: "1",
    name: "Luxury Spa & Wellness",
    isRegistered: true,
    isPremium: false,
    category: "Beauty & Spa",
    rating: 4.6,
    totalReviews: 234,
    totalBookings: 1250,
    monthlyRevenue: 15000,
  },
  notifications: [
    { id: 1, message: "New booking from Sarah Johnson", time: "2 minutes ago", read: false },
    { id: 2, message: "Review received for Manicure service", time: "1 hour ago", read: false },
    { id: 3, message: "Payment received for booking #1234", time: "3 hours ago", read: true },
  ],
  listings: [
    {
      id: 1,
      name: "Premium Manicure",
      category: "Nail Care",
      price: 45,
      rating: 4.8,
      bookings: 156,
      status: "active",
    },
    {
      id: 2,
      name: "Relaxing Massage",
      category: "Massage",
      price: 80,
      rating: 4.7,
      bookings: 203,
      status: "active",
    },
    {
      id: 3,
      name: "Facial Treatment",
      category: "Skincare",
      price: 65,
      rating: 4.5,
      bookings: 98,
      status: "active",
    },
  ],
  bookings: [],
  reviews: [],
}

function businessReducer(state, action) {
  switch (action.type) {
    case "SET_BUSINESS":
      return { ...state, business: action.payload }
    case "ADD_NOTIFICATION":
      return {
        ...state,
        notifications: [action.payload, ...state.notifications],
      }
    case "MARK_NOTIFICATION_READ":
      return {
        ...state,
        notifications: state.notifications.map((notif) =>
          notif.id === action.payload ? { ...notif, read: true } : notif,
        ),
      }
    case "ADD_LISTING":
      return {
        ...state,
        listings: [...state.listings, action.payload],
      }
    case "UPDATE_LISTING":
      return {
        ...state,
        listings: state.listings.map((listing) =>
          listing.id === action.payload.id ? { ...listing, ...action.payload } : listing,
        ),
      }
    case "DELETE_LISTING":
      return {
        ...state,
        listings: state.listings.filter((listing) => listing.id !== action.payload),
      }
    case "UPGRADE_TO_PREMIUM":
      return {
        ...state,
        business: { ...state.business, isPremium: true },
      }
    default:
      return state
  }
}

export function BusinessProvider({ children }) {
  const [state, dispatch] = useReducer(businessReducer, initialState)

  return <BusinessContext.Provider value={{ state, dispatch }}>{children}</BusinessContext.Provider>
}

export function useBusiness() {
  const context = useContext(BusinessContext)
  if (!context) {
    throw new Error("useBusiness must be used within a BusinessProvider")
  }
  return context
}
