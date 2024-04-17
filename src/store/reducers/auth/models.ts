import { RejectError } from 'store/models';

export interface User {
    username: string;
    password: string;
}

export interface AuthState {
    isAuth: boolean;
    user: User;
    isPending: boolean;
    error: RejectError;
}
