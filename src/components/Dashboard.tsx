import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, Calendar, Users, MessageCircle, Clock, Bell, ChevronRight } from 'lucide-react';

interface Appointment {
  id: string;
  date: string;
  specialist: string;
  status: 'upcoming' | 'completed';
}

interface SupportGroup {
  id: string;
  name: string;
  description: string;
  nextMeeting: string;
  members: number;
  capacity: number;
}

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'appointments' | 'groups'>('overview');
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: '1',
      date: '2025-02-25 14:00',
      specialist: 'Dr. Sarah Johnson',
      status: 'upcoming'
    }
  ]);
  const [supportGroups, setSupportGroups] = useState<SupportGroup[]>([
    {
      id: '1',
      name: 'Anxiety Support Circle',
      description: 'A safe space for young adults dealing with anxiety',
      nextMeeting: '2025-02-26 16:00',
      members: 8,
      capacity: 12
    }
  ]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-xl font-semibold text-gray-900">MindForward Africa</span>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="h-5 w-5 text-gray-500 cursor-pointer hover:text-purple-600" />
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.user_metadata?.first_name || 'User'}</h1>
          <p className="mt-2 text-gray-600">Your mental health journey matters. How are you feeling today?</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-md ${
              activeTab === 'overview'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-600 hover:bg-purple-50'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('appointments')}
            className={`px-4 py-2 rounded-md ${
              activeTab === 'appointments'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-600 hover:bg-purple-50'
            }`}
          >
            Appointments
          </button>
          <button
            onClick={() => setActiveTab('groups')}
            className={`px-4 py-2 rounded-md ${
              activeTab === 'groups'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-600 hover:bg-purple-50'
            }`}
          >
            Support Groups
          </button>
        </div>

        {/* Content Sections */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Progress</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <Calendar className="h-6 w-6 text-purple-600 mb-2" />
                  <p className="text-sm text-gray-600">Next Session</p>
                  <p className="font-semibold">Tomorrow, 2:00 PM</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <Clock className="h-6 w-6 text-purple-600 mb-2" />
                  <p className="text-sm text-gray-600">Sessions Completed</p>
                  <p className="font-semibold">3 Sessions</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between px-4 py-3 bg-purple-50 rounded-lg hover:bg-purple-100">
                  <span className="flex items-center">
                    <Calendar className="h-5 w-5 text-purple-600 mr-3" />
                    <span>Schedule New Session</span>
                  </span>
                  <ChevronRight className="h-5 w-5 text-purple-600" />
                </button>
                <button className="w-full flex items-center justify-between px-4 py-3 bg-purple-50 rounded-lg hover:bg-purple-100">
                  <span className="flex items-center">
                    <Users className="h-5 w-5 text-purple-600 mr-3" />
                    <span>Join Support Group</span>
                  </span>
                  <ChevronRight className="h-5 w-5 text-purple-600" />
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'appointments' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Appointments</h2>
            <div className="space-y-4">
              {appointments.map(appointment => (
                <div key={appointment.id} className="flex items-center justify-between border-b border-gray-200 py-4">
                  <div>
                    <p className="font-semibold text-gray-900">{appointment.specialist}</p>
                    <p className="text-sm text-gray-600">
                      {new Date(appointment.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    appointment.status === 'upcoming' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {appointment.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'groups' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Support Groups</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supportGroups.map(group => (
                <div key={group.id} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900">{group.name}</h3>
                  <p className="text-sm text-gray-600 mt-2">{group.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      {group.members}/{group.capacity} members
                    </span>
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                      Join Group
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;