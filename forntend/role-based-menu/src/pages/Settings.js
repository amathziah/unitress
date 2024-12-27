// src/pages/Settings.js

import React from 'react';

const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-indigo-50 to-purple-100 flex items-center justify-center">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-xl space-y-6">
        <h1 className="text-4xl font-bold text-gray-900 text-center">System Settings</h1>
        <p className="text-lg text-gray-600 text-center">
          Configure and update your system settings below.
        </p>

        {/* Settings Options */}
        <div className="space-y-6">
          {/* General Settings */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">General Settings</h2>
            <p className="text-sm text-gray-600 mt-2">Manage basic system preferences.</p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Enable Notifications</span>
                <input type="checkbox" className="h-5 w-5 text-indigo-600" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Allow User Registrations</span>
                <input type="checkbox" className="h-5 w-5 text-indigo-600" />
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">Security Settings</h2>
            <p className="text-sm text-gray-600 mt-2">Ensure the system is secure.</p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Two-Factor Authentication</span>
                <input type="checkbox" className="h-5 w-5 text-indigo-600" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Require Strong Passwords</span>
                <input type="checkbox" className="h-5 w-5 text-indigo-600" />
              </div>
            </div>
          </div>

          {/* Advanced Settings */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">Advanced Settings</h2>
            <p className="text-sm text-gray-600 mt-2">Modify system configurations.</p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Debug Mode</span>
                <input type="checkbox" className="h-5 w-5 text-indigo-600" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Enable API Access</span>
                <input type="checkbox" className="h-5 w-5 text-indigo-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="text-center mt-6">
          <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;

