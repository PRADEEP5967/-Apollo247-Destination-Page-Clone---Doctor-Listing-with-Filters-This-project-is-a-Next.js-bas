
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-md bg-white h-full">
      <CardHeader>
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-apollo-gray rounded-full">
            {icon}
          </div>
        </div>
        <CardTitle className="text-center text-xl text-apollo-blue">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center mb-4">{description}</CardDescription>
        <div className="flex justify-center">
          <Button variant="outline" className="border-apollo-blue text-apollo-blue hover:bg-apollo-gray w-full">
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
