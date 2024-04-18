import { createSlice } from '@reduxjs/toolkit';
import { EventState } from './models';
import { createEvent, fetchEvents, fetchGuests } from './asyncAction';

const initialState: EventState = {
    guests: [],
    events: [],
};

const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        setGuests: (state, action) => {
            state.guests = [...state.guests, action.payload];
        },
        setEvents: (state, action) => {
            state.events = [...state.events, action.payload];
        },
    },

    extraReducers(builder) {
        builder.addCase(fetchGuests.fulfilled, (state, action) => {
            state.guests = action.payload;
        });
        builder.addCase(createEvent.fulfilled, (state, action) => {
            state.events = [...state.events, action.payload];
        });
        builder.addCase(fetchEvents.fulfilled, (state, action) => {
            state.events = action.payload;
        });
    },
});

export const {} = eventSlice.actions;
export default eventSlice.reducer;
