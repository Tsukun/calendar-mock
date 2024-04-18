import { Badge, Calendar } from 'antd';
import type { Dayjs } from 'dayjs';

import { formatDate } from 'utils/date';

import { IEvent } from './models';

interface EventCalendarProps {
    events: IEvent[];
}

const EventCalendar = (props: EventCalendarProps) => {
    const { events } = props;

    const dateCellRender = (value: Dayjs) => {
        const formattedDate = formatDate(value.toDate());
        const currentDayEvents = events.filter(
            (event) => event.date === formattedDate
        );
        return (
            <div>
                {currentDayEvents.map((event, index) => (
                    <div key={index}>{event.description}</div>
                ))}
            </div>
        );
    };
    return <Calendar style={{ padding: 16 }} cellRender={dateCellRender} />;
};

export default EventCalendar;
