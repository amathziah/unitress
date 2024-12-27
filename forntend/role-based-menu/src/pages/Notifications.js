// src/pages/Notifications.js

import React, { useState } from "react";
import { FiTrash2, FiCheckCircle } from "react-icons/fi";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "System Update",
      message: "The system will undergo maintenance at 10:00 PM.",
      time: "5 mins ago",
    },
    {
      id: 2,
      title: "New Message",
      message: "You have received a new message from John Doe.",
      time: "15 mins ago",
    },
    {
      id: 3,
      title: "Profile Update",
      message: "Your profile details have been successfully updated.",
      time: "30 mins ago",
    },
  ]);

  const clearNotifications = () => {
    setNotifications([]);
  };

  const removeNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-gray-100 to-purple-100 flex items-center justify-center">
      <div className="w-full max-w-5xl p-8 bg-white rounded-lg shadow-xl space-y-8">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Notifications</h1>
          <p className="text-lg text-gray-600">
            Stay updated with the latest alerts and messages.
          </p>
        </div>

        {/* Notification List */}
        <div className="space-y-4">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-md hover:bg-gray-100 transition"
              >
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {notification.title}
                  </h2>
                  <p className="text-sm text-gray-600">{notification.message}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">{notification.time}</span>
                  <button
                    onClick={() => removeNotification(notification.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FiTrash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-600">
              <FiCheckCircle className="w-12 h-12 mx-auto text-green-500" />
              <p className="mt-2 text-lg">No notifications to show</p>
            </div>
          )}
        </div>

        {/* Clear All Notifications Button */}
        {notifications.length > 0 && (
          <div className="flex justify-end">
            <button
              onClick={clearNotifications}
              className="py-2 px-6 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition flex items-center space-x-2"
            >
              <FiTrash2 className="w-5 h-5" />
              <span>Clear All Notifications</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;

