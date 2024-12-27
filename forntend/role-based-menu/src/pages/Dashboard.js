// src/pages/Dashboard.js

import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-300 flex items-center justify-center">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-2xl space-y-6">
        <h1 className="text-4xl font-bold text-gray-900 text-center">Welcome to the Dashboard</h1>
        <p className="text-lg text-gray-600 text-center">
          Manage and monitor all activities from this central hub.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-blue-500 text-white rounded-lg shadow-lg p-6 hover:bg-blue-600 transition transform hover:scale-105">
            <h2 className="text-2xl font-semibold">Total Users</h2>
            <p className="text-lg mt-2">Total number of users in the system</p>
            <div className="mt-4 text-4xl font-bold">500</div>
          </div>

          {/* Card 2 */}
          <div className="bg-green-500 text-white rounded-lg shadow-lg p-6 hover:bg-green-600 transition transform hover:scale-105">
            <h2 className="text-2xl font-semibold">Active Sessions</h2>
            <p className="text-lg mt-2">Number of active sessions currently</p>
            <div className="mt-4 text-4xl font-bold">120</div>
          </div>

          {/* Card 3 */}
          <div className="bg-yellow-500 text-white rounded-lg shadow-lg p-6 hover:bg-yellow-600 transition transform hover:scale-105">
            <h2 className="text-2xl font-semibold">Notifications</h2>
            <p className="text-lg mt-2">Pending system notifications</p>
            <div className="mt-4 text-4xl font-bold">8</div>
          </div>
        </div>

        {/* Latest Activities */}
        <div className="mt-8">
          <h2 className="text-3xl font-semibold text-gray-900">Latest Activities</h2>
          <div className="bg-white shadow-2xl rounded-lg p-6 mt-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">User John Doe logged in</span>
              <span className="text-sm text-gray-500">10 minutes ago</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">System update completed</span>
              <span className="text-sm text-gray-500">30 minutes ago</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">New user registered</span>
              <span className="text-sm text-gray-500">1 hour ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

