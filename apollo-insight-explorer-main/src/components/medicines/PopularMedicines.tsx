
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PopularMedicines = () => {
  const medicines = [
    { name: "Dolo 650mg Tablet", pack: "15 tablets", price: "₹29.25", mrp: "₹32.50" },
    { name: "Zincovit Tablet", pack: "30 tablets", price: "₹104.50", mrp: "₹115.00" },
    { name: "Ecosprin 75mg Tablet", pack: "14 tablets", price: "₹8.45", mrp: "₹9.50" },
    { name: "Shelcal 500mg Tablet", pack: "15 tablets", price: "₹104.30", mrp: "₹125.00" },
    { name: "Limcee Vitamin C Tablet", pack: "15 tablets", price: "₹24.65", mrp: "₹29.00" },
    { name: "Neurobion Forte Tablet", pack: "30 tablets", price: "₹36.45", mrp: "₹42.88" }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-apollo-blue mb-6">Popular Medicines</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {medicines.map((medicine, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-center h-48 bg-gray-100 rounded mb-4">
                <span className="text-gray-400">Medicine Image</span>
              </div>
              <h3 className="font-medium text-lg">{medicine.name}</h3>
              <p className="text-sm text-apollo-lightText mb-2">{medicine.pack}</p>
              <div className="flex items-center gap-2">
                <span className="font-semibold">{medicine.price}</span>
                <span className="text-sm text-apollo-lightText line-through">{medicine.mrp}</span>
              </div>
            </CardContent>
            <CardFooter className="p-4 border-t">
              <Button className="w-full bg-apollo-blue hover:bg-apollo-lightBlue">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PopularMedicines;
