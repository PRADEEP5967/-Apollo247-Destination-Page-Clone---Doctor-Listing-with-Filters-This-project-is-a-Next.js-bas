
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MembershipFAQ = () => {
  const faqs = [
    {
      question: "How do I become a member?",
      answer: "You can become a member by selecting one of our membership plans and completing the registration process. Payment can be made online through various methods including credit/debit cards, UPI, or net banking."
    },
    {
      question: "Can I cancel my membership?",
      answer: "Yes, you can cancel your membership at any time. However, refunds are only provided within the first 7 days of purchase if no benefits have been availed."
    },
    {
      question: "How do I use my membership benefits?",
      answer: "Once you become a member, all benefits will be automatically applied when you log in to your account. Discounts will be applied at checkout for medicines and lab tests, and you'll get priority booking options for doctor consultations."
    },
    {
      question: "Can I add family members to my membership?",
      answer: "Yes, depending on the plan you choose, you can add family members to your membership. Pro and Premium plans allow adding up to 4 family members."
    },
    {
      question: "What is the process for free health check-ups?",
      answer: "Premium members are eligible for one free comprehensive health check-up per year. You can schedule it through the app or website and visit any of our partner diagnostic centers."
    },
    {
      question: "How long is my membership valid?",
      answer: "All memberships are valid for one year from the date of purchase. You will receive a reminder 30 days before your membership expires with renewal options."
    }
  ];

  return (
    <div className="my-12">
      <h2 className="text-2xl font-semibold text-apollo-blue mb-6 text-center">Frequently Asked Questions</h2>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default MembershipFAQ;
