
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { 
  CalendarCheck, 
  CalendarClock, 
  CheckCheck, 
  Ban,
  Video, 
  MapPin
} from 'lucide-react';
import { AppointmentStatus, AppointmentType } from '@/hooks/useAppointments';

interface FilterAppointmentsProps {
  statusFilter: AppointmentStatus;
  setStatusFilter: (status: AppointmentStatus) => void;
  typeFilter: AppointmentType;
  setTypeFilter: (type: AppointmentType) => void;
}

const FilterAppointments: React.FC<FilterAppointmentsProps> = ({
  statusFilter,
  setStatusFilter,
  typeFilter,
  setTypeFilter
}) => {
  return (
    <div className="mb-6 space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2 text-gray-500">Filter by Status</h3>
        <ToggleGroup 
          type="single" 
          value={statusFilter} 
          onValueChange={(value) => setStatusFilter(value as AppointmentStatus)}
          className="justify-start"
        >
          <ToggleGroupItem value="all" aria-label="All appointments">
            <CalendarCheck className="mr-1" />
            All
          </ToggleGroupItem>
          <ToggleGroupItem value="upcoming" aria-label="Upcoming appointments">
            <CalendarClock className="mr-1" />
            Upcoming
          </ToggleGroupItem>
          <ToggleGroupItem value="completed" aria-label="Completed appointments">
            <CheckCheck className="mr-1" />
            Completed
          </ToggleGroupItem>
          <ToggleGroupItem value="cancelled" aria-label="Cancelled appointments">
            <Ban className="mr-1" />
            Cancelled
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2 text-gray-500">Filter by Type</h3>
        <ToggleGroup 
          type="single" 
          value={typeFilter} 
          onValueChange={(value) => setTypeFilter(value as AppointmentType)}
          className="justify-start"
        >
          <ToggleGroupItem value="all" aria-label="All appointment types">
            All Types
          </ToggleGroupItem>
          <ToggleGroupItem value="in-person" aria-label="In-person appointments">
            <MapPin className="mr-1" />
            In-Person
          </ToggleGroupItem>
          <ToggleGroupItem value="video" aria-label="Video appointments">
            <Video className="mr-1" />
            Video
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
};

export default FilterAppointments;
