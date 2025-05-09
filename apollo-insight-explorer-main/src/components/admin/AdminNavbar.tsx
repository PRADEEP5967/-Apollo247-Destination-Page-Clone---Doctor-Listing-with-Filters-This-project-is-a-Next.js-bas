
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, LogOut, User } from 'lucide-react';

const AdminNavbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  return (
    <nav className="bg-apollo-blue text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold mr-2">Apollo</span>
            <span className="text-apollo-accent text-xl font-bold">Admin</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-apollo-lightBlue"
              onClick={() => navigate('/admin/dashboard')}
            >
              <LayoutDashboard className="h-4 w-4 mr-2" />
              Dashboard
            </Button>
            
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-end">
                <span className="text-sm font-medium">{user?.name}</span>
                <span className="text-xs opacity-70">{user?.role}</span>
              </div>
              <div className="bg-white text-apollo-blue rounded-full p-1">
                <User className="h-5 w-5" />
              </div>
            </div>
            
            <Button 
              variant="ghost" 
              className="text-white hover:bg-apollo-lightBlue"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
