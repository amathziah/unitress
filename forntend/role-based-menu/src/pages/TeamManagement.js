import React from "react";

const TeamManagement = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br  from-blue-100 via-indigo-200 to-purple-300 p-8">
      <div className="max-w-7xl mx-auto bg-indigo-50 dark:bg-gray-800 rounded-lg shadow-xl p-6 space-y-6">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Team Management
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Manage your team members, assign roles, and track progress seamlessly.
          </p>
        </div>

        {/* Search and Add Member */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search team members..."
              className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            />
            <button className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition dark:bg-indigo-600 dark:hover:bg-indigo-700">
              Search
            </button>
          </div>
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition dark:bg-green-600 dark:hover:bg-green-700">
            Add New Member
          </button>
        </div>

        {/* Team Member List */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
            <thead className="bg-indigo-100 dark:bg-indigo-700">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Member ID</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Role</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Status</th>
                <th className="px-6 py-3 text-center text-sm font-medium text-gray-600 dark:text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Example Row */}
              <tr className="border-t border-gray-200 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-800 transition">
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">1</td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Alice Johnson</td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Project Manager</td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Active</td>
                <td className="px-6 py-4 text-center space-x-2">
                  <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition dark:bg-indigo-600 dark:hover:bg-indigo-700">
                    Edit
                  </button>
                  <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition dark:bg-red-600 dark:hover:bg-red-700">
                    Remove
                  </button>
                </td>
              </tr>
              {/* Additional rows */}
              <tr className="border-t border-gray-200 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-800 transition">
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">2</td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Bob Smith</td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Developer</td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Pending</td>
                <td className="px-6 py-4 text-center space-x-2">
                  <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition dark:bg-indigo-600 dark:hover:bg-indigo-700">
                    Edit
                  </button>
                  <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition dark:bg-red-600 dark:hover:bg-red-700">
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Showing 1 to 10 of 50 members
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
              Previous
            </button>
            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamManagement;


