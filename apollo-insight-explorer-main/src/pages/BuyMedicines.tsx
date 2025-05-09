
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MedicineSearch from '../components/medicines/MedicineSearch';
import MedicineCategories from '../components/medicines/MedicineCategories';
import PopularMedicines from '../components/medicines/PopularMedicines';

const BuyMedicines = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-apollo-blue mb-8">Buy Medicines</h1>
          <MedicineSearch />
          <MedicineCategories />
          <PopularMedicines />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BuyMedicines;
