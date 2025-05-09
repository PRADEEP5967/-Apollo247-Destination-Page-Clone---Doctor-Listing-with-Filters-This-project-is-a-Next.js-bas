
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

const DiabetesAssessment = () => {
  const [step, setStep] = useState(1);
  const [score, setScore] = useState(0);
  const [formData, setFormData] = useState({
    age: '',
    weight: '',
    height: '',
    waistCircumference: '',
    familyHistory: false,
    physicalActivity: false,
    highBloodPressure: false,
    highBloodSugar: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const calculateScore = () => {
    let riskScore = 0;
    
    // Sample scoring logic (simplified)
    const age = parseInt(formData.age);
    if (age > 45) riskScore += 2;
    else if (age > 35) riskScore += 1;
    
    // Calculate BMI
    const height = parseFloat(formData.height) / 100; // convert cm to m
    const weight = parseFloat(formData.weight);
    const bmi = weight / (height * height);
    
    if (bmi > 30) riskScore += 3;
    else if (bmi > 25) riskScore += 2;
    
    if (parseInt(formData.waistCircumference) > 90) riskScore += 2;
    if (formData.familyHistory) riskScore += 2;
    if (!formData.physicalActivity) riskScore += 1;
    if (formData.highBloodPressure) riskScore += 2;
    if (formData.highBloodSugar) riskScore += 3;
    
    return riskScore;
  };
  
  const handleNext = () => {
    if (step === 1) {
      if (!formData.age || !formData.weight || !formData.height) {
        toast.error("Please fill all required fields");
        return;
      }
      setStep(2);
    } else {
      const calculatedScore = calculateScore();
      setScore(calculatedScore);
      setStep(3);
    }
  };
  
  const getRiskLevel = () => {
    if (score < 5) return { level: "Low", color: "text-green-600" };
    if (score < 10) return { level: "Moderate", color: "text-yellow-600" };
    return { level: "High", color: "text-red-600" };
  };
  
  const restart = () => {
    setStep(1);
    setScore(0);
    setFormData({
      age: '',
      weight: '',
      height: '',
      waistCircumference: '',
      familyHistory: false,
      physicalActivity: false,
      highBloodPressure: false,
      highBloodSugar: false
    });
  };
  
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-apollo-blue mb-6">Diabetes Risk Assessment</h2>
      
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center">
            {step === 3 ? "Your Results" : `Step ${step} of 2`}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="age">Age (years)</Label>
                <Input 
                  id="age" 
                  name="age" 
                  type="number" 
                  value={formData.age} 
                  onChange={handleChange} 
                  placeholder="Enter your age" 
                />
              </div>
              <div>
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input 
                  id="weight" 
                  name="weight" 
                  type="number" 
                  value={formData.weight} 
                  onChange={handleChange} 
                  placeholder="Enter your weight" 
                />
              </div>
              <div>
                <Label htmlFor="height">Height (cm)</Label>
                <Input 
                  id="height" 
                  name="height" 
                  type="number" 
                  value={formData.height} 
                  onChange={handleChange} 
                  placeholder="Enter your height" 
                />
              </div>
              <div>
                <Label htmlFor="waistCircumference">Waist Circumference (cm)</Label>
                <Input 
                  id="waistCircumference" 
                  name="waistCircumference" 
                  type="number" 
                  value={formData.waistCircumference} 
                  onChange={handleChange} 
                  placeholder="Enter your waist circumference" 
                />
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="familyHistory" 
                  checked={formData.familyHistory} 
                  onCheckedChange={(checked) => handleCheckboxChange('familyHistory', checked as boolean)} 
                />
                <Label htmlFor="familyHistory">
                  Do you have a family history of diabetes?
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="physicalActivity" 
                  checked={formData.physicalActivity} 
                  onCheckedChange={(checked) => handleCheckboxChange('physicalActivity', checked as boolean)} 
                />
                <Label htmlFor="physicalActivity">
                  Do you engage in physical activity for at least 30 minutes daily?
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="highBloodPressure" 
                  checked={formData.highBloodPressure} 
                  onCheckedChange={(checked) => handleCheckboxChange('highBloodPressure', checked as boolean)} 
                />
                <Label htmlFor="highBloodPressure">
                  Have you been diagnosed with high blood pressure?
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="highBloodSugar" 
                  checked={formData.highBloodSugar} 
                  onCheckedChange={(checked) => handleCheckboxChange('highBloodSugar', checked as boolean)} 
                />
                <Label htmlFor="highBloodSugar">
                  Have you ever had high blood sugar?
                </Label>
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div className="text-center py-6">
              <div className="mb-6">
                <div className="text-6xl font-bold mb-2">{score}</div>
                <div className={`text-xl font-semibold ${getRiskLevel().color}`}>
                  {getRiskLevel().level} Risk
                </div>
              </div>
              
              <div className="text-left mb-6">
                <h3 className="font-semibold mb-2">What does this mean?</h3>
                {score < 5 ? (
                  <p>Your risk of developing type 2 diabetes is relatively low. Continue to maintain a healthy lifestyle.</p>
                ) : score < 10 ? (
                  <p>You have some risk factors for developing type 2 diabetes. Consider making lifestyle changes and consult a doctor.</p>
                ) : (
                  <p>You have a high risk of developing type 2 diabetes. We strongly recommend consulting a doctor for proper evaluation.</p>
                )}
              </div>
              
              <div>
                <Button 
                  className="bg-apollo-blue hover:bg-apollo-lightBlue mr-2"
                  onClick={() => {/* Book appointment logic */}}
                >
                  Consult a Doctor
                </Button>
                <Button 
                  variant="outline"
                  onClick={restart}
                >
                  Retake Assessment
                </Button>
              </div>
            </div>
          )}
        </CardContent>
        {step < 3 && (
          <CardFooter className="flex justify-between">
            {step > 1 && (
              <Button 
                variant="outline"
                onClick={() => setStep(step - 1)}
              >
                Back
              </Button>
            )}
            <div className={step === 1 ? 'w-full' : ''}>
              <Button 
                className="bg-apollo-blue hover:bg-apollo-lightBlue w-full"
                onClick={handleNext}
              >
                {step === 2 ? "See Results" : "Next"}
              </Button>
            </div>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default DiabetesAssessment;
