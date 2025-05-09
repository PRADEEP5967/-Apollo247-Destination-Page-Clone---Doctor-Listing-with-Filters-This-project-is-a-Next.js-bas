
import React from 'react';
import DoctorCard from './DoctorCard';
import { Button } from '@/components/ui/button';

const DoctorsSection = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "General Physician",
      experience: "12+ Years",
      rating: 4,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Internal Medicine",
      experience: "8+ Years",
      rating: 5,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"
    },
    {
      name: "Dr. Priya Sharma",
      specialty: "General Physician",
      experience: "15+ Years",
      rating: 5,
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f"
    },
    {
      name: "Dr. James Wilson",
      specialty: "Internal Medicine",
      experience: "10+ Years",
      rating: 4,
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d"
    }
  ];

  return (
    <div className="bg-apollo-gray py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-apollo-blue mb-2">Our Specialists</h2>
        <p className="text-apollo-lightText text-center mb-12 max-w-2xl mx-auto">
          Consult with our experienced General Physicians and Internal Medicine specialists
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <DoctorCard 
              key={index}
              name={doctor.name}
              specialty={doctor.specialty}
              experience={doctor.experience}
              rating={doctor.rating}
              image={doctor.image}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button className="bg-apollo-blue hover:bg-apollo-lightBlue text-white px-8 py-2">
            View All Doctors
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DoctorsSection;
