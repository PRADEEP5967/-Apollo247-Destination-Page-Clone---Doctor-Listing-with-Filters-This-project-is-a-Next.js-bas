
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, User, Menu, LogOut, LayoutDashboard } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Navbar = () => {
  const { isAuthenticated, isAdmin, user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Menu 
            className="block md:hidden text-apollo-blue cursor-pointer" 
            onClick={toggleMobileMenu}
          />
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <div className="flex items-center gap-2">
              <div className="bg-apollo-blue rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <div>
                <span className="text-apollo-blue text-2xl font-bold">Apollo</span>
                <span className="text-apollo-accent text-2xl font-bold">Insight</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`md:flex items-center space-x-6 ${mobileMenuOpen ? 'flex flex-col absolute top-16 left-0 right-0 bg-white shadow-lg p-4 space-y-4 md:space-y-0 md:static md:flex-row md:shadow-none' : 'hidden'}`}>
          <a href="/" className="text-apollo-text hover:text-apollo-blue transition-colors">Home</a>
          <a href="#doctors" className="text-apollo-text hover:text-apollo-blue transition-colors">Doctors</a>
          <a href="#services" className="text-apollo-text hover:text-apollo-blue transition-colors">Services</a>
          <a href="#about" className="text-apollo-text hover:text-apollo-blue transition-colors">About Us</a>
          <a href="#contact" className="text-apollo-text hover:text-apollo-blue transition-colors">Contact</a>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5 text-apollo-blue" />
          </Button>
          
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              {isAdmin ? (
                <Button 
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                  onClick={() => navigate('/admin/dashboard')}
                >
                  <LayoutDashboard className="h-4 w-4 mr-2" />
                  Admin Dashboard
                </Button>
              ) : (
                <Button 
                  className="bg-apollo-blue hover:bg-apollo-lightBlue text-white"
                  onClick={() => navigate('/dashboard')}
                >
                  <LayoutDashboard className="h-4 w-4 mr-2" />
                  My Dashboard
                </Button>
              )}
              
              <div className="hidden md:flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="https://img.icons8.com/color/48/000000/doctor-male.png" />
                  <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{user?.name}</span>
              </div>
              
              <Button 
                onClick={handleLogout}
                className="bg-apollo-blue hover:bg-apollo-lightBlue text-white"
              >
                <LogOut className="h-4 w-4 mr-2" />
                <span>Logout</span>
              </Button>
            </div>
          ) : (
            <Button 
              className="bg-apollo-blue hover:bg-apollo-lightBlue text-white"
              onClick={() => navigate('/login')}
            >
              <User className="h-4 w-4 mr-2" />
              <span>Login</span>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
