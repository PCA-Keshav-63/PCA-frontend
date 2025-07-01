function UserDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">User Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Recent Bookings</h3>
          <p className="text-gray-600">View your recent appointments</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Favorite Businesses</h3>
          <p className="text-gray-600">Your saved businesses</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Reviews</h3>
          <p className="text-gray-600">Manage your reviews</p>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard
