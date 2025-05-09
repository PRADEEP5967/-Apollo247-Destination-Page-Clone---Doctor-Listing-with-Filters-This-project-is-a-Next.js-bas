
import React from 'react';
import AdminDashboard from '@/components/admin/AdminDashboard';
import AdminNavbar from '@/components/admin/AdminNavbar';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { isAdmin } = useAuth();
  const navigate = useNavigate();
  
  React.useEffect(() => {
    if (!isAdmin) {
      navigate('/login');
    }
  }, [isAdmin, navigate]);
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AdminNavbar />
      <main className="flex-grow py-6">
        <AdminDashboard />
      </main>
    </div>
  );
};

export default Dashboard;
