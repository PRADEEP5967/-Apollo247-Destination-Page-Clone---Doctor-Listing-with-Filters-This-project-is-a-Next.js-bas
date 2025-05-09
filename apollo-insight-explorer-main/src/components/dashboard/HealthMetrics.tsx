
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Activity, Heart, Droplet, LineChart } from 'lucide-react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from 'recharts';

const bloodPressureData = [
  { date: 'Jan', systolic: 120, diastolic: 80 },
  { date: 'Feb', systolic: 124, diastolic: 82 },
  { date: 'Mar', systolic: 119, diastolic: 79 },
  { date: 'Apr', systolic: 122, diastolic: 81 },
  { date: 'May', systolic: 118, diastolic: 78 },
];

const bloodSugarData = [
  { date: 'Jan', fasting: 95, postMeal: 120 },
  { date: 'Feb', fasting: 98, postMeal: 125 },
  { date: 'Mar', fasting: 92, postMeal: 118 },
  { date: 'Apr', fasting: 94, postMeal: 122 },
  { date: 'May', fasting: 90, postMeal: 115 },
];

const heartRateData = [
  { date: 'Jan', resting: 72, exercise: 142 },
  { date: 'Feb', resting: 70, exercise: 145 },
  { date: 'Mar', resting: 71, exercise: 140 },
  { date: 'Apr', resting: 69, exercise: 138 },
  { date: 'May', resting: 68, exercise: 136 },
];

const weightData = [
  { date: 'Jan', weight: 75 },
  { date: 'Feb', weight: 74 },
  { date: 'Mar', weight: 73.5 },
  { date: 'Apr', weight: 73 },
  { date: 'May', weight: 72.5 },
];

const HealthMetrics = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-apollo-blue">Health Metrics</h2>
      
      <Tabs defaultValue="blood-pressure" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="blood-pressure" className="gap-2">
            <Heart className="h-4 w-4" />
            <span>Blood Pressure</span>
          </TabsTrigger>
          <TabsTrigger value="blood-sugar" className="gap-2">
            <Droplet className="h-4 w-4" />
            <span>Blood Sugar</span>
          </TabsTrigger>
          <TabsTrigger value="heart-rate" className="gap-2">
            <Activity className="h-4 w-4" />
            <span>Heart Rate</span>
          </TabsTrigger>
          <TabsTrigger value="weight" className="gap-2">
            <LineChart className="h-4 w-4" />
            <span>Weight</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="blood-pressure">
          <Card>
            <CardHeader>
              <CardTitle>Blood Pressure</CardTitle>
              <CardDescription>Track your blood pressure over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart data={bloodPressureData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="systolic" stroke="#8884d8" name="Systolic" />
                    <Line type="monotone" dataKey="diastolic" stroke="#82ca9d" name="Diastolic" />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Latest Reading</p>
                  <p className="text-3xl font-bold text-apollo-blue">118/78</p>
                  <p className="text-sm text-gray-500 mt-1">May 2, 2025</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Average (6 months)</p>
                  <p className="text-3xl font-bold text-green-600">121/80</p>
                  <p className="text-sm text-gray-500 mt-1">Normal Range</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="blood-sugar">
          <Card>
            <CardHeader>
              <CardTitle>Blood Sugar</CardTitle>
              <CardDescription>Track your blood sugar levels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart data={bloodSugarData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="fasting" stroke="#8884d8" name="Fasting" />
                    <Line type="monotone" dataKey="postMeal" stroke="#82ca9d" name="Post-Meal" />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Latest Fasting</p>
                  <p className="text-3xl font-bold text-apollo-blue">90 mg/dL</p>
                  <p className="text-sm text-gray-500 mt-1">May 2, 2025</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Latest Post-Meal</p>
                  <p className="text-3xl font-bold text-green-600">115 mg/dL</p>
                  <p className="text-sm text-gray-500 mt-1">May 2, 2025</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="heart-rate">
          <Card>
            <CardHeader>
              <CardTitle>Heart Rate</CardTitle>
              <CardDescription>Track your heart rate patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={heartRateData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="resting" fill="#8884d8" name="Resting" />
                    <Bar dataKey="exercise" fill="#82ca9d" name="During Exercise" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Latest Resting</p>
                  <p className="text-3xl font-bold text-apollo-blue">68 BPM</p>
                  <p className="text-sm text-gray-500 mt-1">May 2, 2025</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Latest During Exercise</p>
                  <p className="text-3xl font-bold text-green-600">136 BPM</p>
                  <p className="text-sm text-gray-500 mt-1">May 2, 2025</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="weight">
          <Card>
            <CardHeader>
              <CardTitle>Weight</CardTitle>
              <CardDescription>Track your weight changes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart data={weightData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="weight" stroke="#8884d8" name="Weight (kg)" />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Current Weight</p>
                  <p className="text-3xl font-bold text-apollo-blue">72.5 kg</p>
                  <p className="text-sm text-gray-500 mt-1">May 2, 2025</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Change (6 months)</p>
                  <p className="text-3xl font-bold text-green-600">-2.5 kg</p>
                  <p className="text-sm text-gray-500 mt-1">Since January</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HealthMetrics;
