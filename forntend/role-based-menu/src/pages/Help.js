// src/pages/Help.js

import React from 'react';

const Help = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 flex items-center justify-center p-8">
      <div className="w-full max-w-5xl p-8 bg-white rounded-lg shadow-xl space-y-8">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center">Help & Support</h1>
        <p className="text-lg text-gray-600 text-center">
          Find answers to common questions or reach out for support.
        </p>

        {/* FAQ Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="font-semibold text-lg text-gray-700">How do I reset my password?</h3>
              <p className="text-sm text-gray-600 mt-2">
                You can reset your password by navigating to the settings page and clicking "Reset Password."
              </p>
            </div>
            <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="font-semibold text-lg text-gray-700">Where can I find my account details?</h3>
              <p className="text-sm text-gray-600 mt-2">
                Account details are available on the "Profile" page accessible from the dashboard menu.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="font-semibold text-lg text-gray-700">How can I contact support?</h3>
              <p className="text-sm text-gray-600 mt-2">
                You can contact support by filling out the form below or emailing us at support@example.com.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Support Form */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Contact Support</h2>
          <form className="mt-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                className="mt-2 p-4 w-full border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                className="mt-2 p-4 w-full border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Message</label>
              <textarea
                className="mt-2 p-4 w-full border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                rows="6"
                placeholder="Type your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Help;

