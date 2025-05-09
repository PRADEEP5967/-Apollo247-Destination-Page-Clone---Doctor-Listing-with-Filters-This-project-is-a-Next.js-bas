
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const MedicineCategories = () => {
  const categories = [
    { name: "Health Supplements", count: "1200+ products" },
    { name: "Covid Essentials", count: "500+ products" },
    { name: "Personal Care", count: "800+ products" },
    { name: "Diabetic Care", count: "300+ products" },
    { name: "Healthcare Devices", count: "400+ products" },
    { name: "Skin Care", count: "600+ products" },
    { name: "Baby Care", count: "350+ products" },
    { name: "Ayurveda", count: "450+ products" }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-apollo-blue mb-6">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <h3 className="font-medium text-apollo-blue">{category.name}</h3>
              <p className="text-sm text-apollo-lightText">{category.count}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MedicineCategories;
