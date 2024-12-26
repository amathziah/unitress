// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes instead of Switch
import Login from './components/Auth/Login';
import Menu from './components/Menu/Menu';
import Dashboard from './pages/Dashboard';
import UserManagement from './pages/UserManagement';
import RoleManagement from './pages/RoleManagement';
import Settings from './pages/Settings';
import Reports from './pages/Reports';
import Notifications from './pages/Notifications';
import Help from './pages/Help';

const App = () => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (authToken) {
      const decodedToken = JSON.parse(atob(authToken.split('.')[1]));
      setRole(decodedToken.role); // Set the user role from the token
    }
  }, [authToken]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setAuthToken={setAuthToken} setRole={setRole} />} />
        <Route
          path="/menu"
          element={authToken ? <Menu authToken={authToken} role={role} /> : <Login setAuthToken={setAuthToken} setRole={setRole} />}
        />
        {/* Define routes for each page */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/role-management" element={<RoleManagement />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/help" element={<Help />} />
        <Route path="/" element={<h1>Welcome to the Dashboard</h1>} />
      </Routes>
    </Router>
  );
};

export default App;



