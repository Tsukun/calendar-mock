import { IEvent } from 'components/EventCalendar/models';
import { IUser } from '../auth/models';

export interface EventState {
    guests: IUser[];
    events: IEvent[];
}
