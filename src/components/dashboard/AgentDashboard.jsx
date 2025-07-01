function AgentDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Agent Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Add Listings</h3>
          <p className="text-gray-600">Add new business listings</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Verify Listings</h3>
          <p className="text-gray-600">Verify business information</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Area Reports</h3>
          <p className="text-gray-600">Generate area reports</p>
        </div>
      </div>
    </div>
  )
}

export default AgentDashboard
