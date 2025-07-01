import { useApp } from "../context/AppContext.jsx"
import UserProfile from "../components/profile/UserProfile.jsx"
import OwnerProfile from "../components/profile/OwnerProfile.jsx"
import AgentProfile from "../components/profile/AgentProfile.jsx"
import AdminProfile from "../components/profile/AdminProfile.jsx"

function ProfilePage() {
  const { state } = useApp()
  const { activeRole } = state

  const renderProfile = () => {
    switch (activeRole) {
      case "user":
        return <UserProfile />
      case "owner":
        return <OwnerProfile />
      case "agent":
        return <AgentProfile />
      case "admin":
        return <AdminProfile />
      default:
        return <UserProfile />
    }
  }

  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{renderProfile()}</div>
}

export default ProfilePage
