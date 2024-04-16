import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

interface AuthState {
    isAuth: boolean;
}

const initialState: AuthState = {
    isAuth: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state) => {},
    },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
