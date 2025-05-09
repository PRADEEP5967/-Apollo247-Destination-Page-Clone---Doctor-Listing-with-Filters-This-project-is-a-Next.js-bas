
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Appointment } from '@/components/dashboard/appointments/AppointmentCard';

export type AppointmentStatus = 'all' | 'upcoming' | 'completed' | 'cancelled';
export type AppointmentType = 'all' | 'in-person' | 'video';

export const useAppointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [filteredAppointments, setFilteredAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<AppointmentStatus>('all');
  const [typeFilter, setTypeFilter] = useState<AppointmentType>('all');
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    // In a real app, we would fetch from an API
    // Here we're using localStorage for demonstration
    const fetchAppointments = () => {
      setLoading(true);
      try {
        const allAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
        const userAppointments = allAppointments.filter((appointment: any) => 
          appointment.userId === user?.id
        );
        
        if (userAppointments.length === 0) {
          // Add some demo data if no appointments exist
          const demoAppointments: Appointment[] = [
            {
              id: '1',
              date: '2025-05-15',
              time: '10:30 AM',
              doctorName: 'Dr. Sarah Johnson',
              doctorSpecialty: 'Cardiologist',
              appointmentType: 'in-person',
              status: 'upcoming',
              location: 'Apollo Clinic, Main Street'
            },
            {
              id: '2',
              date: '2025-05-20',
              time: '2:00 PM',
              doctorName: 'Dr. Michael Chen',
              doctorSpecialty: 'General Physician',
              appointmentType: 'video',
              status: 'upcoming'
            }
          ];
          setAppointments(demoAppointments);
        } else {
          setAppointments(userAppointments);
        }
      } catch (error) {
        console.error('Error fetching appointments:', error);
        toast({
          title: "Error",
          description: "Failed to load appointments",
          variant: "destructive"
        });
      }
      setLoading(false);
    };
    
    fetchAppointments();
  }, [user, toast]);

  // Apply filters when appointments or filter values change
  useEffect(() => {
    let result = [...appointments];
    
    // Apply status filter
    if (statusFilter !== 'all') {
      result = result.filter(appointment => appointment.status === statusFilter);
    }
    
    // Apply type filter
    if (typeFilter !== 'all') {
      result = result.filter(appointment => appointment.appointmentType === typeFilter);
    }
    
    setFilteredAppointments(result);
  }, [appointments, statusFilter, typeFilter]);

  const cancelAppointment = (id: string) => {
    const updatedAppointments = appointments.map(app => 
      app.id === id ? { ...app, status: 'cancelled' as const } : app
    );
    
    setAppointments(updatedAppointments);
    
    // In a real app, we would call an API to update the appointment
    toast({
      title: "Appointment Cancelled",
      description: "Your appointment has been cancelled successfully"
    });
  };

  return { 
    appointments: filteredAppointments, 
    loading, 
    cancelAppointment,
    statusFilter,
    setStatusFilter,
    typeFilter,
    setTypeFilter
  };
};
