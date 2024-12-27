import React, { useState, useEffect } from 'react';

const UserManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    email: '',
    role: 'user', 
  });
  const [users, setUsers] = useState([]); 
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/user/users', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          },
        });
        const data = await response.json();
        console.log("hi",data)
        setUsers(data); // Set users to state
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
        body: JSON.stringify(newUser),
      });

      const data = await response.json();
      if (response.ok) {
        alert('User created successfully');
        setIsModalOpen(false);
        const updatedUsers = await fetch('http://localhost:5001/api/user/users', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          },
        }).then(res => res.json());
        console.log("hi",updatedUsers)
        setUsers(updatedUsers); 
      } else {
        alert(data.error || 'Error during registration');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while creating the user.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-purple-100 to-pink-100 flex items-center justify-center">
      <div className="w-full max-w-5xl p-8 bg-white rounded-lg shadow-xl space-y-6">
        <h1 className="text-4xl font-bold text-gray-900 text-center">Users from Newton school</h1>
        <p className="text-lg text-gray-600 text-center">
          Manage your users here and perform administrative tasks.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">User ID</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Email</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Role</th>
                <th className="px-6 py-3 text-center text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="px-6 py-4 text-sm text-gray-700">{user.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{user.username}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{user.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{user.role.name}</td>
                  <td className="px-6 py-4 text-center">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                      Edit
                    </button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition ml-2">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={toggleModal}
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Add New User
          </button>
          <div className="text-sm text-gray-600">Showing {users.length} users</div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-20">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold text-center mb-4">Add New User</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="username"
                    value={newUser.username}
                    onChange={handleChange}
                    placeholder="Username"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={newUser.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    value={newUser.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    required
                  />
                  <select
                    name="role"
                    value={newUser.role}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  >
                    <option value="user">User</option>
                    <option value="manager">Manager</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={toggleModal}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="ml-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                  >
                    Add User
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserManagement;

