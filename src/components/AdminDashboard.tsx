import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, Users, Group, PlusCircle } from 'lucide-react';

interface UserProfile {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  role: 'user' | 'admin';
}

const AdminDashboard = () => {
  const { userProfile, logout, getAllUsers, createSupportGroup } = useAuth();
  const navigate = useNavigate();
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [activeTab, setActiveTab] = useState<'users' | 'groups'>('users');
  const [newGroupForm, setNewGroupForm] = useState({
    name: '',
    description: '',
    capacity: 10,
    nextMeeting: ''
  });

  useEffect(() => {
    if (userProfile?.role !== 'admin') {
      navigate('/dashboard');
    } else {
      fetchUsers();
    }
  }, [userProfile]);

  const fetchUsers = async () => {
    try {
      const fetchedUsers = await getAllUsers();
      setUsers(fetchedUsers);
    } catch (error) {
      console.error('Failed to fetch users', error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  const handleCreateGroup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createSupportGroup({
        name: newGroupForm.name,
        description: newGroupForm.description,
        capacity: newGroupForm.capacity,
        nextMeeting: newGroupForm.nextMeeting
      });
      // Reset form and show success message
      setNewGroupForm({
        name: '',
        description: '',
        capacity: 10,
        nextMeeting: ''
      });
      alert('Support group created successfully!');
    } catch (error) {
      console.error('Failed to create support group', error);
      alert('Failed to create support group');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-xl font-semibold text-gray-900">MindForward Africa - Admin</span>
            </div>
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('users')}
            className={`px-4 py-2 rounded-md ${
              activeTab === 'users'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-600 hover:bg-purple-50'
            }`}
          >
            <Users className="h-5 w-5 mr-2 inline" /> Users
          </button>
          <button
            onClick={() => setActiveTab('groups')}
            className={`px-4 py-2 rounded-md ${
              activeTab === 'groups'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-600 hover:bg-purple-50'
            }`}
          >
            <Group className="h-5 w-5 mr-2 inline" /> Support Groups
          </button>
        </div>

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">User Management</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">ID</th>
                  <th className="text-left p-3">First Name</th>
                  <th className="text-left p-3">Last Name</th>
                  <th className="text-left p-3">Email</th>
                  <th className="text-left p-3">Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">{user.id}</td>
                    <td className="p-3">{user.first_name}</td>
                    <td className="p-3">{user.last_name}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        user.role === 'admin' 
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Support Groups Tab */}
        {activeTab === 'groups' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Group Creation Form */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                <PlusCircle className="h-6 w-6 mr-2 inline text-purple-600" />
                Create Support Group
              </h2>
              <form onSubmit={handleCreateGroup} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Group Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={newGroupForm.name}
                    onChange={(e) => setNewGroupForm(prev => ({...prev, name: e.target.value}))}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    id="description"
                    required
                    value={newGroupForm.description}
                    onChange={(e) => setNewGroupForm(prev => ({...prev, description: e.target.value}))}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="capacity" className="block text-sm font-medium text-gray-700">
                    Group Capacity
                  </label>
                  <input
                    id="capacity"
                    type="number"
                    required
                    value={newGroupForm.capacity}
                    onChange={(e) => setNewGroupForm(prev => ({...prev, capacity: parseInt(e.target.value)}))}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="nextMeeting" className="block text-sm font-medium text-gray-700">
                    Next Meeting Date
                  </label>
                  <input
                    id="nextMeeting"
                    type="datetime-local"
                    required
                    value={newGroupForm.nextMeeting}
                    onChange={(e) => setNewGroupForm(prev => ({...prev, nextMeeting: e.target.value}))}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
                >
                  Create Support Group
                </button>
              </form>
            </div>

            {/* Existing Support Groups */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Existing Support Groups</h2>
              {/* This would be populated from your database in a real implementation */}
              <p className="text-gray-600">No support groups available yet.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
