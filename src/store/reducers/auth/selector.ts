import { RootState } from 'store';

export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectError = (state: RootState) => state.auth.error;
export const selectUsername = (state: RootState) => state.auth.user.username;
export const selectIsPending = (state: RootState) => state.auth.isPending;

export const selectAuth = (state: RootState) => state.auth;
