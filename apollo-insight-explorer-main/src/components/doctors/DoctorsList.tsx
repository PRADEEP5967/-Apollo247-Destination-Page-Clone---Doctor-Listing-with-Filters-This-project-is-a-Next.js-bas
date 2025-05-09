
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Video } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DoctorsList = () => {
  const navigate = useNavigate();
  const doctors = [
    {
      name: "Dr. Rajeev Sharma",
      specialty: "General Physician",
      experience: "15+ Years",
      rating: 4.8,
      reviews: 245,
      fee: "₹900",
      availability: ["Today", "Tomorrow"],
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d"
    },
    {
      name: "Dr. Priya Mehta",
      specialty: "Internal Medicine",
      experience: "12+ Years",
      rating: 4.7,
      reviews: 180,
      fee: "₹850",
      availability: ["Tomorrow"],
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f"
    },
    {
      name: "Dr. Arvind Gupta",
      specialty: "General Physician",
      experience: "10+ Years",
      rating: 4.5,
      reviews: 120,
      fee: "₹750",
      availability: ["Today"],
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"
    },
    {
      name: "Dr. Shalini Verma",
      specialty: "Internal Medicine",
      experience: "8+ Years",
      rating: 4.6,
      reviews: 95,
      fee: "₹800",
      availability: ["Today", "Tomorrow"],
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
    }
  ];

  const bookAppointment = (doctorName: string) => {
    // Store selected doctor in localStorage
    localStorage.setItem('selectedDoctor', doctorName);
    navigate('/');
  };

  return (
    <div className="space-y-6">
      {doctors.map((doctor, index) => (
        <Card key={index} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/4 p-4">
                <div className="rounded-lg overflow-hidden h-40 md:h-full">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-3/4 p-4 md:p-6">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-apollo-blue">{doctor.name}</h3>
                    <p className="text-apollo-lightText">{doctor.specialty}</p>
                    <p className="text-sm">{doctor.experience} Experience</p>
                    <div className="mt-2">
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        ★ {doctor.rating} • {doctor.reviews} reviews
                      </span>
                    </div>
                    <p className="mt-2 font-semibold">Consultation Fee: {doctor.fee}</p>
                  </div>
                  
                  <div className="mt-4 md:mt-0">
                    <div className="space-y-3">
                      <Button 
                        variant="outline" 
                        className="w-full border-apollo-blue text-apollo-blue hover:bg-apollo-gray"
                        onClick={() => bookAppointment(doctor.name)}
                      >
                        <Calendar className="h-4 w-4 mr-2" /> Book Appointment
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full border-apollo-blue text-apollo-blue hover:bg-apollo-gray"
                      >
                        <Video className="h-4 w-4 mr-2" /> Video Consult
                      </Button>
                    </div>
                    
                    <div className="mt-3 text-center">
                      <p className="text-sm text-apollo-lightText">Available: {doctor.availability.join(", ")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DoctorsList;
