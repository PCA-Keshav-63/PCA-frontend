import { createContext, useContext, useReducer } from "react"

const AppContext = createContext()

const initialState = {
  user: null,
  isAuthenticated: false,
  searchQuery: "",
  location: "",
  isMenuOpen: false,
  listings: [],
  categories: [],
  showAuthModal: false,
}

function appReducer(state, action) {
  switch (action.type) {
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload }
    case "SET_LOCATION":
      return { ...state, location: action.payload }
    case "TOGGLE_MENU":
      return { ...state, isMenuOpen: !state.isMenuOpen }
    case "SET_USER":
      return { ...state, user: action.payload, isAuthenticated: !!action.payload }
    case "SET_LISTINGS":
      return { ...state, listings: action.payload }
    case "SHOW_AUTH_MODAL":
      return { ...state, showAuthModal: true }
    case "HIDE_AUTH_MODAL":
      return { ...state, showAuthModal: false }
    case "LOGOUT":
      return { ...state, user: null, isAuthenticated: false }
    default:
      return state
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useApp must be used within an AppProvider")
  }
  return context
}
