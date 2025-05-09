
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/context/AuthContext';
import AdminAppointments from './AdminAppointments';
import AdminUsers from './AdminUsers';
import { useNavigate } from 'react-router-dom';
import { BarChart, Users, Calendar, Activity, CreditCard, FileText } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

const visitData = [
  { name: 'Jan', visits: 65 },
  { name: 'Feb', visits: 72 },
  { name: 'Mar', visits: 85 },
  { name: 'Apr', visits: 78 },
  { name: 'May', visits: 90 },
];

const pieData = [
  { name: 'General', value: 45 },
  { name: 'Cardiology', value: 25 },
  { name: 'Orthopedics', value: 15 },
  { name: 'Neurology', value: 10 },
  { name: 'Other', value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const AdminDashboard = () => {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  
  // If not admin, redirect to home
  React.useEffect(() => {
    if (!isAdmin) {
      navigate('/');
    }
  }, [isAdmin, navigate]);
  
  if (!isAdmin) {
    return null; // Prevents flash before redirect
  }

  // Get today's date in ISO format to filter appointments
  const today = new Date().toISOString().split('T')[0];
  
  const appointments = getAppointments();
  const users = getUsers();
  const todayAppointments = appointments.filter(a => a.date === today);
  const revenue = calculateRevenue(appointments);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <h1 className="text-3xl font-bold mb-2 sm:mb-0 text-apollo-blue">Admin Dashboard</h1>
        <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-md flex items-center">
          <Calendar className="h-5 w-5 mr-2" />
          <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center text-blue-700">
              <Calendar className="mr-2 h-5 w-5" />
              Total Appointments
            </CardTitle>
            <CardDescription className="text-blue-600">All scheduled appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-blue-700">{appointments.length}</p>
            <p className="text-sm text-blue-600 mt-1">
              {appointments.length > 0 ? '+5% from last month' : 'No previous data'}
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center text-green-700">
              <Users className="mr-2 h-5 w-5" />
              Total Patients
            </CardTitle>
            <CardDescription className="text-green-600">Registered users</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-700">{users.filter(u => u.role === 'user').length}</p>
            <p className="text-sm text-green-600 mt-1">
              {users.length > 1 ? '+3% from last month' : 'No previous data'}
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center text-purple-700">
              <Activity className="mr-2 h-5 w-5" />
              Today's Appointments
            </CardTitle>
            <CardDescription className="text-purple-600">Scheduled for today</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-purple-700">{todayAppointments.length}</p>
            <p className="text-sm text-purple-600 mt-1">
              {todayAppointments.length > 0 ? '+2 from yesterday' : 'No appointments today'}
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center text-amber-700">
              <CreditCard className="mr-2 h-5 w-5" />
              Revenue
            </CardTitle>
            <CardDescription className="text-amber-600">Total earnings this month</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-amber-700">₹{revenue.toLocaleString()}</p>
            <p className="text-sm text-amber-600 mt-1">
              {revenue > 0 ? '+8% from last month' : 'No revenue data'}
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="h-5 w-5 text-apollo-blue" />
              Monthly Appointments
            </CardTitle>
            <CardDescription>Appointment trends over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={visitData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="visits" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-apollo-blue" />
              Appointment Types
            </CardTitle>
            <CardDescription>Distribution by specialty</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="appointments" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="appointments" className="gap-2">
            <Calendar className="h-4 w-4" />
            <span>Appointments</span>
          </TabsTrigger>
          <TabsTrigger value="users" className="gap-2">
            <Users className="h-4 w-4" />
            <span>Users</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="appointments" className="space-y-4">
          <AdminAppointments />
        </TabsContent>
        
        <TabsContent value="users" className="space-y-4">
          <AdminUsers />
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Helper functions to get data from localStorage
const getAppointments = () => {
  return JSON.parse(localStorage.getItem('appointments') || '[]');
};

const getUsers = () => {
  return JSON.parse(localStorage.getItem('users') || '[]');
};

// Calculate revenue from appointments (demo function)
const calculateRevenue = (appointments: any[]) => {
  // In a real app, this would calculate based on appointment costs
  // For demo, we'll use a random amount per appointment
  return appointments.length * 1500 + Math.floor(Math.random() * 5000);
};

export default AdminDashboard;
