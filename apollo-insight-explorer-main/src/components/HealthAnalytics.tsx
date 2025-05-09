
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const healthData = [
  { month: 'Jan', consultations: 65, appointments: 45, tests: 28, medications: 32 },
  { month: 'Feb', consultations: 59, appointments: 49, tests: 26, medications: 37 },
  { month: 'Mar', consultations: 80, appointments: 52, tests: 31, medications: 42 },
  { month: 'Apr', consultations: 81, appointments: 56, tests: 34, medications: 45 },
  { month: 'May', consultations: 56, appointments: 49, tests: 28, medications: 40 },
  { month: 'Jun', consultations: 55, appointments: 51, tests: 27, medications: 38 },
  { month: 'Jul', consultations: 40, appointments: 37, tests: 25, medications: 30 },
];

const specialtyData = [
  { name: 'Cardiology', patients: 400 },
  { name: 'Dermatology', patients: 300 },
  { name: 'Neurology', patients: 200 },
  { name: 'Pediatrics', patients: 278 },
  { name: 'Orthopedics', patients: 189 },
];

const HealthAnalytics = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-apollo-blue mb-2 text-center">Health Analytics Dashboard</h2>
        <p className="text-apollo-lightText text-center mb-12">Track your health metrics and monitor your progress over time</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-apollo-blue">Healthcare Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={healthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="consultations" stroke="#8884d8" />
                  <Line type="monotone" dataKey="appointments" stroke="#82ca9d" />
                  <Line type="monotone" dataKey="tests" stroke="#ffc658" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-apollo-blue">Specialty Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={specialtyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="patients" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-apollo-blue text-lg">Health Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-5xl font-bold text-green-500">85</div>
                <div className="text-sm text-apollo-lightText">
                  <span className="text-green-500 font-semibold">↑ 7%</span> from last month
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">View Details</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-apollo-blue text-lg">Upcoming Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-5xl font-bold text-apollo-blue">3</div>
                <div className="text-sm text-apollo-lightText">
                  Next: <span className="font-semibold">Tomorrow 10:00 AM</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">Manage Schedule</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-apollo-blue text-lg">Medication Adherence</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-5xl font-bold text-yellow-500">92%</div>
                <div className="text-sm text-apollo-lightText">
                  <span className="text-yellow-500 font-semibold">↑ 3%</span> from last week
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">View Reminders</Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-10 flex justify-center">
          <Button className="bg-apollo-blue hover:bg-apollo-lightBlue text-white px-8 py-2">
            View Full Analytics Report
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HealthAnalytics;
