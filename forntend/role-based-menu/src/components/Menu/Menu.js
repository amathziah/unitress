import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { getMenu } from '../../api/api';

const Menu = ({ authToken, role }) => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const menuItems = await getMenu(authToken);
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
    <div className="flex">
      {/* Sidebar (Menu) */}
      <div className="w-64 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Menu</h2>

        {/* Displaying Role */}
        <div className="text-center text-lg text-gray-700 mb-4">
          <p><strong>Current Role: </strong>{role}</p>
        </div>

        <ul className="space-y-4">
          {menus.map((menu, index) => (
            <li key={index} className="hover:bg-gray-100 rounded-lg">
              <Link
                to={menu.path} // Use Link to navigate to the path
                className="block text-lg text-blue-600 font-medium px-4 py-2 hover:text-blue-800 transition-colors"
              >
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 bg-gray-100 rounded-lg shadow-lg ml-6">
        {/* Main content goes here */}
        <h1 className="text-3xl font-semibold text-gray-800">Dashboard Content</h1>
        {/* You can place additional content here */}
      </div>
    </div>
  );
};

export default Menu;


