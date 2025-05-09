
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const DoctorSearch = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold text-apollo-blue mb-4">Find the Right Doctor</h2>
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-grow">
          <Input 
            placeholder="Search by doctor name, specialty..." 
            className="w-full" 
          />
        </div>
        <Button className="bg-apollo-blue hover:bg-apollo-lightBlue">
          <Search className="h-4 w-4 mr-2" /> Search
        </Button>
      </div>
      <div className="mt-4">
        <p className="text-sm text-apollo-lightText">Popular specialties: General Physician, Internal Medicine, Pediatrics, Dermatology</p>
      </div>
    </div>
  );
};

export default DoctorSearch;
