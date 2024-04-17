import { Calendar } from 'antd';
import React from 'react';

interface EventCalendarProps {
    events: Event[];
}

const EventCalendar = (props: EventCalendarProps) => {
    const { events } = props;
    return <Calendar style={{ padding: 16 }} />;
};

export default EventCalendar;
