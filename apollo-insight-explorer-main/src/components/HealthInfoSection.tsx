
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HealthInfoSection = () => {
  const healthArticles = [
    {
      title: "Understanding Common Cold vs. Seasonal Allergies",
      description: "Learn how to differentiate between cold symptoms and allergic reactions to get the right treatment.",
      date: "May 10, 2023"
    },
    {
      title: "Importance of Regular Health Check-ups",
      description: "Regular medical check-ups can detect health issues before they start or become problematic.",
      date: "April 25, 2023"
    },
    {
      title: "Managing Chronic Conditions at Home",
      description: "Practical tips for patients with chronic conditions to effectively manage their health at home.",
      date: "April 18, 2023"
    }
  ];

  return (
    <div className="bg-apollo-gray py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-apollo-blue mb-2">Health Information</h2>
        <p className="text-apollo-lightText text-center mb-12 max-w-2xl mx-auto">
          Stay informed with the latest health tips and medical information from our experts
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {healthArticles.map((article, index) => (
            <Card key={index} className="bg-white">
              <CardHeader>
                <CardTitle className="text-apollo-blue">{article.title}</CardTitle>
                <CardDescription>{article.date}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{article.description}</p>
                <Button variant="ghost" className="p-0 text-apollo-blue hover:text-apollo-lightBlue">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-transparent hover:bg-apollo-blue hover:text-white text-apollo-blue border border-apollo-blue transition-colors px-8 py-2">
            View All Articles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HealthInfoSection;
