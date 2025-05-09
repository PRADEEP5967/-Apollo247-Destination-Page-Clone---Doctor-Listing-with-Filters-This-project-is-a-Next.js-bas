
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LabTestSearch from '../components/labtests/LabTestSearch';
import LabTestCategories from '../components/labtests/LabTestCategories';
import PopularLabTests from '../components/labtests/PopularLabTests';

const LabTests = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-apollo-blue mb-8">Lab Tests</h1>
          <LabTestSearch />
          <LabTestCategories />
          <PopularLabTests />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LabTests;
