
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DoctorSearch from '../components/doctors/DoctorSearch';
import DoctorFilters from '../components/doctors/DoctorFilters';
import DoctorsList from '../components/doctors/DoctorsList';

const FindDoctors = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-apollo-blue mb-8">Find Doctors</h1>
          <DoctorSearch />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <DoctorFilters />
            </div>
            <div className="md:col-span-3">
              <DoctorsList />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FindDoctors;
