// src/pages/RoleManagement.js

import React from 'react';

const RoleManagement = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="w-full max-w-5xl p-8 bg-white rounded-lg shadow-xl space-y-6">
        <h1 className="text-4xl font-bold text-gray-900 text-center">Role Management</h1>
        <p className="text-lg text-gray-600 text-center">
          Manage user roles and their permissions effectively.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Role ID</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Role Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Permissions</th>
                <th className="px-6 py-3 text-center text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Example Role */}
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 text-sm text-gray-700">1</td>
                <td className="px-6 py-4 text-sm text-gray-700">Admin</td>
                <td className="px-6 py-4 text-sm text-gray-700">Full Access</td>
                <td className="px-6 py-4 text-center">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                    Edit
                  </button>
                  <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition ml-2">
                    Delete
                  </button>
                </td>
              </tr>
              {/* Additional roles can be added here */}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-6">
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
            Add New Role
          </button>
          <div className="text-sm text-gray-600">
            Showing 1 to 5 of 20 roles
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleManagement;
