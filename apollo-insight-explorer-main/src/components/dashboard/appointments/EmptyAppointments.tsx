
import React from 'react';
import { Calendar, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AppointmentStatus, AppointmentType } from '@/hooks/useAppointments';

interface EmptyAppointmentsProps {
  statusFilter?: AppointmentStatus;
  typeFilter?: AppointmentType;
}

const EmptyAppointments: React.FC<EmptyAppointmentsProps> = ({ 
  statusFilter = 'all', 
  typeFilter = 'all' 
}) => {
  const getMessage = () => {
    if (statusFilter !== 'all' || typeFilter !== 'all') {
      return {
        title: "No matching appointments",
        description: `No ${statusFilter !== 'all' ? statusFilter : ''} ${typeFilter !== 'all' ? typeFilter : ''} appointments found.`,
        icon: <Filter className="h-12 w-12 mx-auto text-gray-400 mb-4" />
      };
    }
    
    return {
      title: "No appointments found",
      description: "You don't have any appointments scheduled.",
      icon: <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-4" />
    };
  };

  const message = getMessage();

  return (
    <div className="text-center py-8 bg-gray-50 rounded-lg">
      {message.icon}
      <h3 className="text-lg font-medium text-gray-900">{message.title}</h3>
      <p className="text-gray-500 mt-1">{message.description}</p>
      <Button className="mt-4 bg-apollo-blue hover:bg-apollo-lightBlue">
        Book an Appointment
      </Button>
    </div>
  );
};

export default EmptyAppointments;
