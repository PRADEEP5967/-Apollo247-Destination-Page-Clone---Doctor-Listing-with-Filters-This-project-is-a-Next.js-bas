
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const InsurancePlans = () => {
  const plans = [
    {
      name: "Apollo Basic",
      price: "₹4,999",
      period: "per year",
      coverage: "₹3 Lakhs",
      features: [
        "Hospitalization coverage",
        "Pre & post hospitalization expenses",
        "Ambulance charges",
        "Daycare treatments",
        "No medical check-up up to 45 years"
      ],
      popular: false
    },
    {
      name: "Apollo Premium",
      price: "₹9,999",
      period: "per year",
      coverage: "₹5 Lakhs",
      features: [
        "All Basic plan benefits",
        "No room rent capping",
        "Restoration of cover benefit",
        "AYUSH treatment coverage",
        "Domiciliary treatment",
        "Organ donor expenses"
      ],
      popular: true
    },
    {
      name: "Apollo Family",
      price: "₹14,999",
      period: "per year",
      coverage: "₹10 Lakhs",
      features: [
        "All Premium plan benefits",
        "Cover for up to 6 family members",
        "Maternity benefit",
        "New born baby cover",
        "Critical illness cover",
        "International emergency coverage"
      ],
      popular: false
    }
  ];

  return (
    <div className="my-12">
      <h2 className="text-2xl font-semibold text-apollo-blue mb-2 text-center">Our Health Insurance Plans</h2>
      <p className="text-apollo-lightText mb-8 text-center max-w-2xl mx-auto">
        Comprehensive health insurance plans for individuals and families
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
                <span className="text-sm text-apollo-lightText"> {plan.period}</span>
                <p className="text-sm mt-1">Coverage: <span className="font-semibold">{plan.coverage}</span></p>
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
                className={`w-full ${plan.popular ? 'bg-apollo-blue hover:bg-apollo-lightBlue' : 'bg-gray-100 text-apollo-blue hover:bg-gray-200'}`}
              >
                Get a Quote
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InsurancePlans;
