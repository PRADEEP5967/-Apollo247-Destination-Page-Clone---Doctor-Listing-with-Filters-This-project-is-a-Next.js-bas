
import React from 'react';
import AppointmentCard from './appointments/AppointmentCard';
import EmptyAppointments from './appointments/EmptyAppointments';
import FilterAppointments from './appointments/FilterAppointments';
import { useAppointments } from '@/hooks/useAppointments';

const UserAppointments = () => {
  const { 
    appointments, 
    loading, 
    cancelAppointment,
    statusFilter,
    setStatusFilter,
    typeFilter,
    setTypeFilter
  } = useAppointments();

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-apollo-blue"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-apollo-blue">Your Appointments</h2>
      
      <FilterAppointments 
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
      />
      
      {appointments.length > 0 ? (
        appointments.map((appointment) => (
          <AppointmentCard 
            key={appointment.id} 
            appointment={appointment} 
            onCancel={cancelAppointment} 
          />
        ))
      ) : (
        <EmptyAppointments />
      )}
    </div>
  );
};

export default UserAppointments;
