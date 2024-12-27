import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMenu } from '../../api/api';

const Menu = ({ authToken, role }) => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const menuItems = await getMenu(authToken);
        console.log(menuItems)       
        setMenus(menuItems);
      } catch (err) {
        console.error('Error fetching menus:', err);
      }
    };

    if (authToken) {
      fetchMenus();
    }
  }, [authToken]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-50 dark:bg-gray-800 fixed h-full shadow-lg">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 text-center">
            Menu
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            <strong>Current Role:</strong> {role}
          </p>
        </div>

        {/* Menu List */}
        <ul className="mt-4 space-y-2 px-4">
          {menus.map((menu, index) => (
            <li key={index}>
              <Link
                to={menu.path}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                {/* Replace with your desired icon */}
                <svg
                  className="h-6 w-6 text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7 2 2L3 12z"
                  />
                </svg>
                <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  {menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
