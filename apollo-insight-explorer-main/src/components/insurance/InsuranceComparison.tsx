
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X } from 'lucide-react';

const InsuranceComparison = () => {
  const features = [
    "Network Hospitals",
    "Room Rent Capping",
    "Pre-existing Diseases",
    "No Claim Bonus",
    "Day Care Procedures",
    "Maternity Benefits",
    "Restore Benefit",
    "Health Check-ups",
    "AYUSH Coverage",
    "Teleconsultation"
  ];
  
  const plans = [
    {
      name: "Apollo Basic",
      coverage: "₹3 Lakhs",
      premium: "₹4,999",
      values: [
        "5000+",
        "2% of sum insured",
        "After 4 years",
        "5% per year",
        "140 procedures",
        <X key="1" className="h-4 w-4 text-red-500 mx-auto" />,
        <X key="2" className="h-4 w-4 text-red-500 mx-auto" />,
        "Every 2 years",
        <X key="3" className="h-4 w-4 text-red-500 mx-auto" />,
        "3 free consultations"
      ]
    },
    {
      name: "Apollo Premium",
      coverage: "₹5 Lakhs",
      premium: "₹9,999",
      values: [
        "7500+",
        "No capping",
        "After 3 years",
        "10% per year",
        "All procedures",
        <X key="4" className="h-4 w-4 text-red-500 mx-auto" />,
        <Check key="5" className="h-4 w-4 text-green-500 mx-auto" />,
        "Annual",
        <Check key="6" className="h-4 w-4 text-green-500 mx-auto" />,
        "Unlimited consultations"
      ]
    },
    {
      name: "Apollo Family",
      coverage: "₹10 Lakhs",
      premium: "₹14,999",
      values: [
        "10000+",
        "No capping",
        "After 2 years",
        "15% per year",
        "All procedures",
        <Check key="7" className="h-4 w-4 text-green-500 mx-auto" />,
        <Check key="8" className="h-4 w-4 text-green-500 mx-auto" />,
        "Bi-annual",
        <Check key="9" className="h-4 w-4 text-green-500 mx-auto" />,
        "Unlimited consultations"
      ]
    }
  ];
  
  return (
    <div className="my-12">
      <h2 className="text-2xl font-semibold text-apollo-blue mb-6 text-center">Compare Our Plans</h2>
      
      <Card>
        <CardHeader className="bg-apollo-blue/5">
          <div className="grid grid-cols-4">
            <CardTitle className="text-lg">Features</CardTitle>
            {plans.map((plan, index) => (
              <CardTitle key={index} className="text-lg text-center">{plan.name}</CardTitle>
            ))}
          </div>
        </CardHeader>
        
        <CardContent className="p-0">
          <div className="grid grid-cols-4">
            <div className="border-r">
              <div className="p-4 bg-gray-50 border-b">
                <p className="font-medium">Coverage</p>
              </div>
              <div className="p-4 border-b">
                <p className="font-medium">Premium</p>
              </div>
              {features.map((feature, i) => (
                <div key={i} className={`p-4 ${i < features.length - 1 ? 'border-b' : ''}`}>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
            
            {plans.map((plan, planIndex) => (
              <div key={planIndex} className={planIndex < plans.length - 1 ? "border-r" : ""}>
                <div className="p-4 bg-gray-50 border-b text-center">
                  <p className="font-semibold">{plan.coverage}</p>
                </div>
                <div className="p-4 border-b text-center">
                  <p className="font-semibold">{plan.premium}/year</p>
                </div>
                {plan.values.map((value, valueIndex) => (
                  <div key={valueIndex} className={`p-4 ${valueIndex < plan.values.length - 1 ? 'border-b' : ''} text-center`}>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InsuranceComparison;
