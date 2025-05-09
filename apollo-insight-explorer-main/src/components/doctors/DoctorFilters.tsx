
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const DoctorFilters = () => {
  const specialties = [
    "General Physician", 
    "Internal Medicine",
    "Cardiologist",
    "Orthopedic",
    "Pediatrician",
    "Dermatologist",
    "Gynecologist"
  ];

  const experience = [
    "0-5 years",
    "5-10 years",
    "10-15 years",
    "15+ years"
  ];

  const availability = [
    "Available Today",
    "Available Tomorrow",
    "Available in Next 7 days",
    "Video Consultation"
  ];

  return (
    <div>
      <Card>
        <CardContent className="p-6">
          <h3 className="font-medium mb-4">Specialty</h3>
          <div className="space-y-2">
            {specialties.map((specialty, index) => (
              <div key={index} className="flex items-center gap-2">
                <Checkbox id={`specialty-${index}`} />
                <Label htmlFor={`specialty-${index}`} className="text-sm">{specialty}</Label>
              </div>
            ))}
          </div>

          <div className="border-t my-4"></div>
          
          <h3 className="font-medium mb-4">Experience</h3>
          <div className="space-y-2">
            {experience.map((exp, index) => (
              <div key={index} className="flex items-center gap-2">
                <Checkbox id={`exp-${index}`} />
                <Label htmlFor={`exp-${index}`} className="text-sm">{exp}</Label>
              </div>
            ))}
          </div>

          <div className="border-t my-4"></div>
          
          <h3 className="font-medium mb-4">Availability</h3>
          <div className="space-y-2">
            {availability.map((avail, index) => (
              <div key={index} className="flex items-center gap-2">
                <Checkbox id={`avail-${index}`} />
                <Label htmlFor={`avail-${index}`} className="text-sm">{avail}</Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DoctorFilters;
