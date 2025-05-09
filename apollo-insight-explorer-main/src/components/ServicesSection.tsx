
import React from 'react';
import ServiceCard from './ServiceCard';
import { Calendar, Video, File, Info } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Calendar className="h-8 w-8 text-apollo-blue" />,
      title: "Appointment Booking",
      description: "Schedule in-person visits with our top General Physicians at your preferred time and location."
    },
    {
      icon: <Video className="h-8 w-8 text-apollo-blue" />,
      title: "Video Consultation",
      description: "Connect with Internal Medicine specialists virtually from the comfort of your home."
    },
    {
      icon: <File className="h-8 w-8 text-apollo-blue" />,
      title: "Health Records",
      description: "Securely store and access your medical history, prescriptions, and test results online."
    },
    {
      icon: <Info className="h-8 w-8 text-apollo-blue" />,
      title: "Health Information",
      description: "Access reliable information about conditions, treatments, and preventive care."
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-apollo-blue mb-2">Our Services</h2>
        <p className="text-apollo-lightText text-center mb-12 max-w-2xl mx-auto">
          Comprehensive healthcare services designed to provide you with personalized care and support
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
