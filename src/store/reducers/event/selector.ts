import { RootState } from 'store';

export const selectGuests = (state: RootState) => state.event.guests;
export const selectEvents = (state: RootState) => state.event.events;
