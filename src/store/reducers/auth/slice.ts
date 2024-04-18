import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RejectError } from 'store/models';
import { AuthState, IUser } from './models';
import { login } from './asyncAction';

const initialState: AuthState = {
    isAuth: false,
    user: {} as IUser,
    error: {} as RejectError,
    isPending: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
            state.isPending = false;
        },
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        },
        setIsPending: (state, action: PayloadAction<boolean>) => {
            state.isPending = action.payload;
        },
        setError: (state, action: PayloadAction<RejectError>) => {
            state.error = action.payload;
            state.isPending = false;
        },
        resetAuth: () => initialState,
    },
    extraReducers(builder) {
        builder.addCase(login.pending, (state) => {
            state.isPending = true;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.isPending = false;
            state.isAuth = true;
            state.user = action.payload;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.isPending = false;
            if (action.payload) {
                state.error = action.payload;
            }
        });
    },
});

export const { setAuth, setUser, setIsPending, setError, resetAuth } =
    authSlice.actions;
export default authSlice.reducer;
