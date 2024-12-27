import React, { useState, useEffect } from 'react';

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      setTimeout(() => {
        setTasks([
          { id: 1, name: 'Task 1', status: 'In Progress' },
          { id: 2, name: 'Task 2', status: 'Completed' },
          { id: 3, name: 'Task 3', status: 'Not Started' },
        ]);
        setLoading(false);
      }, 1000);
    };

    fetchTasks();
  }, []);

  if (loading) {
    return (
      <div className="text-center p-5">
        <p>Loading tasks...</p>
      </div>
    );
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-5">Task Management</h1>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Task Name</th>
            <th className="px-4 py-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className="px-4 py-2 border">{task.name}</td>
              <td className="px-4 py-2 border">{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskPage;
