import { useApp } from "../context/AppContext.jsx"
import UserDashboard from "../components/dashboard/UserDashboard.jsx"
import OwnerDashboard from "../components/dashboard/OwnerDashboard.jsx"
import AgentDashboard from "../components/dashboard/AgentDashboard.jsx"
import AdminDashboard from "../components/dashboard/AdminDashboard.jsx"

function DashboardPage() {
  const { state } = useApp()
  const { activeRole } = state

  const renderDashboard = () => {
    switch (activeRole) {
      case "user":
        return <UserDashboard />
      case "owner":
        return <OwnerDashboard />
      case "agent":
        return <AgentDashboard />
      case "admin":
        return <AdminDashboard />
      default:
        return <UserDashboard />
    }
  }

  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{renderDashboard()}</div>
}

export default DashboardPage
