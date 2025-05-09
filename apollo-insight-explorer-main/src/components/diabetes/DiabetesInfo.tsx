
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const DiabetesInfo = () => {
  return (
    <div className="mb-12">
      <div className="bg-apollo-blue/10 rounded-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 mb-6 md:mb-0 md:pr-8">
            <h2 className="text-2xl md:text-3xl font-bold text-apollo-blue mb-4">Understanding Diabetes</h2>
            <p className="text-apollo-lightText mb-4">
              Diabetes is a chronic health condition that affects how your body turns food into energy. 
              If you have diabetes, your body either doesn't make enough insulin or can't use the insulin it makes as well as it should.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold mb-2 text-apollo-blue">Type 1 Diabetes</h3>
                <p className="text-sm text-apollo-lightText">
                  The body doesn't produce insulin. Typically develops in children and young adults.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold mb-2 text-apollo-blue">Type 2 Diabetes</h3>
                <p className="text-sm text-apollo-lightText">
                  The body doesn't use insulin properly. Most common form of diabetes, typically in adults.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-2/5">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef" 
                alt="Diabetes Care" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-3 text-apollo-blue">Symptoms</h3>
            <ul className="list-disc list-inside space-y-2 text-apollo-lightText">
              <li>Increased thirst and urination</li>
              <li>Extreme hunger</li>
              <li>Unexplained weight loss</li>
              <li>Fatigue and weakness</li>
              <li>Blurred vision</li>
              <li>Slow-healing sores</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-3 text-apollo-blue">Risk Factors</h3>
            <ul className="list-disc list-inside space-y-2 text-apollo-lightText">
              <li>Family history of diabetes</li>
              <li>Overweight or obesity</li>
              <li>Physical inactivity</li>
              <li>Age over 45</li>
              <li>High blood pressure</li>
              <li>History of gestational diabetes</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-3 text-apollo-blue">Complications</h3>
            <ul className="list-disc list-inside space-y-2 text-apollo-lightText">
              <li>Heart disease</li>
              <li>Kidney damage</li>
              <li>Eye damage</li>
              <li>Nerve damage (neuropathy)</li>
              <li>Foot damage</li>
              <li>Skin conditions</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DiabetesInfo;
