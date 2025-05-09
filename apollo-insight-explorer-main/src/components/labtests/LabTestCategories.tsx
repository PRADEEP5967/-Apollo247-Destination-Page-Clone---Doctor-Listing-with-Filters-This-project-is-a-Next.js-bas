
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const LabTestCategories = () => {
  const categories = [
    { name: "Health Checkup Packages", desc: "Comprehensive health evaluations" },
    { name: "Diabetes", desc: "Blood sugar and related tests" },
    { name: "Fever Panel", desc: "Tests to identify causes of fever" },
    { name: "Heart Health", desc: "Cardiac risk assessment" },
    { name: "Women's Health", desc: "Tests specific to women's health" },
    { name: "Men's Health", desc: "Tests specific to men's health" },
    { name: "Thyroid Tests", desc: "Thyroid function assessment" },
    { name: "Vitamin Tests", desc: "Vitamin deficiency panels" }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-apollo-blue mb-6">Test Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <h3 className="font-medium text-apollo-blue mb-1">{category.name}</h3>
              <p className="text-sm text-apollo-lightText">{category.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LabTestCategories;
