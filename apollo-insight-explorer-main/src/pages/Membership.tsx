
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MembershipPlans from '../components/membership/MembershipPlans';
import MembershipBenefits from '../components/membership/MembershipBenefits';
import MembershipFAQ from '../components/membership/MembershipFAQ';

const Membership = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-apollo-blue mb-8">Apollo Membership</h1>
          <MembershipBenefits />
          <MembershipPlans />
          <MembershipFAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Membership;
