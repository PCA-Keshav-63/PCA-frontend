function OwnerDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Business Owner Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">My Listings</h3>
          <p className="text-gray-600">Manage your business listings</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Bookings</h3>
          <p className="text-gray-600">View customer bookings</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Reviews</h3>
          <p className="text-gray-600">Respond to customer reviews</p>
        </div>
      </div>
    </div>
  )
}

export default OwnerDashboard
