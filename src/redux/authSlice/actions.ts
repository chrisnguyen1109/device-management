import { ActionCreator } from '@/types';
import { AuthLogin, AuthLogout, AuthType } from './types';

export const loginAuth: ActionCreator<AuthLogin> = () => ({
    type: AuthType.LOGIN,
    payload: undefined,
});

export const logoutAuth: ActionCreator<AuthLogout> = () => ({
    type: AuthType.LOGOUT,
    payload: undefined,
});
