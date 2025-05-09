
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Building, 
  WalletCards, 
  ShieldCheck, 
  Clock, 
  HeartPulse, 
  BadgeCheck 
} from 'lucide-react';

const InsuranceBenefits = () => {
  const benefits = [
    {
      icon: <Building className="h-10 w-10 text-apollo-blue" />,
      title: "Network Hospitals",
      description: "Access to 10,000+ network hospitals for cashless treatment"
    },
    {
      icon: <WalletCards className="h-10 w-10 text-apollo-blue" />,
      title: "Cashless Claims",
      description: "Simple and quick cashless claim process with minimal paperwork"
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-apollo-blue" />,
      title: "Comprehensive Coverage",
      description: "Coverage for pre and post hospitalization, day care procedures, and more"
    },
    {
      icon: <Clock className="h-10 w-10 text-apollo-blue" />,
      title: "Fast Claims",
      description: "Claims processed within 30 minutes for cashless and 24 hours for reimbursement"
    },
    {
      icon: <HeartPulse className="h-10 w-10 text-apollo-blue" />,
      title: "Wellness Benefits",
      description: "Free health check-ups, teleconsultation, and wellness programs"
    },
    {
      icon: <BadgeCheck className="h-10 w-10 text-apollo-blue" />,
      title: "Tax Benefits",
      description: "Avail tax benefits under Section 80D of the Income Tax Act"
    }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-apollo-blue mb-2 text-center">Why Choose Apollo Health Insurance</h2>
      <p className="text-apollo-lightText mb-8 text-center max-w-2xl mx-auto">
        Comprehensive health coverage with exclusive benefits for Apollo customers
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

export default InsuranceBenefits;
