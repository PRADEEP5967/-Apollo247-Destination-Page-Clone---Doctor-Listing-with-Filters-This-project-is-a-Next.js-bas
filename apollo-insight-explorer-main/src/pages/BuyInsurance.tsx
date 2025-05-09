
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InsurancePlans from '../components/insurance/InsurancePlans';
import InsuranceBenefits from '../components/insurance/InsuranceBenefits';
import InsuranceComparison from '../components/insurance/InsuranceComparison';

const BuyInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-apollo-blue mb-8">Health Insurance</h1>
          <InsuranceBenefits />
          <InsurancePlans />
          <InsuranceComparison />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BuyInsurance;
