import { createAsyncThunk } from '@reduxjs/toolkit';
import { RejectError, ThunkConfig } from 'store/models';
import { IUser } from '../auth/models';
import UserService from 'api/UserService';
import { IEvent } from 'components/EventCalendar/models';
import { selectUsername } from '../auth/selector';

export const fetchGuests = createAsyncThunk<
    IUser[],
    void,
    ThunkConfig<RejectError>
>('event/fetchGuests', async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
        const response = await UserService.getUsers();

        return response.data;
    } catch (e) {
        const error = e as Error;
        const message = error.message;
        return rejectWithValue({ message: message });
    }
});

export const createEvent = createAsyncThunk<
    IEvent,
    IEvent,
    ThunkConfig<RejectError>
>('event/createEvent', async (event, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
        const events = localStorage.getItem('events') || '[]';
        const json = JSON.parse(events) as IEvent[];
        json.push(event);

        localStorage.setItem('events', JSON.stringify(json));

        return event;
    } catch (e) {
        const error = e as Error;
        const message = error.message;
        return rejectWithValue({ message: message });
    }
});

export const fetchEvents = createAsyncThunk<
    IEvent[],
    void,
    ThunkConfig<RejectError>
>('event/fetchEvents', async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    try {
        const username = selectUsername(getState());

        const events = JSON.parse(
            localStorage.getItem('events') || '[]'
        ) as IEvent[];

        const filteredEvents = events.filter(
            (element) =>
                element.author === username || element.guest === username
        );

        return filteredEvents;
    } catch (e) {
        const error = e as Error;
        const message = error.message;
        return rejectWithValue({ message: message });
    }
});
