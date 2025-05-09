
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Pill, User, TestTube, Badge, FileText, Activity, Shield } from 'lucide-react';

const HomeFeatureCircles = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Pill className="h-10 w-10 text-apollo-blue" />,
      title: "Buy Medicines",
      path: "/buy-medicines"
    },
    {
      icon: <User className="h-10 w-10 text-apollo-blue" />,
      title: "Find Doctors",
      path: "/find-doctors"
    },
    {
      icon: <TestTube className="h-10 w-10 text-apollo-blue" />,
      title: "Lab Tests",
      path: "/lab-tests"
    },
    {
      icon: <Badge className="h-10 w-10 text-apollo-blue" />,
      title: "Membership",
      path: "/membership"
    },
    {
      icon: <FileText className="h-10 w-10 text-apollo-blue" />,
      title: "Health Records",
      path: "/health-records"
    },
    {
      icon: <Activity className="h-10 w-10 text-apollo-blue" />,
      title: "Diabetes Care",
      path: "/diabetes-reveals"
    },
    {
      icon: <Shield className="h-10 w-10 text-apollo-blue" />,
      title: "Buy Insurance",
      path: "/buy-insurance"
    }
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center cursor-pointer group"
              onClick={() => navigate(feature.path)}
            >
              <div className="rounded-full bg-apollo-gray p-6 mb-3 transition-all group-hover:bg-apollo-blue/10 group-hover:shadow-lg">
                {feature.icon}
              </div>
              <span className="text-apollo-text text-sm font-medium text-center group-hover:text-apollo-blue transition-colors">
                {feature.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFeatureCircles;
