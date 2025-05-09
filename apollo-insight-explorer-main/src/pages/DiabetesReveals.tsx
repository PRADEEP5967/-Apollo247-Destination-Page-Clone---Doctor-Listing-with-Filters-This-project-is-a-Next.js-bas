
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DiabetesInfo from '../components/diabetes/DiabetesInfo';
import DiabetesAssessment from '../components/diabetes/DiabetesAssessment';
import DiabetesCare from '../components/diabetes/DiabetesCare';

const DiabetesReveals = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-apollo-blue mb-8">Diabetes Care & Management</h1>
          <DiabetesInfo />
          <DiabetesAssessment />
          <DiabetesCare />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DiabetesReveals;
