
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const LabTestSearch = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold text-apollo-blue mb-4">Search Lab Tests</h2>
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-grow">
          <Input 
            placeholder="Search for tests, health packages..." 
            className="w-full" 
          />
        </div>
        <Button className="bg-apollo-blue hover:bg-apollo-lightBlue">
          <Search className="h-4 w-4 mr-2" /> Search
        </Button>
      </div>
      <div className="mt-4">
        <p className="text-sm text-apollo-lightText">Popular tests: Complete Blood Count, Diabetes, Thyroid Profile, Vitamin D</p>
      </div>
    </div>
  );
};

export default LabTestSearch;
