import { RootState } from 'store';

export interface ThunkConfig<T> {
    rejectValue: T;
    state: RootState;
}

export interface RejectError {
    status?: number;
    message: string;
}
