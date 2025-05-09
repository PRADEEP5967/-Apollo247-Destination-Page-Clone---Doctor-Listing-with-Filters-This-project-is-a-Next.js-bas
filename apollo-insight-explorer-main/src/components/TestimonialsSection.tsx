
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
}

const Testimonial = ({ quote, name, title }: TestimonialProps) => {
  return (
    <Card className="bg-white h-full">
      <CardContent className="pt-6 flex flex-col h-full">
        <div className="mb-4">
          <svg className="h-8 w-8 text-apollo-blue opacity-50" fill="currentColor" viewBox="0 0 32 32">
            <path d="M10 8c-2.2 0-4 1.8-4 4v12h12V12h-6c0-2.2 1.8-4 4-4h2V0h-2C11.2 0 7.4 3.6 6.2 8H10zm18-8h-2c-4.8 0-8.6 3.6-9.8 8h3.8c-2.2 0-4 1.8-4 4v12h12V12h-6c0-2.2 1.8-4 4-4h2V0z" />
          </svg>
        </div>
        <p className="text-gray-700 flex-grow">{quote}</p>
        <div className="mt-6">
          <p className="font-bold text-apollo-blue">{name}</p>
          <p className="text-sm text-apollo-lightText">{title}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "The doctors at Apollo Insight listened carefully to my concerns and provided excellent treatment. The online booking system made scheduling my appointments so convenient.",
      name: "Emma Thompson",
      title: "Patient"
    },
    {
      quote: "I had a video consultation with Dr. Chen and was impressed by how thorough and attentive he was, despite it being a virtual appointment. Highly recommend!",
      name: "Robert Garcia",
      title: "Patient"
    },
    {
      quote: "As someone with a chronic condition, I appreciate how the Apollo team helps me manage my health with regular check-ups and personalized care plans.",
      name: "Sophia Williams",
      title: "Patient"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-apollo-blue mb-2">What Our Patients Say</h2>
        <p className="text-apollo-lightText text-center mb-12 max-w-2xl mx-auto">
          Real experiences from people who've received care from our medical professionals
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
