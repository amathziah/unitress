// src/pages/Reports.js

import React from 'react';

const Reports = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 flex items-center justify-center">
      <div className="w-full max-w-6xl p-8 bg-white rounded-lg shadow-xl space-y-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center">Reports</h1>
        <p className="text-lg text-gray-600 text-center">
          Analyze and review system reports for insights.
        </p>

        {/* Report Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Report Card 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-100 transition">
            <h2 className="text-2xl font-semibold text-gray-800">User Reports</h2>
            <p className="text-sm text-gray-600 mt-2">
              Analyze user activity and engagement.
            </p>
            <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              View Report
            </button>
          </div>

          {/* Report Card 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-100 transition">
            <h2 className="text-2xl font-semibold text-gray-800">Revenue Reports</h2>
            <p className="text-sm text-gray-600 mt-2">
              Track revenue and sales performance.
            </p>
            <button className="mt-4 py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
              View Report
            </button>
          </div>

          {/* Report Card 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-100 transition">
            <h2 className="text-2xl font-semibold text-gray-800">System Logs</h2>
            <p className="text-sm text-gray-600 mt-2">
              Review detailed system activities and logs.
            </p>
            <button className="mt-4 py-2 px-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition">
              View Report
            </button>
          </div>
        </div>

        {/* Latest Reports */}
        <div className="mt-8">
          <h2 className="text-3xl font-semibold text-gray-900">Latest Reports</h2>
          <div className="bg-white shadow-lg rounded-lg p-6 mt-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">User Engagement Report</span>
              <span className="text-sm text-gray-500">Generated 10 minutes ago</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Revenue Summary</span>
              <span className="text-sm text-gray-500">Generated 30 minutes ago</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">System Activity Log</span>
              <span className="text-sm text-gray-500">Generated 1 hour ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;

