// src/components/Navbar/Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setAuthToken, setRole }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setAuthToken(null);
    setRole(null);
    navigate('/'); // Redirect to login page
  };

  return (
    <div className="bg-gray-800 text-white p-2 flex justify-between items-center fixed top-0 left-0 w-full z-10">
      <h1 className="text-lg">Dashboard</h1>
      <button 
        onClick={handleLogout} 
        className="bg-red-500 px-4 py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
