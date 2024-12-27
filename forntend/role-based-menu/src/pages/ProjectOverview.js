import React from "react";

const ProjectOverview = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 space-y-6">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-200">
            Project Overview
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Get insights into project details, milestones, and progress tracking.
          </p>
        </div>

        {/* Summary Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 bg-blue-500 text-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Active Tasks</h2>
            <p className="text-3xl font-bold mt-2">24</p>
          </div>
          <div className="p-4 bg-green-500 text-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Completed Milestones</h2>
            <p className="text-3xl font-bold mt-2">8</p>
          </div>
          <div className="p-4 bg-yellow-500 text-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Pending Reviews</h2>
            <p className="text-3xl font-bold mt-2">3</p>
          </div>
          <div className="p-4 bg-red-500 text-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Issues Reported</h2>
            <p className="text-3xl font-bold mt-2">5</p>
          </div>
        </div>

        {/* Milestones Section */}
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Milestones
          </h2>
          <ul className="mt-4 space-y-4">
            <li className="flex justify-between items-center">
              <span className="text-lg text-gray-700 dark:text-gray-300">
                Design Phase
              </span>
              <span className="px-3 py-1 text-sm bg-green-500 text-white rounded-lg">
                Completed
              </span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-lg text-gray-700 dark:text-gray-300">
                Development Phase
              </span>
              <span className="px-3 py-1 text-sm bg-yellow-500 text-white rounded-lg">
                In Progress
              </span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-lg text-gray-700 dark:text-gray-300">
                Testing Phase
              </span>
              <span className="px-3 py-1 text-sm bg-gray-500 text-white rounded-lg">
                Pending
              </span>
            </li>
          </ul>
        </div>

        {/* Progress Bar */}
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Project Progress
          </h2>
          <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-6 mt-4">
            <div
              className="bg-blue-500 h-6 rounded-full"
              style={{ width: "65%" }}
            ></div>
          </div>
          <p className="text-right text-sm text-gray-600 dark:text-gray-400 mt-2">
            65% completed
          </p>
        </div>

        {/* Chart Section (Placeholder) */}
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Performance Chart
          </h2>
          <div className="mt-4 h-64 flex items-center justify-center bg-gray-200 dark:bg-gray-600 rounded-lg">
            {/* Placeholder for chart */}
            <p className="text-gray-600 dark:text-gray-300">Chart Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;

