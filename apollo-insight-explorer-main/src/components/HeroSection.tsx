
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="bg-apollo-gray py-12 md:py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-apollo-blue mb-4">
            Your Health, Our Priority
          </h1>
          <p className="text-lg md:text-xl text-apollo-lightText mb-6">
            Connect with the best General Physicians and Internal Medicine specialists for personalized care and expert medical advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="bg-apollo-blue hover:bg-apollo-lightBlue text-white px-8 py-2">
              Book Appointment
            </Button>
            <Button variant="outline" className="border-apollo-blue text-apollo-blue hover:bg-apollo-gray px-8 py-2">
              Consult Online
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://img.icons8.com/bubbles/500/000000/doctor-male.png" 
            alt="Doctor with digital tablet" 
            className="rounded-lg shadow-lg max-w-full h-auto object-cover"
            style={{ maxHeight: '400px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
