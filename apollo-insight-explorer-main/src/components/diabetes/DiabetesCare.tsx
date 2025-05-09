
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const DiabetesCare = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-apollo-blue mb-6">Diabetes Care & Management</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-3">Diabetes Management Program</h3>
            <p className="text-apollo-lightText mb-4">
              Our comprehensive program helps you manage your diabetes effectively with personalized care plans, regular monitoring, and expert guidance.
            </p>
            <ul className="list-disc list-inside space-y-1 text-apollo-lightText mb-4">
              <li>Regular consultations with specialists</li>
              <li>Medication management</li>
              <li>Nutritional guidance</li>
              <li>Blood glucose monitoring</li>
            </ul>
            <Button className="w-full bg-apollo-blue hover:bg-apollo-lightBlue">
              Enroll Now
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-3">Diabetes Health Package</h3>
            <p className="text-apollo-lightText mb-4">
              Comprehensive health check designed specifically for people with diabetes or those at risk.
            </p>
            <ul className="list-disc list-inside space-y-1 text-apollo-lightText mb-4">
              <li>HbA1c test</li>
              <li>Lipid profile</li>
              <li>Kidney function test</li>
              <li>Eye examination</li>
              <li>Foot examination</li>
            </ul>
            <Button className="w-full bg-apollo-blue hover:bg-apollo-lightBlue">
              Book Package
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-3">Diabetes Diet Consultation</h3>
            <p className="text-apollo-lightText mb-4">
              Get personalized diet plans from our expert nutritionists specialized in diabetes management.
            </p>
            <ul className="list-disc list-inside space-y-1 text-apollo-lightText mb-4">
              <li>Personalized meal planning</li>
              <li>Carbohydrate counting guidance</li>
              <li>Recipe suggestions</li>
              <li>Nutritional education</li>
            </ul>
            <Button className="w-full bg-apollo-blue hover:bg-apollo-lightBlue">
              Book Consultation
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-apollo-blue/10 rounded-lg p-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 mb-6 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-bold text-apollo-blue mb-4">Living Well with Diabetes</h2>
            <p className="text-apollo-lightText mb-4">
              Diabetes doesn't have to control your life. With the right management plan, you can live a full, active, and healthy life while keeping your blood sugar under control.
            </p>
            <p className="text-apollo-lightText mb-4">
              Our team of specialists will work with you to create a personalized care plan that fits your lifestyle and helps you manage your diabetes effectively.
            </p>
            <Button className="bg-apollo-blue hover:bg-apollo-lightBlue">
              Speak to a Diabetes Specialist
            </Button>
          </div>
          <div className="md:w-2/5">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0" 
                alt="Diabetes Care" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiabetesCare;
