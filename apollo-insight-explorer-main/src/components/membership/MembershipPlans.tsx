
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const MembershipPlans = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹999",
      duration: "per year",
      features: [
        "10% off on medicines",
        "5% off on lab tests",
        "Free delivery on orders above ₹500",
        "24/7 chat support"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "₹1,999",
      duration: "per year",
      features: [
        "15% off on medicines",
        "10% off on lab tests",
        "Free delivery on all orders",
        "Priority doctor appointments",
        "24/7 chat & call support"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "₹3,499",
      duration: "per year",
      features: [
        "20% off on medicines",
        "15% off on lab tests",
        "Free delivery on all orders",
        "Priority doctor appointments",
        "4 free doctor consultations",
        "Free annual health check-up",
        "24/7 premium support"
      ],
      popular: false
    }
  ];

  return (
    <div className="my-12">
      <h2 className="text-2xl font-semibold text-apollo-blue mb-2 text-center">Membership Plans</h2>
      <p className="text-apollo-lightText mb-8 text-center max-w-2xl mx-auto">
        Choose the plan that works best for you and your family
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <Card key={index} className={`relative ${plan.popular ? 'border-apollo-blue shadow-lg' : ''}`}>
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-apollo-blue text-white px-3 py-1 text-xs font-medium rounded-tr-lg rounded-bl-lg">
                Most Popular
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <div className="mt-2">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-sm text-apollo-lightText"> {plan.duration}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-600" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className={`w-full ${plan.popular ? 'bg-apollo-blue hover:bg-apollo-lightBlue' : 'bg-gray-200 text-apollo-blue hover:bg-gray-300'}`}
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MembershipPlans;
