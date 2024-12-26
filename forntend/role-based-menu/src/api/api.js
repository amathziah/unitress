// src/api/api.js

import axios from 'axios';

// API base URL
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

// Login API call
export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { username, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

// Get Menu API call
export const getMenu = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/menu/menus`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.menus;
  } catch (error) {
    throw new Error('Failed to fetch menus');
  }
};
