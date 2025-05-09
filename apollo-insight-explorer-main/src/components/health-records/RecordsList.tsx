
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Download, FileText } from 'lucide-react';

const RecordsList = () => {
  const [records, setRecords] = useState<any[]>([]);
  
  useEffect(() => {
    // In a real app, fetch from API
    const mockRecords = [
      {
        id: 1,
        name: "Blood Test Results",
        date: "2023-04-15",
        type: "Lab Report",
        doctor: "Dr. Sharma",
        hospital: "Apollo Hospital"
      },
      {
        id: 2,
        name: "Chest X-Ray",
        date: "2023-03-10",
        type: "Radiology",
        doctor: "Dr. Patel",
        hospital: "City Medical Center"
      },
      {
        id: 3,
        name: "Prescription",
        date: "2023-05-02",
        type: "Medication",
        doctor: "Dr. Khan",
        hospital: "Apollo Clinic"
      }
    ];
    
    setRecords(mockRecords);
  }, []);
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Your Health Records</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Filter</Button>
          <Button variant="outline" size="sm">Sort</Button>
        </div>
      </div>
      
      {records.length > 0 ? (
        <div className="space-y-4">
          {records.map((record) => (
            <Card key={record.id}>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="bg-apollo-gray p-3 rounded-full">
                    <FileText className="h-6 w-6 text-apollo-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{record.name}</h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-1">
                      <p className="text-sm text-apollo-lightText">Date: {new Date(record.date).toLocaleDateString()}</p>
                      <p className="text-sm text-apollo-lightText">Type: {record.type}</p>
                      <p className="text-sm text-apollo-lightText">Doctor: {record.doctor}</p>
                      <p className="text-sm text-apollo-lightText">Hospital: {record.hospital}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <FileText className="h-12 w-12 mx-auto text-gray-400 mb-3" />
          <h3 className="text-lg font-medium">No Records Found</h3>
          <p className="text-apollo-lightText mt-1">Upload your medical records to keep them organized</p>
        </div>
      )}
    </div>
  );
};

export default RecordsList;
