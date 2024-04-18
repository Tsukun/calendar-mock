import { RejectError } from 'store/models';

export interface IUser {
    username: string;
    password: string;
}

export interface AuthState {
    isAuth: boolean;
    user: IUser;
    isPending: boolean;
    error: RejectError;
}
