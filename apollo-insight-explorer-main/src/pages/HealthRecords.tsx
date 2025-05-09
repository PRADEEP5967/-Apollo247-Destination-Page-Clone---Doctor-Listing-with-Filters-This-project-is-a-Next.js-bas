
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import RecordsList from '../components/health-records/RecordsList';
import RecordsUpload from '../components/health-records/RecordsUpload';

const HealthRecords = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-apollo-blue mb-8">Health Records</h1>
          {isAuthenticated ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <RecordsUpload />
              </div>
              <div className="md:col-span-2">
                <RecordsList />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64">
              <p className="text-xl text-apollo-lightText mb-4">Please login to view your health records</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HealthRecords;
