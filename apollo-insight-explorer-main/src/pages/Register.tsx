
import React from 'react';
import Navbar from '../components/Navbar';
import RegisterForm from '../components/auth/RegisterForm';
import Footer from '../components/Footer';

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-apollo-gray">
        <div className="w-full max-w-md">
          <RegisterForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
