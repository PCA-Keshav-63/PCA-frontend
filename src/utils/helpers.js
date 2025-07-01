import { User, Store, UserCheck, Settings } from "lucide-react"

export const getRoleIcon = (role) => {
  switch (role) {
    case "user":
      return User
    case "owner":
      return Store
    case "agent":
      return UserCheck
    case "admin":
      return Settings
    default:
      return User
  }
}

export const formatPhoneNumber = (phone) => {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
}

export const formatRating = (rating) => {
  return Number(rating).toFixed(1)
}

export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text
  return text.substr(0, maxLength) + "..."
}
