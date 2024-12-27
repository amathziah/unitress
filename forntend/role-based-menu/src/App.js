// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Menu from './components/Menu/Menu';
import Navbar from './pages/Navbar';
import Dashboard from './pages/Dashboard';
import UserManagement from './pages/UserManagement';
import RoleManagement from './pages/RoleManagement';
import Settings from './pages/Settings';
import Reports from './pages/Reports';
import Notifications from './pages/Notifications';
import Help from './pages/Help';
import ProjectOverview from './pages/ProjectOverview';
import TeamManagement from './pages/TeamManagement';
import TaskPage from './pages/TaskPage';
import Profile from './pages/Profile';

const App = () => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (authToken) {
      const decodedToken = JSON.parse(atob(authToken.split('.')[1]));
      console.log(decodedToken)
      setRole(decodedToken.role); // Set the user role from the token
    }
  }, [authToken]);

  if (!authToken) {
    return (
      <Router>
        <Routes>
          <Route path="*" element={<Login setAuthToken={setAuthToken} setRole={setRole} />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Navbar setAuthToken={setAuthToken} setRole={setRole} />

        <div className="flex mt-14">
          <div className="w-64 bg-gray-800 text-white fixed h-full">
            <Menu authToken={authToken} role={role} />
          </div>

          <div className="flex-1 ml-64 bg-gray-100">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/user-management" element={<UserManagement />} />
              <Route path="/role-management" element={<RoleManagement />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/help" element={<Help />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/team-management" element={<TeamManagement />} />
              <Route path="/project-overview" element={<ProjectOverview />} />
              <Route path='/my-tasks'element={<TaskPage/>} />
              <Route path='/profile'element={<Profile/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;



