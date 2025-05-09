
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Video, MapPin, FileText } from 'lucide-react';

interface AppointmentCardProps {
  appointment: Appointment;
  onCancel: (id: string) => void;
}

export interface Appointment {
  id: string;
  date: string;
  time: string;
  doctorName: string;
  doctorSpecialty: string;
  appointmentType: 'in-person' | 'video';
  status: 'upcoming' | 'completed' | 'cancelled';
  location?: string;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment, onCancel }) => {
  return (
    <Card key={appointment.id} className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className={`p-4 md:p-6 md:w-2/3 ${
            appointment.status === 'cancelled' ? 'opacity-60' : ''
          }`}>
            <div className="flex items-center mb-2">
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                appointment.status === 'upcoming' 
                  ? 'bg-green-100 text-green-800' 
                  : appointment.status === 'completed'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-800'
              }`}>
                {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
              </span>
              <span className={`ml-2 px-2 py-1 text-xs font-medium rounded-full ${
                appointment.appointmentType === 'in-person' 
                  ? 'bg-purple-100 text-purple-800' 
                  : 'bg-indigo-100 text-indigo-800'
              }`}>
                {appointment.appointmentType === 'in-person' ? 'In-Person' : 'Video Call'}
              </span>
            </div>
            
            <h3 className="text-lg font-semibold">{appointment.doctorName}</h3>
            <p className="text-sm text-gray-500">{appointment.doctorSpecialty}</p>
            
            <div className="flex flex-col sm:flex-row sm:items-center mt-4 space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-apollo-blue" />
                <span className="text-sm">
                  {new Date(appointment.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-apollo-blue" />
                <span className="text-sm">{appointment.time}</span>
              </div>
            </div>
            
            {appointment.appointmentType === 'in-person' && appointment.location && (
              <div className="flex items-start mt-2">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-apollo-blue" />
                <span className="text-sm">{appointment.location}</span>
              </div>
            )}
          </div>
          
          <div className="bg-gray-50 p-4 md:p-6 md:w-1/3 flex flex-row md:flex-col items-center justify-between">
            {appointment.status === 'upcoming' && (
              <>
                <Button 
                  variant="default" 
                  className="bg-apollo-blue hover:bg-apollo-lightBlue mb-2 w-full"
                >
                  {appointment.appointmentType === 'video' ? (
                    <>
                      <Video className="h-4 w-4 mr-2" />
                      Join Video
                    </>
                  ) : (
                    <>
                      <MapPin className="h-4 w-4 mr-2" />
                      Get Directions
                    </>
                  )}
                </Button>
                <Button 
                  variant="outline" 
                  className="border-red-500 text-red-500 hover:bg-red-50 w-full"
                  onClick={() => onCancel(appointment.id)}
                >
                  Cancel
                </Button>
              </>
            )}
            {appointment.status === 'completed' && (
              <Button 
                variant="outline" 
                className="border-apollo-blue text-apollo-blue hover:bg-apollo-gray w-full"
              >
                <FileText className="h-4 w-4 mr-2" />
                View Summary
              </Button>
            )}
            {appointment.status === 'cancelled' && (
              <Button 
                variant="outline" 
                className="border-gray-400 text-gray-500 hover:bg-gray-100 w-full"
              >
                Reschedule
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppointmentCard;
