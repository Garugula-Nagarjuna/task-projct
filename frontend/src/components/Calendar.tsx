// src/components/Calendar.tsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface CalendarProps {
    onDateSelect: (date: Date | null) => void;
}

const Calendar: React.FC<CalendarProps> = ({ onDateSelect }) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
        onDateSelect(date);  // Pass the selected date to Sidebar
    };

    return (
        <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
            className="datepicker-popup"
        />
    );
};

export default Calendar;
