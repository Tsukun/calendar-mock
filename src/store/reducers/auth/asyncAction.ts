import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { RejectError, ThunkConfig } from 'store/models';

import { IUser } from './models';
import UserService from 'api/UserService';

export const login = createAsyncThunk<IUser, IUser, ThunkConfig<RejectError>>(
    'auth/login',
    async (user, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const mockUser = await new Promise<IUser[]>(async (resolve) => {
                const response = await UserService.getUsers();

                setTimeout(() => resolve(response.data), 3000);
            });

            const findedUser = mockUser.find(
                (mock) =>
                    mock.username === user.username &&
                    mock.password === user.password
            );

            if (!findedUser) {
                throw new Error('Произошла ошибка при логине');
            }

            return findedUser;
        } catch (e) {
            const error = e as Error;
            const message = error.message;
            return rejectWithValue({ message: message });
        }
    }
);
