
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PopularLabTests = () => {
  const tests = [
    { 
      name: "Complete Blood Count", 
      desc: "Evaluates overall health and detects various disorders", 
      price: "₹350", 
      mrp: "₹450",
      home: true
    },
    { 
      name: "HbA1c", 
      desc: "Average blood glucose levels over past 2-3 months", 
      price: "₹400", 
      mrp: "₹500",
      home: true
    },
    { 
      name: "Lipid Profile", 
      desc: "Measures cholesterol and triglycerides", 
      price: "₹450", 
      mrp: "₹599",
      home: true
    },
    { 
      name: "Thyroid Profile", 
      desc: "Assesses thyroid gland function", 
      price: "₹650", 
      mrp: "₹850",
      home: true
    },
    { 
      name: "Vitamin B12", 
      desc: "Measures vitamin B12 levels in the blood", 
      price: "₹550", 
      mrp: "₹700",
      home: true
    },
    { 
      name: "Liver Function Test", 
      desc: "Evaluates liver function and detects liver damage", 
      price: "₹500", 
      mrp: "₹650",
      home: true
    }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-apollo-blue mb-6">Popular Tests</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tests.map((test, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-lg">{test.name}</h3>
                {test.home && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    Home Collection
                  </span>
                )}
              </div>
              <p className="text-sm text-apollo-lightText mb-3">{test.desc}</p>
              <div className="flex items-center gap-2">
                <span className="font-semibold">{test.price}</span>
                <span className="text-sm text-apollo-lightText line-through">{test.mrp}</span>
                <span className="text-xs text-green-600">
                  {Math.round((1 - parseInt(test.price.replace('₹', '')) / parseInt(test.mrp.replace('₹', ''))) * 100)}% off
                </span>
              </div>
            </CardContent>
            <CardFooter className="p-4 border-t">
              <Button className="w-full bg-apollo-blue hover:bg-apollo-lightBlue">Book Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PopularLabTests;
