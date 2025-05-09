
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Percent, TruckIcon, Clock, Calendar, Activity, Heart } from 'lucide-react';

const MembershipBenefits = () => {
  const benefits = [
    {
      icon: <Percent className="h-10 w-10 text-apollo-blue" />,
      title: "Exclusive Discounts",
      description: "Save up to 20% on medicines, lab tests, and doctor consultations"
    },
    {
      icon: <TruckIcon className="h-10 w-10 text-apollo-blue" />,
      title: "Free Delivery",
      description: "Get all your medicines delivered at home for free"
    },
    {
      icon: <Clock className="h-10 w-10 text-apollo-blue" />,
      title: "Priority Service",
      description: "Skip the queue with priority appointments and services"
    },
    {
      icon: <Calendar className="h-10 w-10 text-apollo-blue" />,
      title: "Free Consultations",
      description: "Enjoy complimentary doctor consultations every year"
    },
    {
      icon: <Activity className="h-10 w-10 text-apollo-blue" />,
      title: "Health Check-ups",
      description: "Annual comprehensive health check-ups included"
    },
    {
      icon: <Heart className="h-10 w-10 text-apollo-blue" />,
      title: "Family Coverage",
      description: "Extend benefits to your family members at discounted rates"
    }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-apollo-blue mb-2 text-center">Why Become a Member?</h2>
      <p className="text-apollo-lightText mb-8 text-center max-w-2xl mx-auto">
        Apollo Membership gives you access to exclusive healthcare benefits and savings
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="rounded-full bg-apollo-gray p-4 mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-apollo-lightText">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MembershipBenefits;
